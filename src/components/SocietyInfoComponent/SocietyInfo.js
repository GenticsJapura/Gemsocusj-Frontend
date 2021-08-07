import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import "./societyinfo.css";

export default function SocietyInfo() {
  const [articleCount, setarticleCount] = useState(0);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/article")
      .then((res) => {
        setarticleCount(res.data.length);
      });
  }, []);
  return (
    <div>
      <div className="row societyinforow ">
        {/* Column One Start */}
        <div className="col-lg-4 col-sm-12 text-center societyinfoDiv">
          <div className="row">
            {" "}
            <div className="col-lg-12 col-sm-12 text-center">
              <i class="fas fa-users homepagefontawesomeicons"></i>
            </div>
            <div className="col-lg-12 col-sm-12 text-center homepagefontawesometext">
              <p className="societyInfoText">Members</p>
              <span className="countDownText">
                <CountUp start={0} end={100} duration={10} separator=" " /> +
              </span>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-lg-4 col-sm-12 text-center societyinfoDiv">
          <div className="row">
            {" "}
            <div className="col-lg-12 col-sm-12 text-center">
              <i class="fas fa-user-tie homepagefontawesomeicons"></i>
            </div>
            <div className="col-lg-12 col-sm-12 text-center homepagefontawesometext">
              <p className="societyInfoText">Lecturers</p>
              <span className="countDownText">
                <CountUp start={0} end={7} duration={10} separator=" " />
              </span>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-lg-4 col-sm-12 text-center societyinfoDiv">
          <div className="row">
            {" "}
            <div className="col-lg-12 col-sm-12 text-center">
              <i class="far fa-newspaper homepagefontawesomeicons"></i>
            </div>
            <div className="col-lg-12 col-sm-12 text-center homepagefontawesometext">
              <p className="societyInfoText">Articles</p>
              <span className="countDownText">
                <CountUp
                  start={0}
                  end={articleCount}
                  duration={10}
                  separator=" "
                />
              </span>
            </div>
          </div>
        </div>
        {/* Column One End */}
      </div>
    </div>
  );
}
