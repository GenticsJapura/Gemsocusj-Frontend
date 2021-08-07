import React, { useEffect } from "react";
import "../dashboard.css";
import Articles from "./UserArticles";

import SideNav from "../SideNav";

export default function Dashboard() {
  useEffect(() => {
    if (
      !localStorage.getItem("x-auth-token") &&
      localStorage.getItem("role") !== "Member"
    ) {
      window.location = "/";
    }
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-12 admindashboard">
          <SideNav />
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 admindashboard">
          <div className="row">
            <div className="col-lg-12 col-sm-12 admindashboardCol ">
              {" "}
              <h3 className="text-center">Articles</h3>
              <Articles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
