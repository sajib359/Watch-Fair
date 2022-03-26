import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Watch <span className='span-color'>Fair</span></h1>
            <p className='head-paragraph'>Choose Your Best Option </p>
            <h2 className='selected'>Select Your most likely Product from Here</h2>
        </div>
        
    );
};

export default Header;