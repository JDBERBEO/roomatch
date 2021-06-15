import React from "react";
import { Carouselph } from "../components/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import addsInfo from "../Mock_data/ads_info.json";
import { AddsLists } from "../components/AddsLists";

const imgAdds = [
  {
    title: 1,
    src:
      "https://1.bp.blogspot.com/-ze4docdTF8g/U9iqo9uThSI/AAAAAAAABG0/du260ewvw10/s1600/Imagen8.jpg8.jpg",
    alt: "First slide",
    price: 0,
    ranking: 0,
  },
  {
    title: 2,
    src:
      "https://i.pinimg.com/736x/0b/06/98/0b069802ce3cf953919291daaa80389a.jpg",
    alt: "Second slide",
    price: 0,
    ranking: 0,
  },
  {
    title: 3,
    src:
      "https://1.bp.blogspot.com/-ze4docdTF8g/U9iqo9uThSI/AAAAAAAABG0/du260ewvw10/s1600/Imagen8.jpg",
    alt: "Third slide",
    price: 0,
    ranking: 0,
  },
];

export const Advertisements = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
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

        {addsInfo.map((el) => (
          <AddsLists
            id={el.id}
            price={el.price}
            living_space_type={el.living_space_type}
            description={el.description}
            array={imgAdds}
          />
        ))}
      </Container>
    </div>
  );
};
