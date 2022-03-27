import React from "react";

import CustomButton from "../../components/custom-btn/custom-btn.component";

import "./side-panel.styles.scss";

export default function SidePanel({ children, props, link }) {
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
            <a className="projLink" href={csLink} target="_blank">
              <CustomButton inverted>
                {csLink ===
                "https://docs.google.com/document/d/1PziuB3phmstx4OxUqmA1u_pZmF_dvwPhk0WOAC-rEEE/edit?usp=sharing"
                  ? "View Resume"
                  : "View Full Case Study"}
              </CustomButton>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
