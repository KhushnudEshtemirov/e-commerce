import React from "react";

import "./collection.scss";

import img1 from "../../images/images/15.png";
import img2 from "../../images/images/16.png";
import img3 from "../../images/images/17.png";
import img4 from "../../images/images/19.png";
import img5 from "../../images/images/18.png";

const Collection = () => (
  <div className="collections-container">
    <h2 className="section-title">Tile collections</h2>
    <div className="collections">
      <div className="collection-left">
        <div className="img-container large">
          <img src={img1} alt="img1" />
          <div className="title">
            <span className="larger">Radiance</span>
            <p>Kerama Marazzi</p>
          </div>
        </div>
      </div>
      <div className="collection-right">
        <div className="collection-right-top">
          <div className="collection-top-left">
            <div className="img-container large">
              <img src={img2} alt="img2" />
              <div className="title">
                <span>Westwind</span>
                <p>Kerama Marazzi</p>
              </div>
            </div>
          </div>
          <div className="collection-top-right">
            <div className="img-container">
              <img src={img3} alt="img3" />
              <div className="title">
                <span>Rotterdam</span>
                <p>Kerama Marazzi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-right-bottom">
          <div className="collection-bottom-left">
            <div className="img-container">
              <img src={img4} alt="img4" />
              <div className="title">
                <span>Rane</span>
                <p>Kerama Marazzi</p>
              </div>
            </div>
          </div>
          <div className="collection-bottom-left">
            <div className="img-container large">
              <img src={img5} alt="img5" />
              <div className="title">
                <span>Ginardo</span>
                <p>Kerama Marazzi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Collection;
