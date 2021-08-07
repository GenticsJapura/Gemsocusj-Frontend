import React from "react";

import Carousel from "react-bootstrap/Carousel";

import ImageOne from "./images/img1.jpg";
import ImageTwo from "./images/img2.jpg";
import ImageThree from "./images/img3.jpg";

const CarouselDemo = () => {
  return (
    <div className="corouseldemo container mt-4 mb-5">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 CaroselImage"
            src={ImageOne}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 CaroselImage"
            src={ImageTwo}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 CaroselImage"
            src={ImageThree}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
