import {React, useEffect} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { Carouselph } from "./Carousel";
import { useSelector, useDispatch } from "react-redux";

export const AdsListsHost = ({
          id,
          living_space,
          price,
          description,
          photos,
          city,
          bathroom,
          facilities,
          house_rules,
          parking,
          private_bathroom,
          rooms,
          handleDelete,
}) => {

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  if(private_bathroom) {
    private_bathroom="Yes"
  }else{
    private_bathroom="No"
  }

  return (
    <div>
      <Container>
        <div class="divider"></div>
        <br></br>
        <Row>
          <Card className="container z-depth-0" border="light">
            <Card.Body clasName="container">
              <Row>
                <Col>
                  <Card className="z-depth-5">
                    <Card.Body>
                      {}
                      <Carouselph array={photos} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="text-center z-depth-5" border="light">
                    <Card.Body>
                      <ListGroup as="ul" key={id}>
                        <ListGroup.Item className="pink" as="li" active>
                          <p>
                            <strong>Living Space Name:</strong>
                          </p>
                          {living_space}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <p>
                            <strong>Price:</strong>
                          </p>
                          {formatter.format(price)}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <p>
                            <strong>Days Booked:</strong>
                          </p>
                          <br />
                          {description}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <p>
                            <strong>City:</strong>
                          </p>
                          {city}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <p>
                            <strong>Facilities:</strong>
                          </p>
                          {facilities}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <p>
                            <strong>House Rules:</strong>
                          </p>
                          {house_rules}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <p>
                            <strong>Parking:</strong>
                          </p>
                          {parking}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <p>
                            <strong>Bathroom:</strong>
                          </p>
                          {bathroom}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <p>
                            <strong>Private Bathroom:</strong>
                          </p>
                          {private_bathroom}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <p>
                            <strong>Rooms:</strong>
                          </p>
                          {rooms}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <Button variant="danger" onClick={() => handleDelete(id)}>
                          Delete this space
                        </Button>
                        </ListGroup.Item>
                      </ListGroup>
                      <br></br>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
    
    // <div>
    //   <Container>
    //     <Row>
    //       <Col className="col-4">
    //         <Carouselph array={photos} />
    //       </Col>
    //       <Col className="col-4">
    //         <ListGroup as="ul" key={id}>
    //           <ListGroup.Item as="li" active>
    //             {living_space}
    //           </ListGroup.Item>
    //           <ListGroup.Item as="li">{price}</ListGroup.Item>
    //           <ListGroup.Item as="li">{description}</ListGroup.Item>
    //         </ListGroup>
    //         <Button variant="danger" onClick={() => handleDelete(id)}>
    //           Delete this space
    //         </Button>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};
