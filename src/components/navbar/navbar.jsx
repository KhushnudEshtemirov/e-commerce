import React from "react";

import "./navbar.scss";

import { BsList } from "react-icons/bs";
import { TfiSearch, TfiHeart, TfiUser, TfiShoppingCart } from "react-icons/tfi";

const Navbar = () => (
  <div className="row navbar">
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 category">
      <a href="#">
        <BsList />
        <span>Categories</span>
      </a>
    </div>
    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 actions">
      <a href="#">Actions</a>
    </div>
    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 brends">
      <a href="#">Brends</a>
    </div>
    <div className="col-xl-5 col-lg-5 col-md-3 col-sm-6 col-6 search-field">
      <input type="text" placeholder="Search..." />
      <TfiSearch />
    </div>
    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 icons">
      <a href="#">
        <TfiUser />
      </a>
      <a href="#">
        <TfiHeart />
      </a>
      <a href="#">
        <TfiShoppingCart />
      </a>
    </div>
  </div>
);

export default Navbar;
