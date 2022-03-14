import React from "react";

import aboutMe from "../../utils/aboutMeData.json";

import "./side-panel.styles.scss";

export default function SidePanel({ children }) {
  console.log(children);
  return (
    <div className="side-panel">
      <p className="secTitle">{children}</p>
      <div className="details">
        {aboutMe.map((section, index) => (
          <section id={index}>
            <span className="detailTitle">{section.title}</span>
            <span className="detail"> {section.detail}</span>
          </section>
        ))}
      </div>
    </div>
  );
}
