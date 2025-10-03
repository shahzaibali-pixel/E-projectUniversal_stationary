// Product data
const products = [
    {
        id: 1,
        name: "Executive Stapler",
        brand: "staples",
        image: "./images/stapler.jpg",
        briefFeatures: ["Heavy-duty", "Staples up to 50 sheets", "Non-slip base"],
        detailedDoc: "documents/staples-stapler.docx",
        price: "Rs. 5,499",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Post-it Notes",
        brand: "3m",
        image: "./images/post-it notes 2.jpg",
        briefFeatures: ["Super sticky", "100 sheets", "Assorted colors"],
        detailedDoc: "documents/3m-postit.docx",
        price: "Rs. 1,999",
        badge: "Popular"
    },
    {
        id: 3,
        name: "Ballpoint Pen",
        brand: "bic",
        image: "./images/BIC Ball point.jpg",
        briefFeatures: ["Smooth writing", "1.0mm point", "Long-lasting"],
        detailedDoc: "documents/bic-pen.docx",
        price: "Rs. 449",
        badge: "New"
    },
    {
        id: 4,
        name: "Gel Pen Packs",
        brand: "papermate",
        image: "./images/Gel Pen.jpg",
        briefFeatures: ["Vibrant ink", "Smear-resistant", "Quick-drying"],
        detailedDoc: "documents/papermate-gel.docx",
        price: "Rs. 1,987",
        badge: "Sale"
    },
    {
        id: 5,
        name: "Permanent Marker",
        brand: "sharpie",
        image: "./images/SHARPIE marker.jpg",
        briefFeatures: ["Permanent", "Quick-drying", "Bold point"],
        detailedDoc: "documents/sharpie-marker.docx",
        price: "Rs. 699"
    },
    {
        id: 6,
        name: "Scotch Tape",
        brand: "3m",
        image: "./images/Scotch Tape.jpg",
        briefFeatures: ["Crystal clear", "Strong adhesive", "Easy to use"],
        detailedDoc: "documents/3m-tape.docx",
        price: "Rs. 1,299"
    },
    {
        id: 7,
        name: "Correction Tape",
        brand: "bic",
        image: "./images/Correction Tape BIC.jpg",
        briefFeatures: ["Instant corrections", "No drying time", "Clean"],
        detailedDoc: "documents/bic-correction.docx",
        price: "Rs. 999"
    },
    {
        id: 8,
        name: "Highlighter",
        brand: "sharpie",
        image: "./images/Highlighter.jpg",
        briefFeatures: ["Bright colors", "Chisel tip", "Quick-drying"],
        detailedDoc: "documents/sharpie-highlighter.docx",
        price: "Rs. 899"
    },
    {
        id: 9,
        name: "Notebook",
        brand: "muji",
        image: "./images/Notebook.jpg",
        briefFeatures: ["Minimalist", "Smooth paper", "A5 size"],
        detailedDoc: "documents/muji-notebook.docx",
        price: "Rs. 1,799",
        badge: "New"
    },
    {
        id: 10,
        name: "Journal",
        brand: "leuchtturm1917",
        image: "./images/Journal.jpg",
        briefFeatures: ["Premium", "Numbered pages", "Table of contents"],
        detailedDoc: "documents/leuchtturm-journal.docx",
        price: "Rs. 4,499",
        badge: "Premium"
    },
    {
        id: 11,
        name: "Mechanical Pencil",
        brand: "staples",
        image: "./images/mechanical pencil.jpg",
        briefFeatures: ["0.7mm lead", "Comfort grip", "Refillable"],
        detailedDoc: "documents/staples-pencil.docx",
        price: "Rs. 1,299"
    },
    {
        id: 12,
        name: "Binder Clips",
        brand: "3m",
        image: "./images/Binder Clips 3M.jpg",
        briefFeatures: ["Assorted sizes", "Strong grip", "Pack of 24"],
        detailedDoc: "documents/3m-clips.docx",
        price: "Rs. 1,499"
    },
    {
        id: 13,
        name: "Fountain Pen",
        brand: "parker",
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["Classic design", "Stainless steel", "Gift box"],
        detailedDoc: "documents/parker-pen.docx",
        price: "Rs. 10,999",
        badge: "Premium"
    },
    {
        id: 14,
        name: "Sticky Notes",
        brand: "3m",
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["Variety of sizes", "Bright colors", "Strong adhesive"],
        detailedDoc: "documents/3m-sticky.docx",
        price: "Rs. 2,899"
    },
    {
        id: 15,
        name: "Desk Organizer",
        brand: "muji",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["Minimalist", "Multiple compartments", "Solid wood"],
        detailedDoc: "documents/muji-organizer.docx",
        price: "Rs. 7,499",
        badge: "New"
    },
    {
        id: 16,
        name: "Eraser",
        brand: "pentel",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["Dust-free", "No smudging", "Long-lasting"],
        detailedDoc: "documents/pentel-eraser.docx",
        price: "Rs. 549"
    },
    {
        id: 17,
        name: "Ruler",
        brand: "staples",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["12-inch", "Clear markings", "Durable"],
        detailedDoc: "documents/staples-ruler.docx",
        price: "Rs. 449"
    },
    {
        id: 18,
        name: "Glue Stick",
        brand: "3m",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["Strong adhesive", "Dries clear", "Non-toxic"],
        detailedDoc: "documents/3m-glue.docx",
        price: "Rs. 899"
    },
    {
        id: 19,
        name: "Sketchbook",
        brand: "canson",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["100 sheets", "Heavyweight", "Spiral bound"],
        detailedDoc: "documents/canson-sketchbook.docx",
        price: "Rs. 3,299"
    },
    {
        id: 20,
        name: "Colored Pencils",
        brand: "prismacolor",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["24 colors", "Soft core", "Professional"],
        detailedDoc: "documents/prismacolor-pencils.docx",
        price: "Rs. 5,499",
        badge: "Premium"
    },
    {
        id: 21,
        name: "Whiteboard Markers",
        brand: "expo",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["4 colors", "Low odor", "Erases easily"],
        detailedDoc: "documents/expo-markers.docx",
        price: "Rs. 1,799"
    },
    {
        id: 22,
        name: "Scissors",
        brand: "fiskars",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["8-inch blades", "Comfort grip", "Stainless steel"],
        detailedDoc: "documents/fiskars-scissors.docx",
        price: "Rs. 2,199"
    },
    {
        id: 23,
        name: "Index Cards",
        brand: "oxford",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["3x5 inches", "Ruled", "100 cards"],
        detailedDoc: "documents/oxford-cards.docx",
        price: "Rs. 1,099"
    },
    {
        id: 24,
        name: "Paper Clips",
        brand: "staples",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["1000 clips", "Silver finish", "Reusable"],
        detailedDoc: "documents/staples-clips.docx",
        price: "Rs. 1,299"
    },
    {
        id: 25,
        name: "Calculator",
        brand: "casio",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["12-digit", "Solar powered", "Compact"],
        detailedDoc: "documents/casio-calculator.docx",
        price: "Rs. 2,899"
    },
    {
        id: 26,
        name: "Envelopes",
        brand: "staples",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["#10 size", "Security tint", "100 pack"],
        detailedDoc: "documents/staples-envelopes.docx",
        price: "Rs. 1,999"
    },
    {
        id: 27,
        name: "Business Cards",
        brand: "avery",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["Matte finish", "250 cards", "Inkjet compatible"],
        detailedDoc: "documents/avery-cards.docx",
        price: "Rs. 2,699"
    },
    {
        id: 28,
        name: "File Folders",
        brand: "smead",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["Letter size", "Assorted colors", "100 folders"],
        detailedDoc: "documents/smead-folders.docx",
        price: "Rs. 3,299"
    },
    {
        id: 29,
        name: "Hole Punch",
        brand: "staples",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["3-hole punch", "Adjustable guide", "Metal"],
        detailedDoc: "documents/staples-punch.docx",
        price: "Rs. 2,199"
    },
    {
        id: 30,
        name: "Rubber Bands",
        brand: "alliance",
        // Replace this image path with your local image path
        image: "https://images.unsplash.com/photo-1589999838925-3d912d7b7105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        briefFeatures: ["Size #64", "Assorted colors", "500 bands"],
        detailedDoc: "documents/alliance-bands.docx",
        price: "Rs. 1,499"
    }
];

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and initialize accordingly
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop();
    
    switch(pageName) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'shop.html':
            initializeShopPage();
            break;
        case 'collection.html':
            initializeCollectionPage();
            break;
        case 'login.html':
            initializeLoginPage();
            break;
        case 'contact.html':
            initializeContactPage();
            break;
    }
    
    // Initialize common elements
    initializeCommonElements();
});

