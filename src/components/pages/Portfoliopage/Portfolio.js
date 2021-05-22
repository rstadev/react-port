import React, { Component } from "react";
import Projects from "../../Projectscard/Projects";
import { projectData } from "../../Projectscard/projectData.js"
import "./style.css";

class Portfolio extends Component {
  state = {
    projectData
  };



  render() {
    return (

    <section className = "container">
        <h1 className= "text-center">Portfolio</h1>
        <div className = "section">
            <h2 className = "text-center">Quisa Project</h2>
            <hr/>
            <a href= "https://wildnei.github.io/quisa-project/">
            <img className="rounded mx-auto d-block shrink" src="assets/misc/quisaPage.gif" />
            </a>
            <h4>Description: </h4>
            <p> 
                This was the first collaborative project I was tasked with during the Full Stack Development course with Georgia Tech. I was required to pair up with three different group members to build an app that relied upon a web A.P.I to function. We all contributed to aspects of this app, but I was specifically tasked with incorporating local storage to it. You can an example of this at the bottom of the app, in the Past Search box. You can find a deployed version of this project by clicking on the picture above. Find the repo itself by clickling the following link: 
                <br></br>
                <a className = "dark underline" href="https://github.com/wildnei/quisa-project">Github Repo</a>
            </p>
        </div>

        {this.state.projectData.map(project => (
          <Projects
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}s
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
