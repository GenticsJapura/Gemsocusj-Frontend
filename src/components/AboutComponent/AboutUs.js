import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TeamImg from "./img/team.png";
import Logo from "./img/logoblack.png";

import "./aboutus.css";
import "../../App.css";

import CommetteMember from "./CommetteMemberNew";
import LecturersComponent from "./Lecturers";
import LecturersMobileComponent from "./LecturersMobile";
import Particle from "./particle";
import MainCommette from "./MainCommette";
export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about">
      <div className="AboutUsComponent">
        <div className="container">
          <div className="row AboutUsRowOne mt-5 mb-5">
            <div
              className="col-lg-6 col-md-6 text-center"
              data-aos="zoom-out"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={Logo} className="geneticsLogo"/>
            </div>
            <div
              className="col-lg-6 col-md-6 text-center"
              className="col-lg-6 col-md-6 text-center"
              data-aos="fade-left"
              data-aos="zoom-out"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h3 className=" text-center">WHO WE ARE</h3>
              <hr className="HrBreaker" />
              <p
                className="r"
                style={{ fontSize: "15px" }}
              >
                An academic association functioning among
                young undergraduates with the aim of extending transcending
                excellence and passion in propagating knowledge among the
                society about the fields of Genetics and Molecular Biology. It
                also aims at spreading the essence of Genetic diversity that
                underlies Biological Diversity to raise awareness about
                conservation and hence extending an invaluable service to the
                community as a whole
              </p>
            </div>
          </div>

          <div className="AboutUsComponent ">
            <br />
            <div className="LecComponentDesktop ">
              <Particle />
            </div>
            <div className="LecComponentMobile ">
              <LecturersMobileComponent />
            </div>
          </div>

          <div className="AboutUsComponent">
            <br />
            <MainCommette />
          </div>
        </div>
      </div>
    </section>
  );
}
