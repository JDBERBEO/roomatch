import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


export const GoProfile = () => {

  const [activeButton, setActive] = useState(false)
  const handleClick = () => setActive(!activeButton);

  return (
    <div>
      {!activeButton && localStorage.getItem("token") && <Link to="/roomie/profile"> <Button variant="outline-light" type="button" onClick={handleClick}>Go Profile</Button>
      </Link>}
      {!activeButton && localStorage.getItem("tokenHost") && <Link to="/Host/profile"> <Button variant="outline-light" type="button" onClick={handleClick}>Go Profile</Button>
      </Link>}
    </div>
  );
};
