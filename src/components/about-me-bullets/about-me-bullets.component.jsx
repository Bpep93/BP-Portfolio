import React from "react";
import { motion } from "framer-motion";

import bulletData from "../../utils/bulletData.json";

import "./about-me-bullets.styles.scss";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
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

export default function BulletList() {
  return (
    <motion.div
      className="list container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {bulletData.map((bullet, index) => (
        <motion.div
          className="row item"
          key={index}
          variants={item}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="bulletTitle"
            style={{ backgroundColor: bullet.bgColor }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              default: { duration: 0.75 },
            }}
          >
            {bullet.title}
          </motion.div>
          <div className="bulletSection">{bullet.detail}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
