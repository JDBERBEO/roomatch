import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div>
      <Link to="/roomie/signup">
        <Button variant="outline-light">SignUp</Button>
      </Link>
    </div>
  );
};
