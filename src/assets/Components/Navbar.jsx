import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/about">About<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/gallery">Gallery<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/contact">Contact<span class="sr-only">(current)</span></Link>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
    );
}

export default Navbar;