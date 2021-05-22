import React from "react";
import Pdf from "./resume.pdf"
import "./style.css"

function Contact(props) {
  return (
    <section className = "contactSection text-center">
    <h1 className = "underline">Contact Me</h1>

    <div className = "text-center">
            <a className = "btn-primary contactDivs removeUnderline" href="https://github.com/rstadev">Github</a>
            <a className = "btn-primary contactDivs removeUnderline" href="https://www.linkedin.com/feed/">LinkedIn</a>
            
            <p className= "email">Email me at nukasine@gmail.com
                <br></br>
                Phone Number: XXX-XXX-XXXX
            </p>
        
    </div>
    <div  className = "text-center contactDivs">
      <h3 className = "underline">Looking to hire? Click below for my online resume!</h3>
      <a className = "btn-primary removeUnderline" href={Pdf}>My Resume!</a>
    </div>
    </section>
  );
}

export default Contact;
