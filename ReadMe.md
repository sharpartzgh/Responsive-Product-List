# Responsive-Product-List with Checkout Process
- This project implements a dynamic Shopping Cart application with various features such as product search, a detailed view modal, a cart system, and a checkout process. The app is built using HTML, CSS, and JavaScript, ensuring a seamless user experience.

## Features
### Product Listing
Products are dynamically rendered from a JSON array.
Includes product image, name, price, and buttons to:
-   Add to cart.
-   View more details.
    
### Search Functionality
- Allows users to search for products by name or first letter.
- Updates the product list to display matching items.

### Cart System
Dynamically adds and removes items.
Updates the cart count and total price in real-time.
Displays "No items added yet" when the cart is empty.
### Detailed View Modal
A "View More" button displays detailed product information in a modal.
Includes a close button to dismiss the modal.
Background blur is applied when the modal is active.

### Checkout Process
- A checkout modal appears when the checkout button is clicked.
- The modal includes a form for user details such as name, address, and payment method.
- Form validation ensures all required fields are filled before submission.
#### Upon successful form submission:
    * Cart items are cleared.
    * The cart count and total price reset.
    * A success message confirms the order.

## Installation

### Prerequisites
- A modern web browser that supports JavaScript.

### Steps
1.  Clone the repository:
- git clone https://github.com/sharpartzgh/Responsive-Product-List
2. Navigate to the project directory:
- cd Responsive-Product-List
- Open the index.html file in your browser:
- open index.html

### Usage
- Browse the product list.
- Add products to the cart using the "Add to Cart" button.
- View more product details by clicking the "View More" button.
- Use the search bar to find specific products.
- Click the cart icon to view cart items.
- Proceed to checkout when ready to complete the purchase.

## Scripts
### Main Functions
-   renderProducts(): Renders the product list dynamically from the JSON data.
-   addToCart(product): Adds a product to the cart and updates the cart UI.
-   removeFromCart(event): Removes a product from the cart.
-   handleViewMore(product): Displays detailed product information in a modal.
-   handleCheckout(event): Handles the checkout process with form validation.

## Technologies Used
- HTML: Structuring the web page.
- CSS: Styling the application (including modal and responsive design).
- JavaScript: Core functionality and dynamic updates.

## Author
[Frederick](https://www.github.com/sharpartzgh)
- Frontend Developer, Visual Artist and Graphic Designer
