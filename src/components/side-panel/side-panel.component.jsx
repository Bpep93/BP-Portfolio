import React from "react";

import "./side-panel.styles.scss";

export default function SidePanel({ children, props, link }) {
  // console.log(props, !link);

  const { csLink } = !link ? "" : link;

  return (
    <div className="side-panel">
      <p className="secTitle">{children ? children : null}</p>
      <div className="details">
        {props.length === 1 ? (
          props.map(({ details }) =>
            details.map(({ id, detailTitle, detail }) => (
              <div className="detailRow" key={id || detailTitle}>
                <span className="detailTitle">{detailTitle}</span>
                <span className="detail"> {detail}</span>
              </div>
            ))
          )
        ) : (
          <div>
            {props.map(({ detailTitle, detail }) => {
              return (
                <div className="detailRow" key={detailTitle}>
                  <span className="detailTitle">{detailTitle}</span>
                  <span className="detail"> {detail}</span>
                </div>
              );
            })}
            <a className="projLink" href={csLink}>
              Clink here to view full case study
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
