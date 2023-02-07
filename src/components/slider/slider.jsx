import React, { useEffect, useState } from "react";

import { SliderData } from "./slider.data";
import BtnSlider from "./btnSlider";

import "./slider.scss";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  let slideInterval;

  const nextSlide = () => {
    if (slideIndex !== SliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === SliderData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(SliderData.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const autoSlide = () => {
    slideInterval = setTimeout(nextSlide, 5000);
  };

  useEffect(() => {
    autoSlide();
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <div className="row slider">
      <div className="col-xl-8 col-lg-8 col-md-6 col-12 slider-area border">
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className="slider-container">
          <div className="slider-items">
            {SliderData.map((item, index) => {
              return (
                <div
                  className={
                    slideIndex === index + 1
                      ? "slider-item active"
                      : "slider-item"
                  }
                  key={item.id}
                >
                  <img src={item.img} alt="slider-image" />
                </div>
              );
            })}
          </div>
          <div className="dots-container">
            {SliderData.map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={
                  slideIndex === index + 1 ? "one-dot active" : "one-dot"
                }
                key={item.id}
              ></div>
            ))}
          </div>
        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-12 slider-right">
        <div className="col-12 right-top">
          <h3>
            BEST FUNITURE <br /> FROM $1000
          </h3>
          <a href="#">READ MORE</a>
        </div>
        <div className="col-12 right-bottom">
          <h3>
            PRODUCTS <br /> WITH DISCOUNT
          </h3>
          <a href="#">READ MORE</a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
