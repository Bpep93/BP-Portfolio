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
      <Link className="option" to="/work">
        Work
      </Link>
      <Link className="option" to="/resume">
        Resume
      </Link>
      <Link className="option" to="/contact">
        Contact Me
      </Link>
    </div>
  </div>
);

export default Header;
