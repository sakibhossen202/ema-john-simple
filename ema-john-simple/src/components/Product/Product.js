import React from 'react';
import './Product.css'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'
const Product = (props) => {
    console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h3 className='product-name'>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>${price} </p>
                <p><small>Only {stock} left in stock order soon</small></p>
                <button className='cart-btn'>Add to cart</button>
                
            </div>


        </div>
    );
};

export default Product;