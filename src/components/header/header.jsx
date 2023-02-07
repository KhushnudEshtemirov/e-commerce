import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img src={image} alt="logo" />
          </Link>
        </div>
        <div className="question">
          Do you have a question?
          <a
            href="tel:+998 97 577 77 28"
            className="phone"
            style={{ marginLeft: "6px" }}
          >
            +998 97 577 77 28
          </a>
        </div>
        <div className="mini-menu">
          <ul className={showValue ? "show" : null}>
            <li>
              <Link to="">Payment</Link>
            </li>
            <li>
              <Link to="">Delivery</Link>
            </li>
            <li>
              <Link to="">Provider</Link>
            </li>
            <li>
              <Link to="">Contacts</Link>
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
