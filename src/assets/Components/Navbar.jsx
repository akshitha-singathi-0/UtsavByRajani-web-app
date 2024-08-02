import React from "react";
import {Link} from 'react-router-dom';
import {c1} from '../styles/color-scheme';

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:c1}}>
      <Link class="navbar-brand" style={{paddingLeft: "2%"}} to="/">Utsav by Rajani</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Navbar;