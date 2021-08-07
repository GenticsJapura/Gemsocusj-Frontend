import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";

import "../dashboard.css";

export default function UserArticles(props) {
  const [articleList, setarticleList] = useState([]);
  const [loadingStatus, setloadingStatus] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  function getAllData() {
    const config = {
      headers: { "x-auth-token": localStorage.getItem("x-auth-token") },
    };
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/article/member", config)
      .then((res) => {
        console.log(res);
        setarticleList(res.data);
        setloadingStatus(true);
      })
      .catch((err) => {
        console.log("Api err", err);
        setloadingStatus(true);
      });
  }

  return (
    <div>
      {loadingStatus ? (
        articleList.length <= 0 ? (
          <MessageBox variant="danger">{"No Articles found"}</MessageBox>
        ) : (
          <div className="row center">
            <div>
              {articleList.map((article) => {
                return (
                  <div className="col-lg-12 col-md-12 ml-1 mt-3">
                    <div class="card">
                      <Link
                        to={{
                          pathname: `/article`,
                          data: article.id,
                        }}
                      >
                        <img
                          src={article.coverImage}
                          class="card-img-top"
                          alt="..."
                        />
                      </Link>

                      <div class="card-body">
                        <h5 class="card-title">{article.title}</h5>
                        <p class="card-text">{article.description}</p>
                        <div className="row text-center">
                          <div className="col col-md-6 col-sm-6">
                            <Link
                              to={{
                                pathname: `/editarticle`,
                                data: article.id,
                              }}
                              class="btn btn-info" //change btn icon
                            >
                              Edit
                            </Link>
                          </div>
                          <div className="col col-md-6 col-sm-6">
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                const config = {
                                  headers: {
                                    "x-auth-token":
                                      localStorage.getItem("x-auth-token"),
                                  },
                                };

                                axios
                                  .delete(
                                    process.env.REACT_APP_BACKEND_URL +
                                      "/api/article/" +
                                      article.id,
                                    config
                                  )
                                  .then(() => {
                                    //re-render again
                                    window.location = "/member";
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )
      ) : (
        <div>
          {" "}
          <ReactLoading
            type="spinningBubbles"
            color="#0088b5"
            className="ReactLoadingComponentMember"
          />
        </div>
      )}
    </div>
  );
}
