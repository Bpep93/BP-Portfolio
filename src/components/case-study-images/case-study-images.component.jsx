import React from "react";

import "./case-study-images.styles.scss";

const CaseStudyImages = ({ projImgs, title }) => {
  return (
    <div className="images-div">
      {projImgs.map(({ img, id }) => {
        return (
          <img
            key={id}
            src={process.env.PUBLIC_URL + img}
            alt={title + " Case Study Screenshot"}
            className="mappedImg"
          />
        );
      })}
    </div>
  );
};

export default CaseStudyImages;
