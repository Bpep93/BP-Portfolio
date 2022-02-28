import React from "react";

import "./portfolio-img.styles.scss";

const me = process.env.PUBLIC_URL + "/images/BPHeadshot.jpg";

export default function PortFolioImg() {
  return <img src={me} alt="Briana Pepper" className="bpHeadshot" />;
}
