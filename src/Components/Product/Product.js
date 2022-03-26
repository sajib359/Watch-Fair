import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart  } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = (props) => {
    //    console.log(props.product);
       const {img, name, Band , price } = props.product;
    
    return (
        <div className='product-card'>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>Band: <span className='span-class'> {Band}</span></p>
            <p>Price: <span className='span-class'>{price}</span></p>
            <button onClick={()=>props.handleButton(props.Product)}>
                <p className='button-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;