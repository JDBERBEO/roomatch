import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export const AddsLists = ({ id, price, living_space_type, description }) => {
  return (
    <div>
      <ListGroup as="ul" key={id}>
        <ListGroup.Item as="li" active>
          {living_space_type}
        </ListGroup.Item>
        <ListGroup.Item as="li">{price}</ListGroup.Item>
        <ListGroup.Item as="li">{description}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
