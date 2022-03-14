import React from "react";

import bulletData from "../../utils/bulletData.json";

import "./about-me-bullets.styles.scss";

export default function BulletList() {
  return (
    <div className="list">
      {bulletData.map((bullet, index) => (
        <div className="row" key={index}>
          <div
            className="bulletTitle"
            style={{ backgroundColor: bullet.bgColor }}
          >
            {bullet.title}
          </div>
          <div className="bulletSection">{bullet.detail}</div>
        </div>
      ))}
    </div>
  );
}
