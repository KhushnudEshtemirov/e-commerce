import React from "react";

import "./brend.scss";

import img1 from "../../images/brends/1.png";
import img2 from "../../images/brends/2.png";
import img3 from "../../images/brends/3.png";
import img4 from "../../images/brends/4.png";
import img5 from "../../images/brends/5.png";
import img6 from "../../images/brends/6.png";
import img7 from "../../images/brends/7.png";
import img8 from "../../images/brends/8.png";
import img9 from "../../images/brends/9.png";
import img10 from "../../images/brends/10.png";
import img11 from "../../images/brends/11.png";
import img12 from "../../images/brends/12.png";

const Brends = () => (
  <div className="brends-container">
    <h2 className="section-title">Popular Brends</h2>
    <div className="brend-items">
      <div className="brend-item">
        <img src={img1} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img2} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img3} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img4} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img5} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img6} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img7} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img8} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img9} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img10} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img11} alt="brend-image" />
      </div>
      <div className="brend-item">
        <img src={img12} alt="brend-image" />
      </div>
    </div>
  </div>
);

export default Brends;
