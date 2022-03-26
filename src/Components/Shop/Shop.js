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
              
               {
                   products.map(product => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
               }
           </div>
           <div className="cart-container">
               <h2>Your order Details</h2>
           </div>
        </div>
    );
};

export default Shop;