import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const SignUp = () => {

  const [activeButton, setActive] = useState(true)
  const handleClick = () => setActive(!activeButton);
  return (

    <Link to="/roomie/signup">
      {activeButton && !localStorage.getItem("token") && <Button variant="outline-light"
        type="button"
        onClick={handleClick}
      >SignUp</Button>}
    </Link>

  );
};


