import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { AdsLists } from "../../components/AdsLists";
import { imgAdds } from "../../Mock_data/imgsAdd";
import { NavBarCss } from "../../components/NavBarCss";

export const Advertisements = ({ ads, handleSelect }) => {
  return (
    <div>
      <NavBarCss/>
      <Container>
              <br></br>
              <div class="container">
                <h1>Choose the best for you!</h1>
              </div>
              <br></br>
              {ads.map((el) => (
                <AdsLists
                  key={el._id}
                  id={el._id}
                  price={el.price}
                  living_space_type={el.living_space}
                  description={el.description}
                  array={imgAdds}
                  handleSelect={handleSelect}
                  city={el.city}
                />
              ))}
              <Row className="container pink"><p></p></Row>
      </Container>
    </div>
  );
};
