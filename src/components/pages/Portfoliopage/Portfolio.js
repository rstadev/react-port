import React, { Component } from "react";
import Projects from "../../Projectscard/Projects";
import { projectData } from "../../../assets/projectData.js";
import "./style.css";

class Portfolio extends Component {
  state = {
    projectData
  };



  render() {

    console.log(projectData)

    return (

    <section className = "container padding-bottom">
        <h1 className= "text-center">Portfolio</h1>

        {this.state.projectData.map(project => (
          <Projects
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            deployed={project.deployed}
            github={project.github}
          />
        ))}
          {/* <Projects

          /> */}
    </section>

  )
  }
};

export default Portfolio;
