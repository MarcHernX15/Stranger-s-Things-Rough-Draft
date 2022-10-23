import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="theNavBar">
            <Link className="links" to="/">Home </Link>
            <Link className="links" to="Login">Login</Link>
            <Link className="links" to="Posts"> Posts </Link>
            <Link className="links" to="Profile">Profile</Link>
        </nav>
    )
};

export default Navbar;
