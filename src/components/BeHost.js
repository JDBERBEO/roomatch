import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const BeHost = () => {
  return (
    <div>
      <Link to="/behost">
        <Button variant="dark">Be Host</Button>{" "}
      </Link>
    </div>
  );
};
