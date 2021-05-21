import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Homepage/Home";
import About from "./components/pages/Aboutpage/About";
import Contact from "./components/pages/Contactpage/Contact";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;