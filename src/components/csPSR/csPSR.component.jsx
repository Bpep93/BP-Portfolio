import React from "react";
import { motion } from "framer-motion";

import "./csPSR.styles.scss";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function CSPSR({ props }) {
  const { problem, result, solution } = props;

  return (
    <motion.div
      className="psrRows container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="psrRow item"
        variants={item}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.9 }}
      >
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Problem</span>
        </p>
        <p className="psrDetail">{problem}</p>
      </motion.div>
      <motion.div
        className="psrRow item"
        variants={item}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.9 }}
      >
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Solution</span>
        </p>
        <p className="psrDetail">{result}</p>
      </motion.div>
      <motion.div
        className="psrRow item"
        variants={item}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.9 }}
      >
        <p className="psrTitle">
          The <br />
          <span className="strongTitle">Result</span>
        </p>
        <p className="psrDetail">{solution}</p>
      </motion.div>
    </motion.div>
  );
}
