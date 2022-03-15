import React, { useLayoutEffect } from "react";

import pdfResume from "../../utils/BriPepperResume.pdf";

import "./resume.styles.scss";

export default function Resume() {
  useLayoutEffect(() => {
    document.body.className = "bodySection";
    const options = document.body.children[1].firstChild.children[1].children;
    for (let i = 0; i < options.length; i++) {
      options[i].className = "option";
    }
  }, []);
  return (
    <iframe
      className="resume"
      src={pdfResume}
      frameBorder="0"
      scrolling="auto"
      title="Bri Pepper Resume"
      allow="fullscreen"
      align
    ></iframe>
  );
}
