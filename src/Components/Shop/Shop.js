import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('watchDB.json')
        .then(res=>res.json())
        .then(data=> setProducts(data));
    },[])

    const handleButton =(product)=>{
        console.log(product);
       const newCart =[...cart ,product];
        setCart(newCart);
    }
    return ( 
        <div className="shop-container">
           
           <div className="product-container">
              
               {
                   products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleButton={handleButton}
                    ></Product>)
               }
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;