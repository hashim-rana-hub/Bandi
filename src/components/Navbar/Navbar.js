import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="nav-main" onClick={handleShow}>
        <div className="menuspan">
          <span className="barFirst"></span>
          <span className="barSec"></span>
          <span className="barThird"></span>
        </div>
        
      </div>
      <div className="menu-main-container">
        <Offcanvas
          className="openCanvas"
          show={show}
          onHide={handleClose}
          placement="end"
        >
          {/* <Navbar.Toggle aria-controls="offcanvasNavbar" ></Navbar.Toggle> */}
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            {/* <div closeButton onClick={handleClose}></div> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Downloads
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Ambassadors
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  The Bandi Bag
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Instagram
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Facebook
                </a>
              </li>
            </ul>
            <div>
              {" "}
              <p className="para-text">
                Copyright 2021 Bandi App. All rights reserved. To get in touch,{" "}
                <a href="maito:hello@bandiapp.co.uk">send us an email</a>.
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

    </>
  );
};

export default Navbar;
