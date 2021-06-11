import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const SingUp = () => {
  return (
    <div>
      <Link to="/signup">
        <Button variant="dark">SignUp</Button>{" "}
      </Link>
    </div>
  );
};
