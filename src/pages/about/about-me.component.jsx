import React, { useEffect } from "react";

import PortFolioImg from "../../components/portfolio-img/portfolio-img.component";

import "./about-me.styles.scss";

export default function AboutMe() {
  useEffect(() => {
    document.body.className = "bodySection";
    const options = document.body.children[1].firstChild.children[1].children;
    for (let i = 0; i < options.length; i++) {
      options[i].className = "option";
    }
  }, []);
  return (
    <>
      <PortFolioImg />
      <div className="about-section">
        <h2 className="intro-about">Hi, I'm Bri, nice to meet you</h2>
        <div className="about-p">
          I am a UX/UI Designer residing in Denver, Colorado with a certificate
          from the University of Denver. Design has always been second nature to
          me, from my joy of freelance art to becoming a professional cake
          designer, I’ve always had a steady passion to create. Along wiht my
          experience in the design realm, I’ve spebt some time in the health
          care and have developed the ability to really empathize with
          indidviduals and their daily struggles. It’s only natural that I found
          my passion for UX/UI Design.
        </div>
      </div>
    </>
  );
}
