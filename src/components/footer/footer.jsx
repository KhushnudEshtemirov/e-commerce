import React from "react";

import "./footer.scss";

import {
  BsFillTelephoneOutboundFill,
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
} from "react-icons/bs";

let newDate = new Date();
let year = newDate.getFullYear();

const Footer = () => (
  <div className="row footer">
    <div className="col-3 first-menu">
      <ul>
        <li>
          <a href="#">Tile</a>
        </li>
        <li>
          <a href="#">Plumbing</a>
        </li>
        <li>
          <a href="#">Bathroom furniture</a>
        </li>
        <li>
          <a href="#">Electronics and home appliances</a>
        </li>
        <li>
          <a href="#">Heating</a>
        </li>
        <li>
          <a href="#">Flooring</a>
        </li>
      </ul>
    </div>
    <div className="col-3 second-menu">
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
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
      <h4>Work days</h4>
      <p>Mon-Fri: 09:00 - 20:00</p>
      <p>Saturday: 10:00 - 18:00</p>
      <p>Sunday: Closed</p>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
      <h4>Contacts</h4>
      <p>
        <BsFillTelephoneOutboundFill />
        <a href="tel:+998 97 577 77 28">+998 97 577 77 28</a>
      </p>
      <p>
        <BsFillEnvelopeFill />
        <a href="mailto: xushnud122997@gmail.com">xushnud122997@gmail.com</a>
      </p>
      <p>
        <BsFillGeoAltFill />
        <span>Yunusobod region, Tashkent city</span>
      </p>
    </div>
    <div className="author">
      <p>Tashkent {year} &copy; Copyright</p>
      <p>
        Made by
        <a href="https://t.me/khushnud_eshtemirov"> Khushnud Eshtemirov</a>
      </p>
    </div>
  </div>
);

export default Footer;
