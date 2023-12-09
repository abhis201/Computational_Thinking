import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/datatypes" activeClassName="active">Data Types</NavLink>
            <NavLink to="/conditionals" activeClassName="active">Conditionals</NavLink>
            <NavLink to="/loops" activeClassName="active">Loops</NavLink>
            <NavLink to="/operators" activeClassName="active">Operators</NavLink>
        </nav>
    );
};