import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const SignUp2 = () => {
  return (
    <div>
      <Link to="/roomie/signup">
        <Button variant="danger">SignUp</Button>
      </Link>
    </div>
  );
};
