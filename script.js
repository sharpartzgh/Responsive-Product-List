// accessing elements
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');

// toggle the visibility of the cart modal
cartIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating to the document
    cartDropdown.classList.toggle('hidden');
});

//  close the cart when user click outside the cart
document.addEventListener('click', (event) => {
    if (!cartDropdown.contains(event.target) && event.target !== cartIcon) {
        cartDropdown.classList.add('hidden');
    }
});



const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price'); 

// an array to hold cart items
let cart = [];

// Function to calculate the total price of the cart
function calculateTotalPrice() {
    return cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '')), 0);
}

// Function to update the total price
function updateTotalPrice() {
    const total = calculateTotalPrice();
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

//  add a product to the cart function
function addToCart(product) {
    cart.push(product); // now we push the product to the cart array

    // Update cart count
    cartCount.textContent = cart.length;

    // Update total price
    updateTotalPrice();

    // Update cart items list
    renderCartItems();
}

// Function to render cart items
function renderCartItems() {
    cartItems.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        // If cart is empty, display a message
        cartItems.innerHTML = `<li>No items added yet</li>`;
    } else {
        // Otherwise, lets render the cart items
        cart.forEach((product, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');

            //  product details
            listItem.innerHTML = `
                <span><img class="shopping-cart-icon" src="${product.image}" alt="${product.name}" /></span>
                <span>${product.name}</span>
                <span>${product.price}</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            cartItems.appendChild(listItem);
        });

        // is an item being removed? then lets listen for event
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach((button) => {
            button.addEventListener('click', removeFromCart);
        });
    }

    // at the end of it all update total price after rendering cart items
    updateTotalPrice();
}

// Function to remove an item from the cart
function removeFromCart(event) {
    event.stopPropagation(); // this prevents cart closing when item is removed

    const index = event.target.dataset.index; // access the index of the item
    const removedProduct = cart[index]; // then just store the removed product
    cart.splice(index, 1); // finally remove the item from the cart array

    // make we update the cart count and re-render cart items
    cartCount.textContent = cart.length;

    // Update total price (deduct the removed product price)
    updateTotalPrice();

    // re-redering of the cart items
    renderCartItems();
}


// creating simple json data since i have the images in my produc-images folder
const products = [
    { id: 1, name: 'Product 1', price: '$10', image: './product-images/product-1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra, size 40 x 20 inches' },
    { id: 2, name: 'Product 2', price: '$15', image: './product-images/product-2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra' },
    { id: 3, name: 'Product 3', price: '$20', image: './product-images/product-3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra' },
    { id: 4, name: 'Product 4', price: '$25', image: './product-images/product-4.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra' },
    { id: 5, name: 'Product 5', price: '$10', image: './product-images/product-1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra' },
    { id: 6, name: 'Product 6', price: '$15', image: './product-images/product-2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra' },
    { id: 7, name: 'Product 7', price: '$20', image: './product-images/product-3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra hshej' },
    { id: 8, name: 'Product 8', price: '$25', image: './product-images/product-4.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra' },
    { id: 9, name: 'Product 9', price: '$10', image: './product-images/product-1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra' },
    { id: 10, name: 'Product 10', price: '$15', image: './product-images/product-2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra' },
];

// accessing the view-more aside element
const viewMoreSection = document.getElementById('view-more');

// Function to handle "View More" button click
function handleViewMore(product) {

    const pageContent = document.getElementById('page-content');
    // display the content of the view-more section with product details
    viewMoreSection.innerHTML = `
        <div class="view-more-content">
            <button id="close-view-more">X</button>
            <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <p>${product.description}</p>
        </div>
    `;

    // Show the view-more section
    viewMoreSection.classList.remove('hidden');

    // now when the btn is triggered page div blur the background
    pageContent.classList.add('blurred');

    // Add event listener to close button
    const closeButton = document.getElementById('close-view-more');
    closeButton.addEventListener('click', () => {
        viewMoreSection.classList.add('hidden');

     //this removes the blur from the background
    pageContent.classList.remove('blurred');

    });
    
}


// accessing the search bar
const searchBar = document.getElementById('search-bar');

// Filter products based on search input
function filterProducts(query) {
    const searchQuery = query.toLowerCase();
    return products.filter((product) =>
        product.name.toLowerCase().startsWith(searchQuery)
    );
}

// event listener for search bar 
searchBar.addEventListener('input', (event) => {
    const query = event.target.value;
    const filteredProducts = filterProducts(query);
    renderProducts(filteredProducts);
});


// Render products ( whiles accepting a filtered list)
function renderProducts(filteredProducts = products) {
    productList.innerHTML = ''; // Clear existing products

    filteredProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Product details
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <div>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                <button class="viewMore-btn" data-id="${product.id}">View More</button> 
            </div>
        `;
        productList.appendChild(productCard);
    });

    // event listeners for "Add to Cart" and "View More"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const viewMoreButtons = document.querySelectorAll('.viewMore-btn');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.id;
            const product = products.find((p) => p.id == productId);
            addToCart(product);
        });
    });

    viewMoreButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.id;
            const product = products.find((p) => p.id == productId);
            handleViewMore(product);
        });
    });
}

renderProducts();


// access the checkout modal elements
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutButton = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');

// Show checkout modal
function openCheckoutModal() {
    checkoutModal.classList.remove('hidden');
}

// Close checkout modal
closeCheckoutButton.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
});

// Checkout form validation
checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const addressError = document.getElementById('address-error');

    let isValid = true;

    // name validation section
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // email validation section
    if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email address.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Address validation section
    if (addressInput.value.trim() === '') {
        addressError.textContent = 'Address is required.';
        addressError.style.display = 'block';
        isValid = false;
    } else {
        addressError.style.display = 'none';
    }

    // If valid, proceed with checkout
    if (isValid) {
        alert('Checkout complete! Thank you for your purchase.');
        // Now we need to clear the items in the cart since order has been placed
        cart = [];
        // after that we update the cart count and re-render the cart items
        cartCount.textContent = cart.length
        renderCartItems();
        // when all is done hide the modal
        checkoutModal.classList.add('hidden');
        checkoutForm.reset(); // Reset the form
    }
});

// when the checkout-btn is click kindly open the modal for form validation
const checkoutButton = document.getElementById('checkout-btn')
checkoutButton.addEventListener('click', openCheckoutModal);