import React from 'react';
import './Product.css';

const Product = (props) => {

       console.log(props.product);
       const {img, name, Band , price } = props.product;
    
    return (
        <div className='product-card'>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>Band: <span className='span-class'> {Band}</span></p>
            <p>Price: <span className='span-class'>{price}</span></p>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;