import React from 'react';
import './Header.css';
import  logo  from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <img className='header-img' src={logo} alt="" />
            <div className='menu-main'>
                <ul className='menu'>
                    <li className='menu-item'><a href="/shop">Shop</a></li>
                    <li className='menu-item'><a href="/order-review">Order Review</a></li>
                    <li className='menu-item'><a href="/manage-inventory">Manage Inventory hare</a></li>
                </ul>
            </div>
        </div>   
    );
};

export default Header;