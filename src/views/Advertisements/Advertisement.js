import React from "react";
import { Carouselph } from "../../components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BreadCrumb } from "../../components/BreadCrumb";
import { imgAdds } from "../../Mock_data/imgsAdd";

export const Advertisement = () => {

  let { id } = useParams();

  const {ads} = useSelector(({getAdsReducer})=> {

    return {
      ads: getAdsReducer.ads
    }
  })

  const adobj = ads.filter(ad => ad._id === id);

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
        <Col className="col-7">
          <BreadCrumb />
        </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <Carouselph array={imgAdds}/>
          </Col>
          <Col className="col-6">
          <ListGroup as="ul" key={adobj[0]._id}>
              <ListGroup.Item as="li" active>
             {adobj[0].living_space}
              </ListGroup.Item>
              <ListGroup.Item as="li">{adobj[0].price}</ListGroup.Item>
              <ListGroup.Item as="li">{adobj[0].description}</ListGroup.Item>
            </ListGroup> 
            <Button>Match Host!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
