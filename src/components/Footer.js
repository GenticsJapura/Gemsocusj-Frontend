import React from "react";
import "./footer.css";
import Logo from "./AboutComponent/img/logoWhite.png";

function Footer() {
  return (
    // <div className="footer" style={{ overflowX: "hidden" }}>
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       <div className="col-4 offset-1 col-sm-2">
    //         <br />

    //         <ul className="list-unstyled">
    //           <li>
    //             <a class="nav-link js-scroll-trigger footerLink" href="#home">
    //               Home <span className="sr-only">(current)</span>
    //             </a>
    //           </li>
    //           <li>
    //             <a class="nav-link js-scroll-trigger footerLink" href="#about">
    //               About us
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               class="nav-link js-scroll-trigger footerLink"
    //               href="#contact"
    //             >
    //               Contact us
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-7 col-sm-5">
    //         <h5>Our Address</h5>
    //         <address>
    //           University of Sri jayewardenepura
    //           <br />
    //           Gangodawila, Nugegoda
    //           <br />
    //           Sri Lanka
    //           <br />
    //           <i className="fa fa-phone fa-lg" />: +94 701853727
    //           <br />
    //           <i className="fa fa-fax fa-lg" />: +94 741139521
    //           <br />
    //           <i className="fa fa-envelope fa-lg" />:{" "}
    //           <a href="mailto:confusion@food.net" className="footerLink">
    //             usjgemsoc@gmail.com
    //           </a>
    //         </address>
    //       </div>
    //       <div className="col-12 col-sm-4 align-self-center">
    //         <div className="text-center">
    //           <a className="btn btn-social-icon btn-google" href="">
    //             <i className="fa fa-google-plus" />
    //           </a>
    //           <a
    //             className="btn btn-social-icon btn-facebook"
    //             href="https://www.facebook.com/Gemsocusj01/"
    //           >
    //             <i class="fab fa-facebook-square fa-2x socialIcon socialIconFacebook"></i>
    //           </a>
    //           <a
    //             className="btn btn-social-icon btn-linkedin"
    //             href="https://www.linkedin.com/in/gemsoc-usj-26009b201"
    //           >
    //             <i class="fab fa-linkedin fa-2x socialIcon socialIconLinkedin"></i>
    //           </a>
    //           <a
    //             className="btn btn-social-icon btn-twitter"
    //             href="https://twitter.com/GEMSOC_USJ?s=09"
    //           >
    //             <i class="fab fa-twitter fa-2x socialIcon socialIconTwitter"></i>
    //           </a>
    //           <a className="btn btn-social-icon btn-google" href="">
    //             <i className="fa fa-youtube socialIcon" />
    //           </a>
    //           <a className="btn btn-social-icon" href="mailto:">
    //             <i className="fa fa-envelope-o" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row justify-content-center"></div>
    //   </div>
    // </div>

    <footer className="footer-section">
      <div className="footer-section-container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/">
                    <img
                      src={Logo}
                      className="img-fluid"
                      width="150px"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    An academic association functioning
                    among young undergraduates with the aim of extending
                    transcending excellence and passion in propagating knowledge
                    among the society about the fields of Genetics and Molecular
                    Biology.
                  </p>
                  <div className="row socialMediaRow mb-3">
                    <div className="col-lg-1 col-md-1 col-sm-1 socialMediaCol">
                      <a
                        href="https://www.facebook.com/Gemsocusj01/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="bi bi-facebook socialmediaIcons text-white" />
                      </a>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 socialMediaCol">
                      <a
                        href="https://www.linkedin.com/in/gemsoc-usj-26009b201"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin socialmediaIcons text-white" />
                      </a>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 socialMediaCol">
                      <a
                        href="https://twitter.com/GEMSOC_USJ?s=09"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="bi bi-instagram socialmediaIcons text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/#contact">Contact us</a>
                  </li>
                  <li>
                    <a href="#news">News</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="/articles">Articles</a>
                  </li>
                  <li>
                    <a href="/buyandsell">Buy & Sell</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Get the latest updates and information regarding Genetics and Molecular Biology Society right to your inbox!</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fa fa-envelope" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 text-center">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2021, All Right Reserved&nbsp;
                  <a href="/">Genetics and Molecular Biology Society of University of
                    Sri Jayewardenepura</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
