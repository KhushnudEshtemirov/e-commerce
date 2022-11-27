import React from "react";

import Navbar from "../navbar/navbar";

import image from "../../images/brends/logo.png";

import "./header.scss";

const Header = () => (
  <div className="header">
    <div className="row">
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 logo">
        <img src={image} alt="logo" width={150} />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 question">
        Do you have a question?
        <a href="tel:+998 97 577 77 28" className="phone">
          +998 97 577 77 28
        </a>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mini-menu">
        <ul>
          <li>
            <a href="#">Payment</a>
          </li>
          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            <a href="#">Provider</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
    <Navbar />
  </div>
);

export default Header;
