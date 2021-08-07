import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Articles.css";

import ArticlesList from "./ArticlesList";
import SideNavArticleList from "./SideNavArticleList";

import CoverImg from "../../img/banner.png";

export default function Articles() {
  const [articleList, setarticleList] = useState([]);
  const [loadingStatus, setloadingStatus] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/article")
      .then((res) => {
        setarticleList(res.data);
        setloadingStatus(true);
      })
      .catch((err) => {
        setloadingStatus(true);
      });
  }, []);

  return (
    <div>
      <div className="ArticleBackground">
        <div className="header-wraperArticle ">
          <div className="main-infoArticleHeader ">
            {" "}
            <br /> <br />
            <br />
            <h1 style={{ fontWeight: "bolder" }}>Articles</h1>
            <p>
              Blogging is good for your career. A well-executed blog sets you
              apart as an expert in your field. ~Penelope Trunk
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5 mb-5">
            {articleList.length > 0 ? (
              <>
                <div className="col-lg-8">
                  <ArticlesList />
                </div>
                <div className="col-lg-4">
                  <SideNavArticleList />
                </div>
              </>
            ) : (
              <div className="col-lg-12 mt-2 mb-3">
                <div class="alert alert-warning text-center" role="alert">
                  ARTICLES NOT AVAILABLE
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
