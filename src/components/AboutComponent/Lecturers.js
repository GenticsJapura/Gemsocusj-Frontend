import React from "react";

import nissanka from "./img/nissanka.jpg";
import hiruni from "./img/hiruni.jpg";
import iresha from "./img/iresha.jpg";
import helani from "./img/Helani.jpg";
import kasun from "./img/Kasun.jpg";
import pamoda from "./img/Pamoda.jpg";
import DinithiPeiris from "./img/DinithiPeiris.jpg";

export default function LecturersComponent() {
  return (
    <div className="container">
      <div className="row LecComponentRow">
        <div className="col-md-12 text-center">
          <h3>LECTURERS</h3>
          <hr className="HrBreaker" />
        </div>

        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent ">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={nissanka} className="LecurersImages" />
            </div>
            <div
              className="col-lg-8 col-md-6 LecturerInfoColOne LecComponent"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Prof. B.G.D.N.K. De Silva</span>
              </h4>

              <p>B.Sc (USJ), Ph.D. (USJ)</p>
              <p>Senior Professor</p>
              <p>
                Research Interests: Genetics, Molecular Biology, Medical
                Entomology, Molecular Entomology
              </p>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column Two Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-8 col-md-6 LecturerInfoColTwo"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Prof. Dinithi Peiris</span>
              </h4>
              <p>
                B.Sc. – University of Colombo, PhD UK; F.Biol, Post Doc –
                Queen’s University, Canada; Research Fellow UBC Canada
              </p>
              <p>
                Research Interest – Pharmacognosy, DNA Bar Coding, Molecular
                mechanisms, Toxicology, Infertility
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={DinithiPeiris} className="LecurersImages" />
            </div>
          </div>
        </div>
        {/* Column Two End */}

        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={helani} className="LecurersImages" />
            </div>
            <div
              className="col-lg-8 col-md-6 LecturerInfoColOne "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Dr. Helani Munasinghe </span>
              </h4>

              <p>
                BSc – University of Colombo, MSc – Cheju National University,
                South Korea, PhD – University of Birmingham, UK
              </p>
              {/* <p>Senior Lecturer – Genetics & Molecular Biology Unit</p> */}
              <p>
                Research Interests- Quality assessment of food and natural
                products using{" "}
                <span class="font-italic">Caenorhabditis elegans</span> as a
                model organism.
              </p>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column Two Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-8 col-md-6 LecturerInfoColTwo"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Dr. Hiruni Harischandra </span>
              </h4>

              <p>B.Sc. (ISU), Ph.D. (ISU)</p>
              <p>Senior Lecturer – Genetics & Molecular Biology Unit</p>
              <p>
                Research Interests- Genetics, Molecular Biology, Parasite and
                host interactions, development of diagnostics for Lymphatic
                filariasis, investigating the spread of Lymphatic filariasis in
                Sri Lanka
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={hiruni} className="LecurersImages" />
            </div>
          </div>
        </div>
        {/* Column Two End */}
        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={iresha} className="LecurersImages" />
            </div>
            <div
              className="col-lg-8 col-md-6 LecturerInfoColOne "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Dr. Iresha N. Harischandra</span>
              </h4>
              <p>B. Sc. (UOC), Ph.D. (USJP)</p>
              <p>
                Research Interest – Population genetics, Conservation genetics,
                Evolutionary and Population genomics of wild animals
              </p>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column Two Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-8 col-md-6 LecturerInfoColTwo"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Dr. Kasun Thambugala</span>
              </h4>
              <p>
                BSc in – University of Kelaniya, PhD in Fungal systematics - Mae
                Fah Luang University, Thailand
              </p>
              <p>
                Research Interest – Molecular phylogenetics and systematics,
                fungal endophytes in tea, Microbial antagonists to control plant
                pathogens
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={kasun} className="LecurersImages" />
            </div>
          </div>
        </div>
        {/* Column Two End */}
        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={pamoda} className="LecurersImages" />
            </div>
            <div
              className="col-lg-8 col-md-6 LecturerInfoColOne "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Dr. Pamoda Jayathunga </span>
              </h4>

              <p>
                BSc in Molecular Biology and Biochemistry - University of
                Colombo, MPhil in Molecular Biology - University of Sri
                Jayewardenepura, PhD in Molecular Neuroscience - Edith Cowan
                University, Australia
              </p>
              {/* <p>Senior Lecturer – Genetics & Molecular Biology Unit</p> */}
              <p>Research Interests- Cell Biology, Neuroscience</p>
            </div>
          </div>
        </div>
        {/* Column One End */}
      </div>
    </div>
  );
}
