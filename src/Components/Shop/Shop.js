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
        const newProduct =product;
        let productCart = [];
        if(cart.includes(newProduct)){
            setCart(cart)
        }
        else{
            productCart=[...cart , newProduct];

            if(productCart.length===5){
               alert('Same product Not Allowed');

            }
            else{
                setCart(productCart);
            }
        }
       
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
               <div>
               <h2 className='cart-head'>Your order Details</h2>

                    {
                        cart.map(selectCart=><Cart cart={selectCart}></Cart>)
                    }
               </div>
               <div>
               <button className='choose-btn'> Choose One</button>
               </div>
               <div>
               <button className='choose-btn'>Again Choose</button>
               </div>
           
           
             
           </div>
           
        </div>
    );
};

export default Shop;