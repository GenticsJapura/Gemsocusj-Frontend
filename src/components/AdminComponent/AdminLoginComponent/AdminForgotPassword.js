import React, { useState } from "react";
import axios from "axios";
import NavbarTwo from "../../NavbarTwo";
import $ from "jquery";

export default function AdminForgotPassword() {
  const [userID, setuserID] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [resetPasswordKey, setresetPasswordKey] = useState("");
  const [resetEnteredPasswordKey, setresetEnteredPasswordKey] = useState("");
  const [ResetStatus, setResetStatus] = useState(false);
  const [emailStatus, setemailStatus] = useState();

  function sendresetEmail(e) {
    e.preventDefault();

    setemailStatus("Please wait...");

    const user = {
      email,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/admin/get", user)
      .then((res) => {
        setuserID(res.data.id);
        const resetKey = Math.floor(Math.random() * 10000000 + 1);
        setresetPasswordKey(resetKey);
        if (email === res.data.email) {
          // code fragment
          var data = {
            service_id: "gmail",
            template_id: "template_uq17pgf",
            user_id: "user_nVP1oaZN3yaeiUwAfgw6P",
            template_params: {
              email: res.data.email,
              resetKey: resetKey,
            },
          };

          $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
          })
            .done(function () {
              // alert("Your mail is sent!");
              setResetStatus(true);
              setemailStatus("Email Sent Successfully...");
            })
            .fail(function (error) {
              alert("Oops... " + JSON.stringify(error));
            });
        }
      })
      .catch((err) => {
        alert("Something went wrong..Please try again");
      });
  }

  function resetPasswordFunction(e) {
    e.preventDefault();

    if (resetPasswordKey == resetEnteredPasswordKey) {
      const resetUser = {
        userID,
        email,
        password,
      };

      axios
        .put(
          process.env.REACT_APP_BACKEND_URL + "/api/admin/resetadmin",
          resetUser
        )
        .then(() => {
          alert("Update Success.. Please try to log again using new password");
          window.location = "/adminlogin";
        })
        .catch(() => {
          alert("Something went wrong..Please try again");
          window.location = "/adminlogin";
        });
    } else {
      alert("Something went wrong..Please try again");
      window.location = "/adminlogin";
    }
  }

  return (
    <div>
      <div>
        <NavbarTwo />
      </div>

      <div className="container">
        <div style={{ padding: "100px 0px" }}>
          {!ResetStatus ? (
            <form onSubmit={sendresetEmail}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="emailInput"
                  class="form-control"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <br />
                <h6 style={{ color: "red" }}>{emailStatus}</h6>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          ) : (
            <form onSubmit={resetPasswordFunction}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="emailInput"
                  class="form-control"
                  value={email}
                  readOnly
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Reset Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Enter New Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Reset Key</label>
                <h6 style={{ color: "red" }}>
                  Please check your email for the reset key
                </h6>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Enter Reset Key"
                  onChange={(e) => {
                    setresetEnteredPasswordKey(e.target.value);
                  }}
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
