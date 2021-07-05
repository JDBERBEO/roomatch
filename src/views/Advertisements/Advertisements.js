import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { AdsLists } from "../../components/AdsLists";
import { imgAdds } from "../../Mock_data/imgsAdd";
import { BreadCrumb } from "../../components/BreadCrumb";


export const Advertisements = ({ ads, handleSelect }) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-7">
           <BreadCrumb />
          </Col>
        </Row>
        {ads.map((el) => (
          <AdsLists
            key={el._id}
            id={el._id}
            price={el.price}
            living_space_type={el.living_space}
            description={el.description}
            array={imgAdds}
            handleSelect={handleSelect}
          />
        ))}
      </Container>
    </div>
  );
};
