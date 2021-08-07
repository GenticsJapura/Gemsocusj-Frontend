import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import { Link } from "react-router-dom";
export default function SideNav() {
  const [name, setname] = useState();

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/auth", config)
      .then((res) => {
        setname(res.data.fullName);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 text-center ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&usqp=CAU"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        </div>
        <br /> <br />
        <div className="col-lg-12 text-center">
          <p>{name}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              localStorage.removeItem("x-auth-token");
              localStorage.removeItem("role");
              window.location = "/";
            }}
          >
            LOGOUT
          </button>
          <div className="justify-center">
            <center>
              {" "}
              <Link
                to={{
                  pathname: "/member",
                }}
                class="btn btn-success mt-4"
              >
                Dashboard
              </Link>
            </center>
          </div>
          <div className="justify-center">
            <center>
              {" "}
              <Link
                to={{
                  pathname: "/addarticle",
                }}
                class="btn btn-warning mt-4"
              >
                Add Article
              </Link>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
