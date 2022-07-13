import React from "react";
import { motion } from "framer-motion";

import "./portfolio-img.styles.scss";

const me = process.env.PUBLIC_URL + "/images/BPHeadshot.jpg";

export default function PortfolioImg() {
  return (
    <motion.img
      src={me}
      alt="Briana Pepper"
      className="bpHeadshot"
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.8,
      }}
    />
  );
}
