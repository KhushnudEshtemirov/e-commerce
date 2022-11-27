import React from "react";

import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Service from "../../components/services/service";
import Collection from "../../components/collection/collection";
import BestSeller from "../../components/best-seller/best-seller";

import "./homepage.scss";

const Homepage = () => (
  <div className="container-fluid homepage">
    <Header />
    <Slider />
    <Service />
    <Collection />
    <BestSeller />
  </div>
);

export default Homepage;
