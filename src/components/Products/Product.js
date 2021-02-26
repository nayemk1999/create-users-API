import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='single-product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>by: {seller}</p>
                <p>$ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handlerAdd(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;