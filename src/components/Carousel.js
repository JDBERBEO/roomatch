import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Carouselph = ({ array }) => {
  return (
    <div>
      <Carousel>
        {array.map((el) => (
          <Carousel.Item key={el.title}>
            <img className="d-block w-100" src={el.src} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
