import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./pages/about/about-me.component";

import "./App.css";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/work" />
        <Route path="/resume" />
        <Route path="/contact" />
      </Switch>
    </>
  );
}

export default App;
