import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handlerAdd = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product => <Product
                    handlerAdd={handlerAdd}
                    product={product}
                ></Product>)}
            </div>
            <div className="cart-container">
                    <Cart cart = {cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;