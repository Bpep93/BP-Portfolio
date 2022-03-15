import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about-me/about-me.component";
import ProjectsPage from "./pages/projects/projects.component";
import Resume from "./pages/resume/resume.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/BP-Portfolio" component={Homepage} />
        <Route exact path="/BP-Portfolio/aboutme" component={AboutPage} />
        <Route exact path="/BP-Portfolio/projects" component={ProjectsPage} />
        <Route exact path="/BP-Portfolio/resume" component={Resume} />
      </Switch>
    </>
  );
}

export default App;
