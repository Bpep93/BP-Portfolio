import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/BP-Logo.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/BP-Portfolio">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/BP-Portfolio/aboutme">
        About
      </Link>
      <Link className="option" to="/BP-Portfolio/projects">
        Projects
      </Link>
      <Link className="option" to="/BP-Portfolio/resume">
        Resume
      </Link>
    </div>
  </div>
);

export default Header;
