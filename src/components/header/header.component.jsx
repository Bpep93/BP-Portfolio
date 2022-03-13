import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/BP-Logo.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/aboutme">
        About
      </Link>
      <Link className="option" to="/projects">
        Projects
      </Link>
      <Link className="option" to="/resume">
        Resume
      </Link>
    </div>
  </div>
);

export default Header;
