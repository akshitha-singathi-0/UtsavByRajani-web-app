import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>            
            <div>
                <Link to="/gallery">Gallery</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;