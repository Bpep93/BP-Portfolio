import React, { useLayoutEffect } from "react";

import "./resume.styles.scss";

export default function Resume() {
  useLayoutEffect(() => {
    document.body.className = "bodySection";
    const options = document.body.children[1].firstChild.children[1].children;
    for (let i = 0; i < options.length; i++) {
      options[i].className = "option";
    }
  }, []);
  return <></>;
}
