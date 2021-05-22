import React from "react";
import { projectData } from "../../assets/projectData";
import "./style.css";

function Projects(props) {
  return (

    <div className = "section">
      <h2 className = "text-center">{props.title}</h2>
      <hr/>
      <a href= {props.deployed}>
      <img className="rounded mx-auto d-block shrink" alt="project" src={props.image}/>
      </a>
      <h4>Description: </h4>
      <p> 
      {props.description}
        <br></br>
        <a className = "dark underline" href={props.github}>Github Repo</a>
      </p>
    </div>
    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Occupation:</strong> {props.occupation}
    //       </li>
    //       <li>
    //         <strong>Location:</strong> {props.location}
    //       </li>
    //     </ul>
    //   </div>
    //   <span onClick={() => props.removeFriend(props.id)} className="remove">
    //     𝘅
    //   </span>
    // </div>
  );
}

export default Projects;