// Initialize home page
function initializeHomePage() {
    // Home page products are now static, so no initialization needed
}

// Initialize shop page
function initializeShopPage() {
    const productContainer = document.getElementById('product-container');
    
    if (productContainer) {
        displayProducts('all', productContainer, 12);
    }
}

// Initialize collection page
function initializeCollectionPage() {
    // Collection page products are now static, so no initialization needed
}

// Initialize login page
function initializeLoginPage() {
    const loginForm = document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (email && password) {
                // Show success message
                showNotification('Login Successful', 'Welcome back! Redirecting...', 'success');
                
                // Redirect after 2 seconds
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            }
        });
    }
}

// Initialize contact page
function initializeContactPage() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            showNotification('Message Sent', 'Thank you for contacting us!', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

// Initialize common elements across all pages
function initializeCommonElements() {
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || 
            e.target.classList.contains('btn-cart') || 
            e.target.classList.contains('btn-featured') || 
            e.target.classList.contains('btn-collection')) {
            
            e.preventDefault();
            
            let productName = 'Product';
            if (e.target.getAttribute('data-id')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                if (product) {
                    productName = product.name;
                }
            }
            
            // Show notification
            showNotification('Added to Cart', `${productName} added to cart.`, 'info');
        }
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showNotification('Subscription Successful', 'Thank you for subscribing!', 'success');
                this.reset();
            }
        });
    }
}

