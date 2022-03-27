import React, { useLayoutEffect } from "react";

import projInfo from "../../utils/projInfo.json";
import SidePanel from "../../components/side-panel/side-panel.component";
import CSPSR from "../../components/csPSR/csPSR.component";
import CaseStudyImages from "../../components/case-study-images/case-study-images.component";
import "./projects.styles.scss";

export default function ProjectsPage() {
  useLayoutEffect(() => {
    document.body.className = "bodySection";
    const options = document.body.children[1].firstChild.children[1].children;
    for (let i = 0; i < options.length; i++) {
      options[i].className = "option";
    }
  }, []);
  return (
    <div className="projPage">
      {projInfo.map(
        ({ id, details, csLink, title, projImgs, ...otherProps }) => {
          // console.log("id", id, "details", details, csLink, "others", otherProps);
          const link = { csLink };
          return (
            <div className="proj" key={id}>
              <div className="projTitle">
                <span>
                  <strong>{title}</strong>
                  <br /> Case Study
                </span>
              </div>
              <div className="projInfo">
                <SidePanel className="projSide" props={details} link={link} />
                <CSPSR className="projPsr" props={otherProps} />
              </div>
              <CaseStudyImages projImgs={projImgs} title={title} />
            </div>
          );
        }
      )}
    </div>
  );
}
