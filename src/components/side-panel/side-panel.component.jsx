import React from "react";

import CustomButton from "../../components/custom-btn/custom-btn.component";

import "./side-panel.styles.scss";

const pdfGoogleLink =
  "https://drive.google.com/file/d/1z3ZxZDaclF032OMtqbjMU2RNw16A2as6/view";

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
                {csLink === pdfGoogleLink
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
