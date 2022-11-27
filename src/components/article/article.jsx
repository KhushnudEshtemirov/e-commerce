import React from "react";
import Slider from "react-slick";

import { article_data as data } from "./articles.data";

import "./article.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Article = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="article-container">
      <h2 className="section-title">Articles</h2>
      <div className="articles">
        <Slider {...settings}>
          {data.map((article) => (
            <div className="col-12" key={article.id}>
              <div className="article">
                <div className="article-image">
                  <img src={article.img} alt="article-image" />
                </div>
                <p className="article-title">{article.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Article;
