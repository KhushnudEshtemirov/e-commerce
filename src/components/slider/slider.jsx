import React from "react";

import "./slider.scss";

const Slider = () => (
  <div className="row slider">
    <div className="col-xl-8 col-lg-8 col-md-6 col-12 slider-area">
      <h2>Hello Big</h2>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-12 slider-right">
      <div className="col-12">
        <h4>Hello Small 1</h4>
      </div>
      <div className="col-12">
        <h4>Hello Small 2</h4>
      </div>
    </div>
  </div>
);

export default Slider;
