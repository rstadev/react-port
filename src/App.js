import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Homepage/Home";
import Portfolio from "./components/pages/Portfoliopage/Portfolio";
import Contact from "./components/pages/Contactpage/Contact";
import Footer from "./components/Footer";
// import Project from "./components/pages/Project";
// import backgroundimg from "./garden.jpg"

function App() {
  return (
      // <div style={{ background: `url(${backgroundimg})`}}>
    <Router >
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/project" component={Project} /> */}
        <Route exact path="/contact" component={Contact} />
        <Footer />
    </Router>
      // </div>
  );
}

export default App;
