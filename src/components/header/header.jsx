import React, { useState } from "react";

import Navbar from "../navbar/navbar";

import image from "../../images/brends/logo1.png";

import { BsList } from "react-icons/bs";

import "./header.scss";

const Header = () => {
  const [showValue, setShowValue] = useState(false);

  const showUl = () => {
    setShowValue(!showValue);
  };

  return (
    <div className="header">
      <div className="mb-2 mobile-version">
        <div className="logo">
          <a href="#">
            <img src={image} alt="logo" />
          </a>
        </div>
        <div className="question">
          Do you have a question?
          <a href="tel:+998 97 577 77 28" className="phone">
            +998 97 577 77 28
          </a>
        </div>
        <div className="mini-menu">
          <ul className={showValue ? "show" : null}>
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
        <div className="three-line" onClick={showUl}>
          <BsList />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
