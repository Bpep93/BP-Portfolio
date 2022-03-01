import React, { useEffect } from "react";

import "./homepage.styles.scss";

export default function Homepage() {
  useEffect(() => {
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
      </div>
      <div className="side-img">
        <img src="" alt="" />
      </div>
    </>
  );
}
