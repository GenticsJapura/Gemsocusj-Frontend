import React from "react";
import { Link } from "react-router-dom";

export default function AdminSideNav() {
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
          <p>ADMIN</p>
          <Link className="btn btn-success " to="/admin">
            DASHBOARD
          </Link>
          <br />
          <Link className="btn btn-warning  mt-2" to="/addmember">
            ADD MEMBER
          </Link>
          <br />

          <Link className="btn btn-warning  mt-2" to="/addnews">
            ADD NEWS
          </Link>
          <br />
          <Link className="btn btn-warning  mt-2" to="/addproduct">
            ADD PRODUCT
          </Link>
          <br />
          <button
            className="btn btn-danger mt-2"
            onClick={() => {
              localStorage.removeItem("x-auth-token");
              localStorage.removeItem("role");
              window.location = "/";
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
