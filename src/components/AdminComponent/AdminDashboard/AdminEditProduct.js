import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSideNav from "./AdminSideNav";
import { storage } from "../../../firebase";
import Progress from "./Progress";

import "../admin.css";

import UploadImage from "./img/upload.jpg";

export default function AdminEditProduct(props) {
  const [productID, setproductID] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState(null);
  const [uploadPercentage, setuploadPercentage] = useState(0);
  const [imageUploadingState, setimageUploadingState] = useState("");
  const [processStatus, setprocessStatus] = useState(false);
  const [processAlert, setprocessAlert] = useState("");
  const [processMessage, setprocessMessage] = useState("");
  useEffect(() => {
    if (
      !localStorage.getItem("x-auth-token") &&
      localStorage.getItem("role") !== "Admin"
    ) {
      window.location = "/";
    }

    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/api/product/" +
          props.match.params.id
      )
      .then((res) => {
        setproductID(props.match.params.id);
        settitle(res.data.title);
        setdescription(res.data.description);
        setimage(res.data.image);
        setprice(res.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function autoUploadImage(e) {
    setimageUploadingState("Please wait.. Your Image is Uploading");
    if (e.target.files[0] !== null) {
      const fileName =
        Math.floor(Math.random() * 10000000 + 1) + e.target.files[0].name;
      const uploadTask = storage
        .ref(`products/${fileName}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setuploadPercentage(progress);
        },
        (error) => {
          //error function

          alert("Something went wrong");
        },
        () => {
          //complete function
          storage
            .ref("products")
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              setimage(url);
              setimageUploadingState("Uploaded successfully");
            });
        }
      );
    } else {
      alert("First You Must Select An Image");
    }
  }

  function EditProduct(e) {
    e.preventDefault();
    setprocessStatus(true);
    setprocessAlert("alert alert-warning");
    setprocessMessage("Please Wait");
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    if (!image) {
      alert("You must upload an image");
      return false;
    }

    const newPost = {
      title,
      description,
      price,
      image,
    };

    axios
      .put(
        process.env.REACT_APP_BACKEND_URL + "/api/product/" + productID,
        newPost,
        config
      )
      .then(() => {
        setprocessAlert("alert alert-success");
        setprocessMessage("Product updated successfully");
        window.location = "/admin";
      })
      .catch((err) => {
        setprocessAlert("alert alert-danger");
        setprocessMessage("Something went wrong. Please Try Again");
      });
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-12 admindashboard">
          <AdminSideNav />
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 admindashboard">
          <h3 className="text-center">Edit Product</h3>
          <form onSubmit={EditProduct}>
            <div class="form-group">
              <label>Title</label>
              <input
                type="text"
                class="form-control"
                value={title}
                required
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <input
                type="text"
                class="form-control"
                value={description}
                required
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Price</label>
              <input
                type="number"
                class="form-control"
                value={price}
                required
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
            </div>

            <div class="form-group">
              {image ? (
                <img src={image} style={{ width: "270px", height: "200px" }} />
              ) : (
                <img
                  src={UploadImage}
                  style={{ width: "270px", height: "200px" }}
                />
              )}

              <br />
              <span style={{ color: "red", fontWeight: "bold" }}>
                {imageUploadingState}
              </span>
              <input
                type="file"
                onChange={autoUploadImage}
                class="form-control"
              />
            </div>
            <div class="form-group">
              {uploadPercentage} %
              <Progress percentage={uploadPercentage} />
            </div>
            <div class="form-group">
              {processStatus ? (
                <div class={processAlert} role="alert">
                  {processMessage}
                </div>
              ) : (
                ""
              )}{" "}
            </div>
            <button type="submit" class="btn btn-primary">
              EDIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
