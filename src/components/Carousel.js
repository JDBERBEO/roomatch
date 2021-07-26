import React, { useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/js/parallax";

export const Carouselph = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".carousel");
    M.Carousel.init(elements);
  }, []);

  return (
    <div class="carousel">
      <a class="carousel-item" href="#one!">
        <img src="https://lorempixel.com/250/250/nature/1" alt="1" />
      </a>
      <a class="carousel-item" href="#two!">
        <img src="https://lorempixel.com/250/250/nature/2" alt="2" />
      </a>
      <a class="carousel-item" href="#three!">
        <img src="https://lorempixel.com/250/250/nature/3" alt="3" />
      </a>
      <a class="carousel-item" href="#four!">
        <img src="https://lorempixel.com/250/250/nature/4" alt="4" />
      </a>
      <a class="carousel-item" href="#five!">
        <img src="https://lorempixel.com/250/250/nature/5" alt="5" />
      </a>
    </div>
  );
};
