import React from "react";
import { Carouselph } from "../components/Carousel";

const imgAdds = [{

  title: 1,
  src: "https://1.bp.blogspot.com/-ze4docdTF8g/U9iqo9uThSI/AAAAAAAABG0/du260ewvw10/s1600/Imagenhttps://1.bp.blogspot.com/-ze4docdTF8g/U9iqo9uThSI/AAAAAAAABG0/du260ewvw10/s1600/Imagen8.jpg8.jpg", 
  alt: "First slide", 
  price: 0,
  ranking: 0 
},
{
  title: 2,
  src: "https://i.pinimg.com/736x/0b/06/98/0b069802ce3cf953919291daaa80389a.jpg", 
  alt: "Second slide", 
  price: 0,
  ranking: 0 
},
{
  title: 3,
  src: "https://1.bp.blogspot.com/-ze4docdTF8g/U9iqo9uThSI/AAAAAAAABG0/du260ewvw10/s1600/Imagen8.jpg", 
  alt: "Third slide",
  price: 0,
  ranking: 0  
},
]

export const Advertisements = () => {

  const [{ title, src, alt }] = imgAdds
  console.log(title, src, alt)
  return (
    <div>
      <h1>calma</h1>
     {imgAdds.map(el => (
      <Carouselph
        key={el.title}
        src= {el.src}
        alt= {el.alt}
       />
     ))} 
    </div>
  );
};
