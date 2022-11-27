import React from "react";

import "./collection.scss";

import img1 from "../../images/images/15.png";
import img2 from "../../images/images/16.png";
import img3 from "../../images/images/17.png";
import img4 from "../../images/images/19.png";
import img5 from "../../images/images/18.png";

const Collection = () => (
  <div className="row collection">
    <div className="col-12">
      <h2 className="section-title">Tile collections</h2>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="img-container">
        <img src={img1} alt="img1" />
        <div className="title">
          <p>Radiance</p>
          <span>Kerama Marazzi</span>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="img-container">
            <img src={img2} alt="img2" />
            <div className="title">
              <p>Westwind</p>
              <span>Kerama Marazzi</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="img-container">
            <img src={img3} alt="img3" />
            <div className="title">
              <p>Rotterdam</p>
              <span>Kerama Marazzi</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="img-container">
            <img src={img4} alt="img4" />
            <div className="title">
              <p>Rane</p>
              <span>Kerama Marazzi</span>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="img-container">
            <img src={img5} alt="img5" />
            <div className="title">
              <p>Ginardo</p>
              <span>Kerama Marazzi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Collection;
