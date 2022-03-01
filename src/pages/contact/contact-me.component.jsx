import React, { useEffect } from "react";

import "./contact-me.styles.scss";

export default function ContactMe() {
  useEffect(() => {
    document.body.className = "bodySection";
    const options = document.body.children[1].firstChild.children[1].children;
    for (let i = 0; i < options.length; i++) {
      options[i].className = "option";
    }
  }, []);
  return <></>;
}
