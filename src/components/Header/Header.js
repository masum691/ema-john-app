import logo from '../../images/logo.png'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Ema john" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a><br />
            </nav>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    );
};


export default Header;