import React from 'react';
import './Header.css';
import  logo  from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

import useAuth from '../Hooks/useAuth';

const Header = () => {

    const {logOut,user}=useAuth()
    const activeNav={
        color:'aqua',
    }
    return (
        <div>
            <img className='header-img' src={logo} alt="" />
            <div className='menu-main'>
                <ul className='menu'>
                    <li className='menu-item'><NavLink to="/shop" activeStyle={activeNav}>Shop</NavLink></li>
                    <li className='menu-item'><NavLink to="/review" activeStyle={activeNav}>Order Review</NavLink></li>
                    <li className='menu-item'><NavLink to="/inventory" activeStyle={activeNav}>Manage Inventory hare</NavLink></li>
                    {user.email?(
                        <li className='menu-item' onClick={logOut}><span>LogOut</span></li>
                    ):(
                        <li className='menu-item'><NavLink to="/logIn" activeStyle={activeNav}>LogIn</NavLink></li>
                    )}
                </ul>
            </div>
        </div>   
    );
};

export default Header;