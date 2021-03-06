import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [product,setproduct] = useState(first10)
    return (
        
        <div className='shop-container'>
            <div className="product-container">
            {
                    product.map(product =><Product product={product}></Product>)
            }
            </div>
            <div className="cart-container">
                <h1>This is cart container</h1>
            </div>
            
            
        </div>
    );
};

export default Shop;