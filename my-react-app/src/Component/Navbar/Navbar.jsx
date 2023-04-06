import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src='../../../ema-john-resources/images/Logo.svg'/>
            </div>
            <div className="nav2">
                <a href='#'>Order</a>
                <a href='#'>Order Review</a>
                <a href='#'>Manage Eventory</a>
                <a href='#'>Login</a>
            </div>
        </nav>
    );
};

export default Navbar;