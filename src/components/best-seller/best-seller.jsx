import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { data } from "./data";
import "./best-seller.scss";

import img from "../../images/images/6.png";
import imgStar from "../../images/icons/star.png";
import imgHalfStar from "../../images/icons/half-star.png";
import { TfiHeart } from "react-icons/tfi";

const BestSeller = () => {
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
    <div className="best-seller">
      <h2 className="section-title">Best Sellers</h2>
      <div className="product-sort">
        <ul>
          <li className="active">All products</li>
          <li>Sink</li>
          <li>Bathtub</li>
          <li>Toilet</li>
          <li>Shower systems</li>
          <li>Mixers</li>
          <li>Mirror</li>
          <li>Shower cabins</li>
          <li>Washing machines</li>
        </ul>
      </div>
      <div className="best-products">
        <Slider {...settings}>
          {data.map((item) => (
            <div className="product border" key={item.id}>
              <div className="product-img">
                <img src={img} alt="img1" />
                <span>{item.top ? "TOP" : null}</span>
                {item.discount ? <span className="action">ACTION</span> : null}
                <div className="heart-icon">
                  <TfiHeart />
                </div>
                <p>QUICK VIEW</p>
              </div>
              <div className="product-details">
                <ul>
                  <li>
                    <img src={imgStar} alt="star" />
                  </li>
                  <li>
                    <img src={imgStar} alt="star" />
                  </li>
                  <li>
                    <img src={imgStar} alt="star" />
                  </li>
                  <li>
                    <img src={imgStar} alt="star" />
                  </li>
                  <li>
                    <img src={imgHalfStar} alt="star" />
                  </li>
                </ul>
                <p className="title">{item.title}</p>
                <div className="cart-bottom">
                  <span>{item.country}</span>
                  <div>
                    <span>${item.price}</span>
                    <button>ADD TO CART</button>
                  </div>
                  {item.old_price ? (
                    <span className="old-price">${item.old_price}</span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
