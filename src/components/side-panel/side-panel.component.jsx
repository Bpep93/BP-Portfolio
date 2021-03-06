import React from "react";
import { motion } from "framer-motion";

import CustomButton from "../../components/custom-btn/custom-btn.component";

import "./side-panel.styles.scss";

const pdfGoogleLink =
  "https://drive.google.com/file/d/1z3ZxZDaclF032OMtqbjMU2RNw16A2as6/view";

export default function SidePanel({ children, props, link }) {
  const { csLink } = !link ? "" : link;

  return (
    <div className="side-panel">
      <p className="secTitle">{children ? children : null}</p>
      <motion.div
        className="details"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.9 }}
      >
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
            <a
              className="projLink"
              href={csLink}
              target="_blank"
              rel="noreferrer"
            >
              <CustomButton inverted>
                {csLink === pdfGoogleLink
                  ? "View Resume"
                  : "View Full Case Study"}
              </CustomButton>
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}
