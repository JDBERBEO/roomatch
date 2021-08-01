import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


export const GoProfile = () => {

  const [activeButton, setActive] = useState(false)
  const handleClick = () => setActive(!activeButton);

  return (
    <div>
      <Link to="/roomie/profile">
        {!activeButton && localStorage.getItem("token") && <Button variant="outline-light"
          type="button"
          onClick={handleClick}
        >Go Profile</Button>}
      </Link>
    </div>
  );
};
