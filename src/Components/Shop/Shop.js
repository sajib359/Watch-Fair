import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('watchDB.json')
        .then(res=>res.json())
        .then(data=> setProducts(data));
    },[])
    return (
        <div className="shop-container">
           <div className="product-container">
               <h3>Choose Your product from here</h3>
               {
                   products.map(product => <Product key={products.id}></Product>)
               }
           </div>
           <div className="cart-container">
               <h2>Your order Details</h2>
           </div>
        </div>
    );
};

export default Shop;