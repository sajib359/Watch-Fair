import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const{id ,img, name}=props.cart;
    return (
        <div className='cart'>
            <div><img src={img} alt="" /></div>
            <div>
                <span className='cart-name'>{name}</span>
            </div>

               
               

        </div>
    );
};

export default Cart;