// Display products based on brand filter
function displayProducts(brand, container, limit = null) {
    container.innerHTML = '';
    
    let filteredProducts = brand === 'all' 
        ? products 
        : products.filter(product => product.brand === brand);
    
    if (limit) {
        filteredProducts = filteredProducts.slice(0, limit);
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3 mb-4';
    
    col.innerHTML = `
        <div class="product-card">
            <div class="product-img-container">
                <!-- Image is set from the product object. To replace, update the image path in the products array. -->
                <img src="${product.image}" class="product-img" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-actions-overlay">
                    <a href="${product.detailedDoc}" title="View Details"><i class="fas fa-eye"></i></a>
                    <a href="#" title="Add to Wishlist"><i class="far fa-heart"></i></a>
                    <a href="#" title="Quick View"><i class="fas fa-expand"></i></a>
                </div>
            </div>
            <div class="product-body">
                <h5 class="product-title">${product.name}</h5>
                <p class="product-brand">${product.brand.toUpperCase()}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-features">
                    <ul>
                        ${product.briefFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-cart add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
    
    return col;
}

// Show notification
function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'position-fixed bottom-0 end-0 p-3';
    notification.style.zIndex = '1050';
    
    let bgClass = 'bg-info';
    if (type === 'success') bgClass = 'bg-success';
    else if (type === 'error') bgClass = 'bg-danger';
    else if (type === 'warning') bgClass = 'bg-warning';
    
    notification.innerHTML = `
        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header ${bgClass} text-white">
                <strong class="me-auto">${title}</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}