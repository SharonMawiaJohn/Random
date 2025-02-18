import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">The best way to you..</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/other">Other</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;