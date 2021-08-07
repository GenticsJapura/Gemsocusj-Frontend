import React from "react";
import Typed from "react-typed";

import Logo from "../img/logoWhite.png";

const Header = () => {
  return (
    <section id="home">
      <div className="bg-img">
        <div className="header-wraper">
          <div className="main-info">
            <img src={Logo} style={{ width: "300px" }} />
            <h1 className="headerText">GEMSOC</h1>
            <Typed
              className="typed-text"
              strings={[
                "Genetics",
                "Molecular Biology Society",
                "University Of Sri Jayewardenepura",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Header;
