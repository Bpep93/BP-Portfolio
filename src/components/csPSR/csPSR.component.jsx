import React from "react";

import "./csPSR.styles.scss";

export default function CSPSR({ props }) {
  console.log(props);
  const { problem, result, solution } = props;

  console.log(problem, result, solution);
  return (
    <div className="psrRows">
      <div className="psrRow">
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Problem</span>
        </p>
        <p className="psrDetail">{problem}</p>
      </div>
      <div className="psrRow">
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Solution</span>
        </p>
        <p className="psrDetail">{result}</p>
      </div>
      <div className="psrRow">
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Result</span>
        </p>
        <p className="psrDetail">{solution}</p>
      </div>
    </div>
  );
}
