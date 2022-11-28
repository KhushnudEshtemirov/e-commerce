import React from "react";

import "./service.scss";

import icon1 from "../../images/icons/5.png";
import icon2 from "../../images/icons/1.png";
import icon3 from "../../images/icons/2.png";
import icon4 from "../../images/icons/3.png";
import icon5 from "../../images/icons/4.png";

const Service = () => (
  <div className="services">
    <div className="service border">
      <img src={icon1} alt="icon1" />
      <span>Fast shipping in Moscow and in any region of Russia</span>
    </div>
    <div className="service border">
      <img src={icon2} alt="icon2" />
      <span>All products have an official manufacturer's warranty</span>
    </div>
    <div className="service border">
      <img src={icon3} alt="icon3" />
      <span>Over 100,000 products</span>
    </div>
    <div className="service border">
      <img src={icon4} alt="icon4" />
      <span>Any payment method</span>
    </div>
    <div className="service border">
      <img src={icon5} alt="icon5" />
      <span>High customer ratings</span>
    </div>
  </div>
);

export default Service;
