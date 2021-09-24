import logo from '../../images/logo.png'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <img src={logo} alt="Ema john" />
        </div>
    );
};

export default Header;