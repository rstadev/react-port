import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import aboutpic from "./File_000.jpeg"

function Home() {

  
  return (
    // <div>
    //   <h1>Home Page</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
    //     varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
    //     Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
    //     imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
    //     ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
    //     elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
    //     consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
    //     malesuada fames ac ante ipsum primis in faucibus.
    //   </p>
    // </div>
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>About Me</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
//     <link rel="stylesheet" type="text/css" href="./assets/style.css">

// </head>

// <body>
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div class="container-fluid">
//             <a class="navbar-brand">Conner Saxton</a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
//                 aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div class="navbar-nav">
//                     <a class="nav-link active" aria-current="page" href="index.html">Home</a>
//                     <a class="nav-link" href="./contact.html">Contact</a>
//                     <a class="nav-link" href="./portfolio.html">Portfolio</a>
//                 </div>
//             </div>
//         </div>
//     </nav>
<section>
<div id="homeSection">
  <div className = "text-center">
    <h1>About Me</h1>
    <hr/>
  </div>
  <img className="rounded mx-auto d-block bio-image" src={aboutpic} alt="bio" />
    <hr/>
  <p className="floatedtext"> Hi! My name is Conner Saxton and this is my Homepage! I   am currently a student of
    Chemistry at Georgia State University and enrolled in the Full Stack Development course with the Georgia
    Institute of Technology. This portfolio was created as a part of a project in the Full Stack Development
    course. <br></br>Please, click on 
    {/* <a class="dark underline" href="contact.html">
      Contact Me
    </a>  */}
    <Link to="/contact" role="button" className="btn btn-link">
        Contact Me
    </Link>
    
    in either the navBar or in this paragraph to get into contact with me on one of my accounts.
  </p>
</div>
</section>


  );
};



export default Home;
