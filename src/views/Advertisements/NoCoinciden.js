import React from "react";
import { Card } from "react-bootstrap";
import { NavBarCss } from "../../components/NavBarCss";

export const NoCoindencies = () => {
  return (
    <div>
      <NavBarCss />
      <br></br>
      <div class="divider"></div>
      <br></br>
      <Card className="container z-depth-0" border="light">
        <Card.Header className="pink"></Card.Header>
        <Card.Body className="container">
          <strong>Oops...No results match your search criteria</strong>
          <img
            src="https://res.cloudinary.com/evollve-sas/image/upload/v1627950665/roomatch/oops-lettering-ink-design-vector-19620786_okrqse.jpg"
            alt="No coindencies"
          ></img>
          <Card.Footer className="pink"></Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};
