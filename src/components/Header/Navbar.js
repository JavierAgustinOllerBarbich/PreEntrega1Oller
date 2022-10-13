import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Always Shoes</h1>
            </Link>
            <ul>
                <NavLink to="/category/nike">Nike</NavLink>
                <NavLink to="/category/adidas">Adidas</NavLink>
                <NavLink to="/category/vans">Vans</NavLink>
                <NavLink to="/category/new balance">New Balance</NavLink>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;