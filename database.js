// Default mock products data
const defaultProducts = [
    // Men's Collection
    {
        id: 1,
        name: "Akatsuki Red Cloud Hoodie",
        category: "hoodie",
        gender: "men",
        price: 2500,
        image: "images/akatsuki_cloud_hoodie.png",
        images: [
            "images/akatsuki_cloud_hoodie.png",
            "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=600&q=80"
        ],
        description: "This premium heavyweight streetwear hoodie features a bold red Akatsuki cloud symbol printed on the chest. Tailored for comfort with modern street aesthetics, pre-shrunk cotton fabric, and large front utility pockets.",
        isTrending: true,
        isNew: false,
        badge: "Trending"
    },
    {
        id: 2,
        name: "Iron Man Reactor T-Shirt",
        category: "marvel",
        gender: "men",
        price: 1900,
        image: "images/ironman_reactor_shirt.png",
        images: [
            "images/ironman_reactor_shirt.png",
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Show your love for Earth's mightiest heroes with this official Marvel Reactor T-Shirt. Made from 100% premium combed cotton for ultimate breathability and durability.",
        isTrending: true,
        isNew: false,
        badge: "Best Seller"
    },
    {
        id: 3,
        name: "Goku Kanji Oversized T-Shirt",
        category: "anime",
        gender: "men",
        price: 1500,
        image: "images/goku_kanji_shirt.png",
        images: [
            "images/goku_kanji_shirt.png"
        ],
        description: "Lend your energy to Goku with this premium graphic T-Shirt. High quality ink print that won't fade or crack even after numerous washes.",
        isTrending: true,
        isNew: false,
        badge: "Trending"
    },
    {
        id: 4,
        name: "Vintage Streetwear Baggy Jeans",
        category: "oversized",
        gender: "men",
        price: 2200,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Embrace the comfort of modern oversized streetwear. Perfect for daily wear, crafted with durable double-needle stitching and high-weight denim loops.",
        isTrending: false,
        isNew: true,
        badge: "New"
    },
    {
        id: 5,
        name: "Winter Fleece Hoodie",
        category: "hoodie",
        gender: "men",
        price: 3900,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Heavyweight organic cotton and pure fleece combine to keep you insulated from the cold while looking incredibly sharp.",
        isTrending: false,
        isNew: false,
        badge: ""
    },
    {
        id: 6,
        name: "Retro Cargo Joggers",
        category: "accessories",
        gender: "men",
        price: 2400,
        image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Streetwear utility cargo pants designed with double pockets, elastic cuffs, and high quality cotton canvas fabric.",
        isTrending: false,
        isNew: true,
        badge: "New"
    },
    {
        id: 7,
        name: "Classic Black Varsity Jacket",
        category: "accessories",
        gender: "men",
        price: 4500,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Sporty aesthetic collared button-up jacket. Perfect for layering over graphic T-shirts.",
        isTrending: false,
        isNew: false,
        badge: ""
    },

    // Women's Collection
    {
        id: 8,
        name: "Sailor Moon Pastel Hoodie",
        category: "hoodie",
        gender: "women",
        price: 3500,
        image: "images/sailor_moon_hoodie.png",
        images: [
            "images/sailor_moon_hoodie.png"
        ],
        description: "Keep it simple yet premium with our pastel pink fleece crop hoodie. Soft inner lining, sleek drawstrings, and a cozy fit make this your winter go-to.",
        isTrending: true,
        isNew: false,
        badge: "Best Seller"
    },
    {
        id: 9,
        name: "Captain Marvel Crop Top",
        category: "marvel",
        gender: "women",
        price: 1500,
        image: "images/captain_marvel_top.png",
        images: [
            "images/captain_marvel_top.png"
        ],
        description: "High quality Captain Marvel star emblem crop top. Designed with flexible fabric, ideal for athletic as well as streetwear styling.",
        isTrending: false,
        isNew: true,
        badge: "New"
    },
    {
        id: 10,
        name: "Spider-Gwen Oversized T-Shirt",
        category: "marvel",
        gender: "women",
        price: 1800,
        image: "images/spidergwen_tshirt.png",
        images: [
            "images/spidergwen_tshirt.png"
        ],
        description: "Step into the spiderverse with our official Spider-Gwen oversized T-Shirt, crafted with high-density printing.",
        isTrending: false,
        isNew: true,
        badge: "New"
    },
    {
        id: 11,
        name: "Nezuko Kimono Pattern Dress",
        category: "anime",
        gender: "women",
        price: 2900,
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Demon Slayer inspired pink checker pattern dress. Soft, breathable material with high-resolution printing.",
        isTrending: false,
        isNew: false,
        badge: ""
    },
    {
        id: 12,
        name: "Black Widow Stealth Crop Top",
        category: "marvel",
        gender: "women",
        price: 1700,
        image: "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Sleek and sporty crop top featuring the red Black Widow emblem on a stealth-black compressed fabric.",
        isTrending: false,
        isNew: false,
        badge: ""
    },
    {
        id: 13,
        name: "Lilac Relaxed Crop Hoodie",
        category: "hoodie",
        gender: "women",
        price: 3200,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Calm lilac cropped hoodie in cotton fleece, tailored for cozy comfort and high-end street fashion.",
        isTrending: false,
        isNew: false,
        badge: ""
    },
    {
        id: 14,
        name: "Denim Boyfriend Jacket",
        category: "oversized",
        gender: "women",
        price: 3900,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Oversized boyfriend fit denim jacket. Features button-up pockets, metal hardware, and heavy denim wash styling.",
        isTrending: false,
        isNew: false,
        badge: ""
    },
    {
        id: 15,
        name: "Sporty Red Sneakers",
        category: "accessories",
        gender: "unisex",
        price: 4500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        ],
        description: "Vibrant red sneakers with textured grips and soft cushioning to make you stand out and keep your strides comfortable.",
        isTrending: false,
        isNew: true,
        badge: "Trending"
    }
];

