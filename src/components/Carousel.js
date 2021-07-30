import Carousel from "react-bootstrap/Carousel";
import React, { useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/js/carousel";

export const Carouselph = ({ array }) => {
  let options={
    height:400,
    indicators: true,
    duration: 200,
    interval: 2000


  };
  useEffect(() => {
    let elements = document.querySelectorAll(".slider");
    M.Slider.init(elements,options);
  }, []);
  console.log("array", array);
  return (
  <div class="container">
      <div class="slider center-align">
        <ul class="slides">
        {!!array && array.length > 0 && array.map((el) => (
          <li class="slides" key={el.title}>
            <img class="responsive-img" src={el.src} alt="First slide" />
          </li>

        ))}

        </ul>
    </div>
  </div>
  );
};
