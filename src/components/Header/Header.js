import React from 'react';
import logo from '../../Images/logo.png';
import  '../Header/Header.css';



const Header = () => {
    return (
        <div className='header'>
             <img src={logo} alt="" />   
            
        </div>
    );
};

export default Header;