// Initialize database
function initDatabase() {
    if (!localStorage.getItem('souled_store_products')) {
        localStorage.setItem('souled_store_products', JSON.stringify(defaultProducts));
    } else {
        // Auto-update localStorage products if database schema/items updated
        const stored = JSON.parse(localStorage.getItem('souled_store_products'));
        if (stored.length !== defaultProducts.length || !stored[0].gender || !stored.find(p => p.id === 8 && p.name.includes("Sailor"))) {
            localStorage.setItem('souled_store_products', JSON.stringify(defaultProducts));
        }
    }
    if (!localStorage.getItem('souled_store_cart')) {
        localStorage.setItem('souled_store_cart', JSON.stringify([]));
    }
    if (!localStorage.getItem('souled_store_contacts')) {
        localStorage.setItem('souled_store_contacts', JSON.stringify([]));
    }
}

// Get all products
function getAllProducts() {
    initDatabase();
    return JSON.parse(localStorage.getItem('souled_store_products'));
}

// Get a specific product by ID
function getProductById(id) {
    const products = getAllProducts();
    return products.find(p => p.id === parseInt(id));
}

// Get cart items
function getCart() {
    initDatabase();
    return JSON.parse(localStorage.getItem('souled_store_cart'));
}

// Set cart items
function saveCart(cart) {
    localStorage.setItem('souled_store_cart', JSON.stringify(cart));
    // Trigger cart update event for pages to update navbar badge
    window.dispatchEvent(new Event('cartUpdated'));
}

// Add item to cart
function addToCart(productId, size, quantity = 1) {
    const cart = getCart();
    const product = getProductById(productId);
    
    if (!product) return false;
    
    const existingIndex = cart.findIndex(item => item.productId === parseInt(productId) && item.size === size);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += parseInt(quantity);
    } else {
        cart.push({
            productId: parseInt(productId),
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: parseInt(quantity)
        });
    }
    
    saveCart(cart);
    return true;
}

// Update cart item quantity
function updateCartQuantity(productId, size, quantity) {
    let cart = getCart();
    const index = cart.findIndex(item => item.productId === parseInt(productId) && item.size === size);
    
    if (index > -1) {
        if (quantity <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = parseInt(quantity);
        }
        saveCart(cart);
        return true;
    }
    return false;
}

// Remove item from cart
function removeFromCart(productId, size) {
    let cart = getCart();
    cart = cart.filter(item => !(item.productId === parseInt(productId) && item.size === size));
    saveCart(cart);
}

// Clear cart
function clearCart() {
    saveCart([]);
}

// Get cart total quantity count
function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Get cart subtotal
function getCartSubtotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Save contact submissions
function saveContactMessage(name, email, subject, message) {
    initDatabase();
    const contacts = JSON.parse(localStorage.getItem('souled_store_contacts'));
    contacts.push({
        id: Date.now(),
        name,
        email,
        subject,
        message,
        date: new Date().toISOString()
    });
    localStorage.setItem('souled_store_contacts', JSON.stringify(contacts));
}

// Initialize database when file runs
initDatabase();
