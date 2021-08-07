import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideNavArticleList() {
  const [articleList, setarticleList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/article/all")
      .then((res) => {
        setarticleList(res.data);
      })
      .catch((err) => {
        console.log("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      <h5>Related Articles</h5>
      {/* Article Row Start  */}
      {/* {articleList.slice(0, 5).map((article) => {
        return (
          <a href={"/news/" + article.id}>
            <div className="row mb-4">
              <div className="col-md-3 col-sm-2 " style={{ width: "30%" }}>
                {" "}
                <img
                  class="img-fluid"
                  src={article.coverImage}
                  alt="Card image cap"
                />
              </div>
              <div className="col-md-8 col-sm-8" style={{ width: "70%" }}>
                {" "}
                <div>
                  <h5 class="card-title text-muted">{article.title}</h5>
                </div>
              </div>
            </div>
          </a>
        );
      })} */}
      {/* Article Row End  */}
      <div className="row">
        {/* Column One Start*/}
        {articleList.slice(0, 4).map((article) => {
          return (
            <div className="col-lg-12 mt-2 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{article.title}</h5>
                  <p class="card-text">{article.description}</p>
                  <a href={"/article/" + article.id} class="btn btn-info">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Column One End */}
      </div>
    </div>
  );
}
