import logo from '../../images/logo.png'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <img src={logo} alt="Ema john" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a><br />
            </nav>
        </div>
    );
};

export default Header;