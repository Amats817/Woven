// Product image and quantity functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set product image based on URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1';
    const productImage = document.querySelector('.product-main-image');
    
    if (productImage) {
        productImage.src = `../../assets/product-sample/${productId}.avif`;
    }

    const minusBtns = document.querySelectorAll('.quantity-btn.minus');
    const plusBtns = document.querySelectorAll('.quantity-btn.plus');
    const quantityDisplays = document.querySelectorAll('.quantity');

    minusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const quantityDisplay = this.nextElementSibling;
            let quantity = parseInt(quantityDisplay.textContent);
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });
    });

  
    plusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const quantityDisplay = this.previousElementSibling;
            let quantity = parseInt(quantityDisplay.textContent);
            quantity++;
            quantityDisplay.textContent = quantity;
        });
    });
  
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const quantity = parseInt(this.parentElement.querySelector('.quantity').textContent);
            
            alert(`Added ${quantity} item(s) to cart`);
        });
    });
});
