import React from 'react';
import logo from '../../images/shopping-cart-01.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className='image'>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className='product-name'>{name}</h4>
                <div>
                    <p><small>by: {seller}</small></p>
                    <p><strong>${price}</strong></p>
                    <p><small>Only {stock} left in stock - Order soon</small></p>
                    <button className='cart-button' onClick={() => props.handleAddProduct(props.product)}> <img src={logo} alt="" />add to cart</button>
                </div>
                
            </div>

        </div>
    );
};

export default Product;