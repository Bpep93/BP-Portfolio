import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import CustomButton from "../../components/custom-btn/custom-btn.component";
import PortfolioImg from "../../components/portfolio-img/portfolio-img.component";

import "./homepage.styles.scss";

export default function Homepage() {
  const history = useHistory();

  useLayoutEffect(() => {
    document.body.className = "bodyHomepage";
    const options = document.body.children[1].firstChild.children[1].children;
    for (let i = 0; i < options.length; i++) {
      options[i].className = "option inverted";
    }
  }, []);
  return (
    <>
      <div className="intro">
        <h1 className="intro-title">
          Hello, I’m Bri Pepper, a UX/UI Designer based in Denver, CO
        </h1>
        <p className="intro-para">
          Feel free to take a look at my work or get to know a little more about
          my process and how I make a difference in the lives of everyday users.
        </p>
        <div className="btns">
          <CustomButton
            onClick={() => {
              history.push("/BP-Portfolio/projects");
            }}
            type="button"
          >
            See my projects
          </CustomButton>
          <CustomButton
            inverted
            onClick={() => {
              history.push("/BP-Portfolio/resume");
            }}
            type="button"
          >
            Contact me
          </CustomButton>
        </div>
      </div>
      <div className="side-img">
        <PortfolioImg />
        <p className="img-para">
          I am a UX/UI Designer residing in Denver, Colorado with a certificate
          from the University of Denver. Using the Design process, Empathy,
          Define, Ideate, Prototype, and Test to build out designs that create a
          more functional and enjoyable experience.
        </p>
      </div>
    </>
  );
}
