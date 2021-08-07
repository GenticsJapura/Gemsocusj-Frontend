import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarTwo from "../../components/NavbarTwo";
import Footer from "../../components/Footer";

import "../../App.css";

import "./Product.css";

export default function Product() {
  const [productList, setproductList] = useState([]);
  const [loadingStatus, setloadingStatus] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/product")
      .then((res) => {
        setproductList(res.data);
        setloadingStatus(true);
      })
      .catch((err) => {
        setloadingStatus(true);
      });
  }, []);

  return (
    <div>
      {loadingStatus ? (
        <div>
          {/* Modal */}

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Place Your Order Now
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <a href="tel:+94701853727">
                    <button className="btn btn-warning">
                      {" "}
                      <i className="fa fa-phone fa-lg" />
                      &nbsp; +94 701853727
                    </button>
                  </a>
                  <br />
                  <br />
                  <a href="tel:+94741139521">
                    <button className="btn btn-warning">
                      {" "}
                      <i className="fa fa-phone fa-lg" />
                      &nbsp; +94 741139521
                    </button>
                  </a>
                  <br />
                  <br />
                  <a href="mailto:usjgemsoc@gmail.com?subject=To Buy a Product">
                    <button className="btn btn-warning">
                      <i className="fa fa-envelope fa-lg" />
                      &nbsp; usjgemsoc@gmail.com
                    </button>
                  </a>
                </div>
                {/* <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <NavbarTwo />
          <div className="container">
            <div className="row">
              <div className="col-12 ProductHeader mt-5"></div>
              <div className="ArticleBackground">
                <div className="header-wraperArticle ">
                  <div className="main-infoArticleHeader ">
                    {" "}
                    <br />
                    <br /> <br />
                    <h1 style={{ fontWeight: "bolder" }}>BUY & SELL</h1>
                    <p>
                      Stop going for the easy buck and start producing something
                      with your life. Create, instead of living off the buying
                      and selling of others.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12  mt-5 mb-5">
                <div className="row mb-5">
                  {/* Column One Start*/}
                  {productList.length > 0 ? (
                    productList.map((article) => {
                      return (
                        <div
                          className="col-lg-4 col-md-6  mt-2 mb-3"
                          style={{ borderRadius: "20px" }}
                        >
                          <div class="card" style={{ border: "none" }}>
                            <img
                              src={article.image}
                              class="img-fluid card-img-top ProductImage"
                              alt="..."
                            />
                            <div
                              class="card-body"
                              style={{ background: "#f2f2f2" }}
                            >
                              <h5 class="card-title">{article.title}</h5>
                              <div className="row">
                                <div
                                  className="col-lg-6 col-md-6 col-sm"
                                  style={{
                                    width: "50%",
                                  }}
                                >
                                  <button
                                    className="btn btn-success btn-sm"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                  >
                                    BUY
                                  </button>
                                </div>
                                <div
                                  className="col-lg-6 col-md-6 col-sm"
                                  style={{
                                    width: "50%",
                                  }}
                                >
                                  {" "}
                                  <p class="card-text ">
                                    <span className="PriceTag">
                                      {article.price}LKR
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-lg-12 mt-2 mb-3">
                      <div class="alert alert-warning text-center" role="alert">
                        PRODUCTS NOT AVAILABLE
                      </div>
                    </div>
                  )}

                  {/* Column One End */}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          {" "}
          <ReactLoading
            type="spinningBubbles"
            color="#0088b5"
            className="ReactLoadingComponent"
          />
        </div>
      )}
    </div>
  );
}
