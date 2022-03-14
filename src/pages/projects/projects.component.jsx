import React, { useLayoutEffect } from "react";

import projInfo from "../../utils/projInfo.json";
import SidePanel from "../../components/side-panel/side-panel.component";
import CSPSR from "../../components/csPSR/csPSR.component";

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
      {projInfo.map(({ id, details, ...otherProps }) => {
        console.log("id", id, "details", details, "others", otherProps);
        return (
          <div className="proj" key={id}>
            <SidePanel props={details} />
            <CSPSR props={otherProps} />
          </div>
        );
      })}
    </div>
  );
}
