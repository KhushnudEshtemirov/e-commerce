import React from "react";

import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Service from "../../components/services/service";
import Collection from "../../components/collection/collection";
import BestSeller from "../../components/best-seller/best-seller";
import Action from "../../components/actions/action";
import Brends from "../../components/brends/brend";
import Article from "../../components/article/article";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";

import "./homepage.scss";

const Homepage = () => (
  <div className="container-fluid homepage">
    <div className="container">
      <Header />
      <Slider />
      <Service />
      <Collection />
      <BestSeller />
      <Action />
      <Brends />
      <Article />
      <About />
      <Footer />
    </div>
  </div>
);

export default Homepage;
