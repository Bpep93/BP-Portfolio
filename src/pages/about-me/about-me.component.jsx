import React, { useLayoutEffect } from "react";

import SidePanel from "../../components/side-panel/side-panel.component";
import BulletList from "../../components/about-me-bullets/about-me-bullets.component";

import "./about-me.styles.scss";

export default function AboutPage() {
  useLayoutEffect(() => {
    document.body.className = "bodySection";
    const options = document.body.children[1].firstChild.children[1].children;
    for (let i = 0; i < options.length; i++) {
      options[i].className = "option";
    }
  }, []);
  return (
    <>
      <div className="aboutPage">
        <SidePanel
          children={
            <span>
              <strong>About</strong> Me
            </span>
          }
        />
        <BulletList />
      </div>
    </>
  );
}
