import React from "react";

import "./navbar.scss";

import { BsList } from "react-icons/bs";
import { TfiSearch, TfiHeart, TfiUser, TfiShoppingCart } from "react-icons/tfi";

const Navbar = () => (
  <div className="row navbar">
    <div className="col-3 category">
      <a href="#">
        <BsList />
        <span>Categories</span>
      </a>
    </div>
    <div className="col-1 actions">
      <a href="#">Actions</a>
    </div>
    <div className="col-1 brends">
      <a href="#">Brends</a>
    </div>
    <div className="col-xl-5 col-lg-4 col-md-3 col-sm-2 search-field">
      <span>Search...</span>
      <TfiSearch />
    </div>
    <div className="col-lg-2 icons">
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
