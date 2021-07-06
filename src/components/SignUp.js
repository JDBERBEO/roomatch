import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div>
      <Link to="/roomie/signup">
        <Button variant="dark">SignUp</Button>{" "}
      </Link>
    </div>
  );
};
