import React from "react";

import "./side-panel.styles.scss";

export default function SidePanel({ children, props }) {
  console.log(props);
  return (
    <div className="side-panel">
      <p className="secTitle">{children ? children : null}</p>
      <div className="details">
        {props.map(({ details }) =>
          details.map(({ id, detailTitle, detail }) => (
            <div className="detailRow" key={id || detailTitle}>
              <span className="detailTitle">{detailTitle}</span>
              <span className="detail"> {detail}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
