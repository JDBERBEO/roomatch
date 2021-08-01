import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ModalHome from "../components/ModalHome";
import { BeHost } from "../components/BeHost";
import { SignUp } from "../components/SignUp";
import { GoProfile } from "../components/ButtonProfile";
import M from "materialize-css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/js/parallax";

export const NavBarCss = () => {
  const history = useHistory();
  // function Logout() {
  //   localStorage.removeItem("token");

  //   history.push("/");
  // }
  useEffect(() => {
    let elements = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elements);
  }, []);

  const [activeButton, setActive] = useState(false);
  const handleClick = () => {
    localStorage.removeItem("token");
    setActive(!activeButton);
    history.push("/");
  };
  return (
    <div>
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="/" class="brand-logo center">
              <img
                src="../../logo2.png"
                width="70"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </a>
            <a href="/" class="brand-logo right">
              Roomatch
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <ModalHome />
              </li>
              <li>
                <BeHost />
              </li>
              <li>
                <SignUp />
              </li>
              <li>
                <GoProfile />
              </li>
              <li>
                <Link>
                  {" "}
                  {!activeButton && localStorage.getItem("token") && (
                    <Button
                      variant="outline-light"
                      type="button"
                      onClick={handleClick}
                    >
                      Logout
                    </Button>
                  )}{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <ul class="sidenav red accent-3" id="mobile-demo">
        <li><div class="section white">
            <div class="background" >
              <img class="responsive-img" src="../../RoomiesNavBar.jpg"/>
            </div>
        </div></li>
      
        <li><br></br></li>
        <li><ModalHome/></li>
        <li><BeHost/></li>
        <li><SignUp/></li>
        <li><Button
            variant={localStorage.token?"dark":"outline-dark"}
            type="button"
            onClick={Logout}
            disabled={!localStorage.token}
            >Logout</Button></li>
      </ul> */}
    </div>
  );
};
