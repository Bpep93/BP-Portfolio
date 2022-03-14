import React from "react";

import "./csPSR.styles.scss";

export default function CSPSR() {
  return (
    <div className="psrRows">
      <div className="psrRow">
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Problem</span>
        </p>
        <p></p>
      </div>
      <div className="psrRow">
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Solution</span>
        </p>
        <p></p>
      </div>
      <div className="psrRow">
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Result</span>
        </p>
        <p></p>
      </div>
    </div>
  );
}
