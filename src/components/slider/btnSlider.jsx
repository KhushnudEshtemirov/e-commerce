import React from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const BtnSlider = ({ direction, moveSlide }) => {
  if (direction === "prev") {
    return (
      <div className="prev-icon" onClick={moveSlide}>
        <BsChevronLeft />
      </div>
    );
  } else if (direction === "next") {
    return (
      <div className="next-icon" onClick={moveSlide}>
        <BsChevronRight />
      </div>
    );
  }
};

export default BtnSlider;
