import React from "react";


function Projects() {
  return (

    <div className = "section">
      <h2 className = "text-center">Quisa Project</h2>
      <hr/>
      <a href= "https://wildnei.github.io/quisa-project/">
      <img className="rounded mx-auto d-block shrink" src="{props.image}" />
      </a>
      <h4>Description: </h4>
      <p> 
        This was the first collaborative project I was tasked with during the Full Stack Development course with Georgia Tech. I was required to pair up with three different group members to build an app that relied upon a web A.P.I to function. We all contributed to aspects of this app, but I was specifically tasked with incorporating local storage to it. You can an example of this at the bottom of the app, in the Past Search box. You can find a deployed version of this project by clicking on the picture above. Find the repo itself by clickling the following link: 
        <br></br>
        <a className = "dark underline" href="https://github.com/wildnei/quisa-project">Github Repo</a>
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
