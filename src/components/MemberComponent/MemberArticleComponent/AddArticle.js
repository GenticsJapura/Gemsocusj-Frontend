import React, { useState, useEffect, useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "quill/dist/quill.bubble.css";

import { storage } from "../../../firebase";
import Progress from "./Progress";
import "./AddArticle.css";

import UploadImage from "./img/upload.jpg";

import SideNav from "../MemberDashboardComponent/SideNav";

export default function AddArticle() {
  var quillObj = React.useRef(null);
  const [memberID, setmemberID] = useState();
  const [memberName, setmemberName] = useState();
  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [text, settext] = useState(EditorState.createEmpty());
  const [coverImage, setcoverImage] = useState();

  const [uploadPercentage, setuploadPercentage] = useState(0);
  const [imageUploadingState, setimageUploadingState] = useState("");

  const [processStatus, setprocessStatus] = useState(false);
  const [processAlert, setprocessAlert] = useState("");
  const [processMessage, setprocessMessage] = useState("");

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/auth", config)
      .then((res) => {
        setmemberID(res.data.memberID);
        setmemberName(res.data.fullName);
      })
      .catch((err) => {
        alert("Something went wrong");
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

          alert("Something went wrong");
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
    if (!title) {
      setprocessAlert("alert alert-danger");
      setprocessMessage("Title is required");
      return false;
    }
    if (!description) {
      setprocessAlert("alert alert-danger");
      setprocessMessage("Description is required");
      return false;
    }
    if (!coverImage) {
      setprocessAlert("alert alert-danger");
      setprocessMessage("You must upload an image");
      return false;
    }
    if (!text) {
      setprocessAlert("alert alert-danger");
      setprocessMessage("Article is required");
      return false;
    }
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
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/article",
        newArticle,
        config
      )
      .then(() => {
        setprocessAlert("alert alert-success");
        setprocessMessage("Article posted successfully");
        window.location = "/member";
      })
      .catch((err) => {
        setprocessAlert("alert alert-danger");
        setprocessMessage("Something went wrong. Please Try Again");
      });
  }

  //Draft Rich Text Editor Image Upload

  function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      console.log("Uploading image...");
      firebaseUpload(file)
        .then((link) => {
          resolve({ data: { link } });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  function firebaseUpload(file) {
    return new Promise((resolve, reject) => {
      // if (!image) {
      //   reject("Invalid file.");
      // }
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
        },
        (complete) => {
          //Gets link back
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => resolve(url));
        }
      );
    });
  }

  //End of Draft Rich Text Editor Image Upload

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
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
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

  //End of upload image using react quill

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 mt-5">
          <SideNav />
        </div>
        <div className="col-md-10">
          {" "}
          <div className="AddArticleComponent">
            <div className="text-center">
              <h5>ADD Article</h5>
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
              <label>Description</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Description"
                onChange={(e) => {
                  setdescription(e.target.value);
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

            <div
              class="form-group"
              style={{ backgroundColor: "white", border: "2px #e6e6e6 solid" }}
            >
              <ReactQuill
                //theme="bubble"
                ref={quillObj}
                value={text}
                onChange={(value) => {
                  settext(value);
                }}
                placeholder="Write Something"
                modules={modules}
              />
            </div>

            {/* <div
              class="form-group"
              style={{ backgroundColor: "white", border: "2px #333 solid" }}
            >
              <Editor
                // editorState={text}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                toolbar={{
                  history: { inDropdown: true },
                  inline: { inDropdown: false },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  image: {
                    urlEnabled: false,
                    uploadEnabled: true,
                    alignmentEnabled: true, // Whether to display the arrange button is equivalent to text-align
                    uploadCallback: uploadImageCallBack,
                    previewImage: true,
                    inputAccept: "image/*",
                    alt: { present: false, mandatory: false },
                  },
                }}
                onEditorStateChange={(editorState) => {
                  console.log(
                    draftToHtml(convertToRaw(editorState.getCurrentContent()))
                  );
                  settext(
                    draftToHtml(convertToRaw(editorState.getCurrentContent()))
                  );
                }}
              />
            </div> */}
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
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
