import React, { useLayoutEffect } from "react";

import SidePanel from "../../components/side-panel/side-panel.component";

import resumeInfo from "../../utils/resumeData.json";

import pdfResume from "../../utils/Bri-Pepper-Resume.pdf";

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
    <div className="resume-layout">
      {resumeInfo.map(({ title, details, projImgs, csLink }) => {
        const link = { csLink };
        return (
          <div className="resume">
            <div className="resume-title">
              <span>
                <strong>{title}</strong> & Contact
              </span>
            </div>
            <div className="resumeInfo">
              <SidePanel className="projSide" props={details} link={link} />
              <img
                className="resumeImg"
                src={process.env.PUBLIC_URL + projImgs[0].imgLocation}
                alt={projImgs[0].altTag}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
