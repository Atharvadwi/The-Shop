// You can add JavaScript functionality here, like handling the "Add to Cart" button clicks.
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart');
    
    });
});
