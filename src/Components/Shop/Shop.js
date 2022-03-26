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
    const chooseOne=(selectOne)=>{
        const randomKey = Math.floor(Math.random()*(4-0+0)+0);
        const chooseValue= selectOne[randomKey].name;
        document.getElementById('selectProduct').innerHTML=`
        <div class = "selected-name">
        <h2>Your Selected product Is:</h2>
            <h3>${chooseValue}</h3>
        </div>
        `
    }
    const againChoose=()=>{
        setCart([]);
        document.getElementById('selectProduct').innerHTML=' ';
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
               <h2 className='cart-head'>Choose Your Product From Cart</h2>

                    {
                        cart.map(selectCart=><Cart cart={selectCart}></Cart>)
                    }
               </div>
               <div>
               <button onClick={()=>chooseOne(cart)} className='choose-btn'> Choose One</button>
               </div>
               <div>
               <button onClick={againChoose} className='choose-btn'>Again Choose</button>
               </div>
           
               <div id='selectProduct'>
                    
               </div>
             
           </div>
           
           
        </div>
    );
};

export default Shop;