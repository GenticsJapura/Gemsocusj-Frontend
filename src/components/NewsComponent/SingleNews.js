import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import NavbarTwo from "../NavbarTwo";
import Footer from "../Footer";
// import SideNavArticleList from "./SideNavArticleList";
import "./News.css";

export default function SingleNews(props) {
  const [title, settitle] = useState();
  const [coverImage, setcoverImage] = useState();
  const [text, settext] = useState();
  const [loadingStatus, setloadingStatus] = useState(false);
  const [newsList, setnewsList] = useState([]);

  useEffect(() => {
    if (!props.match.params.id) {
      window.location = "/";
    }

    axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "/api/news/" + props.match.params.id
      )
      .then((res) => {
        settitle(res.data.title);
        setcoverImage(res.data.coverImage);
        settext(res.data.text);
        setloadingStatus(true);
      })
      .catch((err) => {
        setloadingStatus(true);
      });

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/news")
      .then((res) => {
        setnewsList(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      {loadingStatus ? (
        <div>
          <NavbarTwo />
          <div className="ArticleBackground">
            <div className="header-wraperArticle ">
              <div className="main-infoArticleHeader ">
                {" "}
                <br />
                <h1 style={{ fontWeight: "bolder" }}>News</h1>
                <p>
                  Genetics is about how information is stored and transmitted
                  between generations ~John Maynard Smith
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="container mt-5 mb-5">
              <div className="row">
                {" "}
                <div className="col-lg-8 mb-4">
                  <img src={coverImage} id="SingleArticleCoverImage" />
                  <br />
                  <br />
                  <h3>{title}</h3>
                  <div className="richText">
                    <div
                      dangerouslySetInnerHTML={{ __html: text }}
                      style={{ overflowX: "hidden" }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <h5>Related News</h5>{" "}
                  {newsList.slice(0, 5).map((news) => {
                    return (
                      /* News Row Start */
                      <a href={"/news/" + news.id}>
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
                              style={{ width:"300px",minHeight:"60px", maxHeight:"60px",borderRadius:"10px" }}
                            />
                          </div>
                          <div
                            className="col-md-8 col-sm-8"
                            style={{ width: "70%" }}
                          >
                            {" "}
                            <div>
                            <p class="card-title text-muted m-0" style={{fontSize:"small"}}>{news.date}</p>
                            <p class="card-text popinsTextFont m-0" style={{fontSize:"small"}}>{news.title}</p>
                            {/* <div
                      dangerouslySetInnerHTML={{ __html: news.text.substring(0,10) + "..." + "<span class='text-primary'>Read more</span>"}}
                      style={{ overflowX: "hidden",fontSize:"small" }}
                    /> */}
                          </div>
                          </div>
                        </div>
                      </a>

                      /* News Row End */
                    );
                  })}
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
            height={"5%"}
            width={"5%"}
          />
        </div>
      )}
    </div>
  );
}
