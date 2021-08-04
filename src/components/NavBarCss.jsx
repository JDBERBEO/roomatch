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
import "materialize-css/js/sidenav";

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
    localStorage.removeItem('tokenHost')
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
                  {(!activeButton && (localStorage.getItem('token') || localStorage.getItem('tokenHost'))) && (
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
      <ul class="sidenav" id="mobile-demo">
        <li><div class="user-view">
              <div class="background">
                <img className="responsive-img" src="../../background3.jpg"/>
              </div>
              <a href="/"><img class="circle" src="../../logo.ico"/></a>
              <a href="#"><span class="white-text name">Roomatch</span></a>
              <a href="#"><span class="white-text name">Your best option</span></a>
              <br></br>
          </div></li>
          <li class=" container pink accent-3"><ModalHome /></li>
          <br></br>
          <li class="red accent-3"><BeHost /></li>
          <br></br>
          <li class="red accent-2"><SignUp /></li>
          <br></br>
          <li class="red accent-1"><GoProfile /></li>
          <br></br>
          <li class="red accent-1">              
            <Link>
              {" "}
              {(!activeButton && (localStorage.getItem('token') || localStorage.getItem('tokenHost'))) && (
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
  );
};
