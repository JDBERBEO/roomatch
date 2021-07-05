import React from "react";
import { Carouselph } from "../../components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Breadcrumb,ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Advertisement = () => {

  let { id } = useParams();
  // console.log('id desde ad: ', id)

  const {ads} = useSelector(({getAdsReducer})=> {
    console.log('getreducer_ ', getAdsReducer)
    return {
      ads: getAdsReducer.ads
    }
  })

  console.log(ads)
  const adobj = ads.filter(ad => ad._id === id);
  // console.log('ad: ', ad[0].photo)
  // [adobj] = ad
  
  console.log('ad photo', adobj[0].photo)

  return (
    <div>
      <Container>
        <Row>
        <Col className="col-7">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="">
                  <Button>price</Button>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="">
                  <Button>Type of accommodation</Button>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="">
                  <Button>Free cancellation</Button>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="">
                  <Button>Reserve now</Button>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="">
                  <Button>More filters</Button>
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <Carouselph array={adobj[0].photo}/>
          </Col>
          <Col className="col-6">
          <ListGroup as="ul" key={adobj[0]._id}>
              <ListGroup.Item as="li" active>
             fferfe
              </ListGroup.Item>
              <ListGroup.Item as="li">{adobj[0].price}</ListGroup.Item>
              <ListGroup.Item as="li">{adobj[0].description}</ListGroup.Item>
            </ListGroup> 
            <Button>Book Now!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
