import {React, useEffect} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carouselph } from "./Carousel";
import { useSelector, useDispatch } from "react-redux";

export const AdsListsHost = ({
  id,
  living_space,
  price,
  description,
  array,
  handleDelete
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-4">
            <Carouselph array={array} />
          </Col>
          <Col className="col-4">
            <ListGroup as="ul" key={id}>
              <ListGroup.Item as="li" active>
                {living_space}
              </ListGroup.Item>
              <ListGroup.Item as="li">{price}</ListGroup.Item>
              <ListGroup.Item as="li">{description}</ListGroup.Item>
            </ListGroup>
            <Button variant="danger" onClick={() => handleDelete(id)}>
              Delete this space
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
