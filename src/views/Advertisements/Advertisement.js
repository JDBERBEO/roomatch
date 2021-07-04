import React from "react";
import { Carouselph } from "../../components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Advertisement = () => {

 

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
          <Col className="col-7">{/* <Carouselph /> */}</Col>
          <Col className="col-4">
            <Button>Book Now!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
