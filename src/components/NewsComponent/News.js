import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./News.css";

export default function News() {
  const [newsList, setnewsList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/news")
      .then((res) => {
        setnewsList(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <section id="news">
      <div className="container">
        <div className="col-md-12 text-center">
          <h3>NEWS & UPDATES</h3>
          <hr className="HrBreaker" />
        </div>
        <div className="row">
          {newsList.length > 0 ? (
            <>
              {" "}
              <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                {newsList.slice(0, 1).map((news) => {
                  return (
                    <div class="card" style={{backgroundColor:"#f5f5f5",borderRadius:"20px"}}>
                      <Link
                        to={{
                          pathname: "/news/" + news.id,
                        }}
                      >
                        <img
                          class="img-fluid"
                          src={news.coverImage}
                          alt="Card image cap"
                          style={{borderRadius:"20px 20px 0px 0px"}}
                        />
                        <div class="card-body" style={{backgroundColor:"#f5f5f5",borderRadius:"0px 0px 20px 20px"}}>
                          <p class="card-title text-muted m-0" style={{fontSize:"small"}}>{news.date}</p>
                          <p class="card-text popinsTextFont m-0">{news.title}</p>
                          <div
                      dangerouslySetInnerHTML={{ __html: news.text.substring(0,150) + "..." + "<span class='text-primary'>Read more</span>"}}
                      style={{ overflowX: "hidden",fontSize:"small" }}
                    />
                
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                {newsList.slice(0, 5).map((news) => {
                  return (
                    /* News Row Start */
                    <Link
                      to={{
                        pathname: "/news/" + news.id,
                      }}
                    >
                      <div className="row mb-4">
                        <div
                          className="col-md-3 col-sm-2 "
                          style={{ width: "30%" }}
                        >
                          {" "}
                          <img
                            class="img-fluid"
                            src={news.coverImage}
                            alt="Card image cap"
                            style={{ width:"300px",minHeight:"80px", maxHeight:"80px",borderRadius:"10px" }}
                          />
                        </div>
                        <div
                          className="col-md-8 col-sm-8"
                          style={{ width: "70%" }}
                        >
                          {" "}
                          <div>
                            <p class="card-title text-muted m-0" style={{fontSize:"small"}}>{news.date}</p>
                            <p class="card-text popinsTextFont m-0">{news.title}</p>
                            <div
                      dangerouslySetInnerHTML={{ __html: news.text.substring(0,25) + "..." + "<span class='text-primary'>Read more</span>"}}
                      style={{ overflowX: "hidden",fontSize:"small" }}
                    />
                          </div>
                        </div>
                      </div>
                    </Link>

                    /* News Row End */
                  );
                })}
              </div>
            </>
          ) : (
            <div className="col-lg-12 mt-2 mb-3">
              <div class="alert alert-warning text-center" role="alert">
                NEWS & UPDATES NOT AVAILABLE
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
