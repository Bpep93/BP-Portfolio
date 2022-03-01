import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import WorkPage from "./pages/work/work.component";
import ContactMe from "./pages/contact/contact-me.component";
import Resume from "./pages/resume/resume.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    </>
  );
}

export default App;
