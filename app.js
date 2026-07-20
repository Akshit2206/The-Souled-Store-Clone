document.addEventListener('DOMContentLoaded', () => {
    // Scroll Events
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        
        // Navbar Scrolled Class
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Back to Top button
        if (backToTop) {
            if (scrollTop > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page loaded half scrolled

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll Animations using Intersection Observer
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    if (scrollAnimateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target); // Animates once
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        scrollAnimateElements.forEach(el => observer.observe(el));
    }

    // Dynamic Cart Badge Updates
    const updateNavbarCartBadge = () => {
        const badgeElements = document.querySelectorAll('.navbar .badge');
        const cartCount = getCartCount();
        
        badgeElements.forEach(badge => {
            badge.innerText = cartCount;
            if (cartCount > 0) {
                badge.style.display = 'inline-block';
            } else {
                badge.style.display = 'none';
            }
        });
    };

    // Update cart badge initially
    updateNavbarCartBadge();

    // Listen for database changes to cart
    window.addEventListener('cartUpdated', updateNavbarCartBadge);

    // Search bar functionality
    const searchForm = document.querySelector('form[action="products.html"]');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchInput = searchForm.querySelector('input[type="search"]');
            if (searchInput) {
                const query = encodeURIComponent(searchInput.value.trim());
                window.location.href = `products.html?search=${query}`;
            }
        });
    }

    // General bootstrap Toast triggers for fast Add-to-Cart from lists
    const cartToastEl = document.getElementById('cartToast');
    if (cartToastEl && typeof bootstrap !== 'undefined') {
        const cartToast = new bootstrap.Toast(cartToastEl);
        window.showCartToast = () => {
            cartToast.show();
        };
    }
});

// Helper for formatting price in Indian Rupees (Rs.)
function formatPrice(amount) {
    return 'Rs. ' + amount.toLocaleString('en-IN');
}
