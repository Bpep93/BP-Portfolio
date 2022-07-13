import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import CustomButton from "../../components/custom-btn/custom-btn.component";
import PortfolioImg from "../../components/portfolio-img/portfolio-img.component";

import "./homepage.styles.scss";

const line1 =
  "I am a UX/UI Designer residing in Denver, Colorado with a certificate from the University of Denver. Using the Design process, Empathy, Define, Ideate, Prototype, and Test to build out designs that create a more functional and enjoyable experience.";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

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

export default function Homepage() {
  const history = useHistory();

  useLayoutEffect(() => {
    document.body.className = "bodyHomepage";
    const options = document.body.children[1].firstChild.children[1].children;
    for (let i = 0; i < options.length; i++) {
      options[i].className = "option inverted";
    }
  }, []);
  return (
    <>
      <motion.div
        className="intro container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="intro-title item" variants={item}>
          Hello, I’m Bri Pepper, a UX/UI Designer based in Denver, CO
        </motion.h1>
        <motion.p className="intro-para item" variants={item}>
          Feel free to take a look at my work or get to know a little more about
          my process and how I make a difference in the lives of everyday users.
        </motion.p>
        <motion.div className="btns" variants={item}>
          <CustomButton
            onClick={() => {
              history.push("/BP-Portfolio/projects");
            }}
            type="button"
          >
            See my projects
          </CustomButton>
          <CustomButton
            inverted
            onClick={() => {
              history.push("/BP-Portfolio/resume");
            }}
            type="button"
          >
            Contact me
          </CustomButton>
        </motion.div>
      </motion.div>
      <div className="side-img">
        <PortfolioImg />
        <motion.p
          className="img-para"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.p>
      </div>
    </>
  );
}
