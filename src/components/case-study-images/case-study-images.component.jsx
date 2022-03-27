import React, { useState, useEffect } from "react";

import "./case-study-images.styles.scss";

const CaseStudyImages = ({ projImgs, title }) => {
  return (
    <div className="images-div">
      {projImgs.map(({ img, id }) => {
        console.log(process.env.PUBLIC_URL + img);
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
