import React from "react";
import logo from "../img/logoWhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navcontainer">
      <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
        <div className="container">
          <h3 style={{ color: "white" }}>GEMSOC</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "0px" }}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a class="nav-link js-scroll-trigger" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/articles">
                  Articles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/buyandsell">
                  Buy & sell
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link js-scroll-trigger" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
