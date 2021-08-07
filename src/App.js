import "./App.css";
import React from "react";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NavbarTwo from "./components/NavbarTwo";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/AboutComponent/AboutUs";
import Contactsection from "./components/ContactComponent/ConatctUs";
import CarouselDemo from "./components/carousel";
import Footer from "./components/Footer";
import SocietyInfo from "./components/SocietyInfoComponent/SocietyInfo";
import Articles from "./components/ArticleComponent/Articles";
import MemberLogin from "./components/MemberComponent/MemberLoginComponent/MemberLogin";
import SingleArticle from "./components/ArticleComponent/SingleArticle";
import AddArticle from "./components/MemberComponent/MemberArticleComponent/AddArticle";
import AdminLogin from "./components/AdminComponent/AdminLoginComponent/AdminLogin";
import AdminDashboard from "./components/AdminComponent/AdminDashboard/AdminDashboard";
import MemberDashboard from "./components/MemberComponent/MemberDashboardComponent/ArticleScreens/DashboardHome";
import EditArticle from "./components/MemberComponent/MemberDashboardComponent/ArticleScreens/EditArticle";
import AdminAddMember from "./components/AdminComponent/AdminDashboard/AdminAddMember";
import AdminEditMember from "./components/AdminComponent/AdminDashboard/AdminEditMember";
import AdminAddProduct from "./components/AdminComponent/AdminDashboard/AdminAddProduct";
import AdminEditProduct from "./components/AdminComponent/AdminDashboard/AdminEditProduct";
import Product from "./components/ProductComponent/Product";
import News from "./components/NewsComponent/News";
import AdminAddNews from "./components/AdminComponent/AdminDashboard/AdminAddNews";
import SingleNews from "./components/NewsComponent/SingleNews";
import AdminEditNews from "./components/AdminComponent/AdminDashboard/AdminEditNews";
import AdminForgotPassword from "./components/AdminComponent/AdminLoginComponent/AdminForgotPassword";
function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Route path="/" exact>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 60,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 8,
                      color: "#f9ab00",
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100,
                    },
                  },
                  opacity: {
                    value: 0.4,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 2,
                      size_min: 0.1,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable_auto: true,
                    distance: 100,
                    color: "#f9ab00",
                    opacity: 1,
                    width: 1,
                    condensed_mode: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 600,
                    },
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200,
                    },
                  },
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: false,
                    },
                    onclick: {
                      enable: false,
                    },
                    resize: true,
                  },
                },
                retina_detect: true,
              }}
            />
            <Navbar />
            <Header />
            <CarouselDemo />
            <News />
            <SocietyInfo />
            <AboutUs />
            <Contactsection />
            <Footer />
          </Route>
          <Route path="/articles" exact>
            <NavbarTwo />
            <Articles />
            <Footer />
          </Route>
          <Route path="/buyandsell" exact>
            <Product />
          </Route>
          <Route path="/login" exact>
            <NavbarTwo />
            <MemberLogin />
          </Route>

          <Route path="/forgotpassword" exact component={AdminForgotPassword} />

          <Route path="/adminlogin" exact>
            <NavbarTwo />
            <AdminLogin />
          </Route>

          <Route path="/admin" exact>
            <AdminDashboard />
          </Route>

          <Route path="/article/:id" exact component={SingleArticle} />
          <Route path="/addarticle" exact component={AddArticle} />
          <Route path="/member" exact component={MemberDashboard} />
          <Route path="/editarticle" exact component={EditArticle} />
          <Route path="/addmember" exact component={AdminAddMember} />
          <Route path="/editmember" exact component={AdminEditMember} />
          <Route path="/addproduct" exact component={AdminAddProduct} />
          <Route path="/editproduct/:id" exact component={AdminEditProduct} />
          <Route path="/addnews" exact component={AdminAddNews} />
          <Route path="/news/:id" exact component={SingleNews} />
          <Route path="/editnews/:id" exact component={AdminEditNews} />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
