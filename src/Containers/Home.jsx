import React, { useEffect } from "react";
import "./Home.css";
import hero from "../assets/img/why-us.png";
import { Link } from "react-router-dom";

export default function Home({ showSidebar1 }) {
  useEffect(() => {
    showSidebar1();
  }, []);

  return (
    <div className="home">
      <div className="home-container" id="hero">
        <div className="left-conatiner">
          <h1>Welcome To</h1>
          <h1 className="cyc">CodeYourCareer</h1>
          <h2>
            Change <span>Choose</span> Conquer
          </h2>
          <div className="home-btns">
            <Link to="/step1/Step_1_1a_Python_Foundations_01" className="btns">
              Get Started
            </Link>
            <a
              href="https://www.codeyourcareer.com/"
              className="btns"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="right-container">
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src={hero} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
