import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AdminSideNav from "./AdminSideNav";

import "../admin.css";

import AdminCustomerTable from "./AdminCustomerTable";
import AdminArticleTable from "./AdminArticleTable";
import AdminProductTable from "./AdminProductTable";
import AdminNewsTable from "./AdminNewsTable";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function AdminDashboard() {
  const classes = useStyles();

  useEffect(() => {
    if (
      !localStorage.getItem("x-auth-token") &&
      localStorage.getItem("role") !== "Admin"
    ) {
      window.location = "/adminlogin";
    }
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-12 admindashboard">
          <AdminSideNav />
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 admindashboard">
          <div className="row">
            <div className="col-lg-12 col-sm-12 admindashboardCol ">
              {" "}
              <h3 className="text-center">Member Table</h3>
              <AdminCustomerTable />
            </div>
            <div className="col-lg-12 col-sm-12 admindashboardCol mt-5">
              {" "}
              <h3 className="text-center">Article Table</h3>
              <AdminArticleTable />
            </div>
            <div className="col-lg-12 col-sm-12 admindashboardCol mt-5">
              {" "}
              <h3 className="text-center">Product Table</h3>
              <AdminProductTable />
            </div>
            <div className="col-lg-12 col-sm-12 admindashboardCol mt-5">
              {" "}
              <h3 className="text-center">News Table</h3>
              <AdminNewsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
