import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 100) {
        shipping = 0
    }
    else if (total > 40) {
        shipping = 4.499;
    }
    else if (total > 0) {
        shipping = 12.99
    }

    let tax = Math.round(total * .05);
    let grandTotal = Math.round(total) + Math.round(shipping) + tax;
    return (
        <div className ='cart-part'>
            <div className ='order-summary'>
                <h2>Order Summary</h2>
                <p>Items Ordered : {cart.length}</p>
            </div>
            <p>Shipping & Handling: ${Math.round(shipping)}</p>
            <p>Total Tax : ${tax}.00</p>
            <p className='total'>Order Total Price : ${grandTotal}</p>

        </div>
    );
};

export default Cart;