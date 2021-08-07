import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";
import SideNav from "../SideNav";

import { storage } from "../../../../firebase";
import Progress from "./Progress";
import "./AddArticle.css";
import UploadImage from "./img/upload.jpg";

export default function EditArticle(props) {
  var quillObj = React.useRef(null);
  const [memberID, setmemberID] = useState();
  const [memberName, setmemberName] = useState();
  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [text, settext] = useState("Write something");
  const [coverImage, setcoverImage] = useState(UploadImage);
  const [articleId, setArticleId] = useState();

  const [processStatus, setprocessStatus] = useState(false);
  const [processAlert, setprocessAlert] = useState("");
  const [processMessage, setprocessMessage] = useState("");

  const [uploadPercentage, setuploadPercentage] = useState(0);
  const [imageUploadingState, setimageUploadingState] = useState("");

  useEffect(() => {
    if (!props.location.data) {
      window.location = "/member";
    }
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/api/article/" +
          props.location.data,
        config
      )
      .then((res) => {
        setmemberID(res.data.memberID);
        setmemberName(res.data.memberName);
        settitle(res.data.title);
        setdescription(res.data.description);
        settext(res.data.text);
        setcoverImage(res.data.coverImage);
        setArticleId(props.location.data);
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
        .ref(`articles/${fileName}`)
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
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("articles")
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

  function AddArticle() {
    setprocessStatus(true);
    setprocessAlert("alert alert-warning");
    setprocessMessage("Please Wait");
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    const newArticle = {
      memberID,
      memberName,
      title,
      description,
      text,
      coverImage,
    };

    axios
      .put(
        process.env.REACT_APP_BACKEND_URL + "/api/article/" + articleId,
        newArticle,
        config
      )
      .then(() => {
        setprocessAlert("alert alert-success");
        setprocessMessage("Article updated successfully");
        window.location = "/member";
      })
      .catch((err) => {
        setprocessAlert("alert alert-danger");
        setprocessMessage("Something went wrong. Please Try Again");
      });
  }

  //upload image using react quill
  async function uploadImageCallBack(file) {
    const fileName = uuidv4();
    let downloadURL = "";
    await storage
      .ref()
      .child("articlesImages/" + fileName)
      .put(file)
      .then(async (snapshot) => {
        downloadURL = await storage
          .ref()
          .child("articlesImages/" + fileName)
          .getDownloadURL();
      });
    return downloadURL;
  }

  function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async function () {
      const file = input.files[0];
      const link = await uploadImageCallBack(file);
      const range = quillObj.current.getEditor().getSelection();
      quillObj.current.getEditor().insertEmbed(range.index, "image", link);
    };
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            { header: "1" },
            { header: "2" },
            { header: [3, 4, 5, 6] },
            { font: [] },
          ],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "video"],
          ["link", "image", "video"],
          ["clean"],
          ["code-block"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <div className="AddArticleComponent">
            <div class="form-group">
              <label>Title</label>
              <input
                type="text"
                class="form-control"
                value={title}
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
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <img
                src={coverImage}
                style={{ width: "200px", height: "200px" }}
              />
              {imageUploadingState}
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
              <ReactQuill
                ref={quillObj}
                value={text}
                onChange={(value) => {
                  settext(value);
                }}
                modules={modules}
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
            <div className="btn btn-success" onClick={AddArticle}>
              EDIT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
