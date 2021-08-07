import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";

import { storage } from "../../../firebase";
import Progress from "./Progress";
import "./AddNews.css";

import UploadImage from "./img/upload.jpg";

import AdminSideNav from "./AdminSideNav";

export default function AdminAddNews() {
  const [title, settitle] = useState();
  const [text, settext] = useState("Write something");
  const [coverImage, setcoverImage] = useState();

  const [uploadPercentage, setuploadPercentage] = useState(0);
  const [imageUploadingState, setimageUploadingState] = useState("");
  const [processStatus, setprocessStatus] = useState(false);
  const [processAlert, setprocessAlert] = useState("");
  const [processMessage, setprocessMessage] = useState("");
  AdminAddNews.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  function autoUploadImage(e) {
    setimageUploadingState("Please wait.. Your Image is Uploading");
    if (e.target.files[0] !== null) {
      const fileName =
        Math.floor(Math.random() * 10000000 + 1) + e.target.files[0].name;
      const uploadTask = storage.ref(`news/${fileName}`).put(e.target.files[0]);
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
            .ref("news")
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              setcoverImage(url);
              setimageUploadingState("Uploaded successfully");
            });
        }
      );
    } else {
      alert("First You Must Select An Image");
    }
  }

  function AddNews() {
    setprocessStatus(true);
    setprocessAlert("alert alert-warning");
    setprocessMessage("Please Wait");
    if (!coverImage) {
      setprocessAlert("alert alert-danger");
      setprocessMessage("Cover Image is required");
      return false;
    }
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    const newNews = {
      title,
      text,
      coverImage,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/news", newNews, config)
      .then(() => {
        setprocessAlert("alert alert-success");
        setprocessMessage("News posted successfully");
        window.location = "/admin";
      })
      .catch((err) => {
        setprocessAlert("alert alert-danger");
        setprocessMessage("Something went wrong. Please Try Again");
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <AdminSideNav />
        </div>
        <div className="col-md-10">
          {" "}
          <div className="AddArticleComponent">
            <div className="text-center">
              <h5>ADD NEWS</h5>
              <hr />
            </div>
            <div class="form-group">
              <label>Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                required
              />
            </div>

            <div class="form-group">
              {coverImage ? (
                <img
                  src={coverImage}
                  style={{ width: "270px", height: "200px" }}
                />
              ) : (
                <img
                  src={UploadImage}
                  style={{ width: "270px", height: "200px" }}
                />
              )}

              <p style={{ color: "red" }}>{imageUploadingState}</p>
              <input
                type="file"
                onChange={autoUploadImage}
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              {uploadPercentage} %
              <Progress percentage={uploadPercentage} />
            </div>
            <div class="form-group">
              <ReactQuill
                modules={AdminAddNews.modules}
                // value={text}
                placeholder="Write Something"
                onChange={(value) => {
                  settext(value);
                }}
                required
              />
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
            <div className="btn btn-success" onClick={AddNews}>
              ADD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
