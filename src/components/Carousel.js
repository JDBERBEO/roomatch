import React from "react";
import Carousel from "react-bootstrap/Carousel";
//let arr = [{title: "first", content: "nulla", img: "https", alt: "lo que sea",  }]
export const Carouselph = (props) => {
  console.log(`destructuring desde map ${props}`)
  const {array} = props
  console.log(array)
  return (
    <div>
      <Carousel> 
        {array.map(el => (
          <Carousel.Item key={el.title} > 
            <img
              className="d-block w-100"
              src={el.src}
              alt="First slide"
            />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

            </Carousel.Item> 
        ))}
        {/* <Carousel.Item> */}
          {/* <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/a6/60/9d/a6609d6a10f843c59734616accae5a89.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://soyarquitectura.mx/wp-content/uploads/2020/09/Fachada-Casa-moderna-dos-pisos-Nogal-blogc7-edited.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>  */}
      </Carousel>
    </div>
  );
};
