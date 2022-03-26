import React from 'react';
import './Product.css';

const Product = (props) => {

       console.log(props.product);
       const {img, name, Band , price } = props.product;
    
    return (
        <div className='product-card'>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>Band: {Band}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Product;