import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#dd0075"}}>
  <a class="navbar-brand" href="#">Utsav by Rajani</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class="nav-link" to="/">Home</Link>
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
    <span class="navbar-text">
      Header
    </span>
  </div>
</nav>
    );
}

export default Navbar;