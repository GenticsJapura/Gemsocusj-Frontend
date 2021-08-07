import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { styled } from "@material-ui/core";

import "./contact.css";

export default function Contactsection() {
  init("user_17nXRu6uDfNlxC194GMjM");
  function sendEmail(e) {
    e.preventDefault();

    console.log(e.target);

    emailjs
      .sendForm(
        "gmail",
        "template_z630g3e",
        e.target,
        "user_nVP1oaZN3yaeiUwAfgw6P"
      )
      .then(
        (result) => {
          alert("Email sent");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong");
          e.target.reset();
        }
      );
  }

  return (
    <section id="contact">
      <div
        className="container contactform"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {" "}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          style={{ marginTop: "5%" }}
          id="contact"
          class="container-fluid text-center bg-grey "
        >
          {/* <!-- Container (Contact Section) --> */}
          <div style={{ marginBottom: "5%" }}>
            <h2 class="text-center" style={{ marginBottom: "5%" }}>
              Contact Us
            </h2>
            <div class="row">
              {/* <div class="col-md-5">
            <img style={{height:'55%'}} src={contact}></img>
          </div> */}
              <div class="col-md-12 slideanim">
                <form autoComplete={false} onSubmit={sendEmail}>
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    size="medium"
                    variant="outlined"
                    name="name"
                    required={true}
                    style={{ width: "80%", fontSize: "15px" }}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    size="medium"
                    name="email"
                    variant="outlined"
                    required={true}
                    style={{ width: "80%", margin: "15px", fontSize: "15px" }}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Subject"
                    size="medium"
                    name="subject"
                    variant="outlined"
                    required={true}
                    style={{ width: "80%", margin: "15px", fontSize: "15px" }}
                  />

                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    size="medium"
                    name="message"
                    rows={4}
                    variant="outlined"
                    required={true}
                    style={{ width: "80%", fontSize: "15px" }}
                  />

                  <Button
                    variant="outlined"
                    type="submit"
                    value="send message"
                    color="primary"
                    style={{
                      margin: "15px",
                      width: "80%",
                      height: "10%",
                      fontSize: "15px",
                    }}
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
