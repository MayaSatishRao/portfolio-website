import React from "react"

import "./Projects.css";

const Projects = ()=>{
    return (
        <div className="projects-relative-container">
      <div className="projects-container">
         <div className="projects-heading">
             <p>People also ask</p>
             <hr/>
         </div>

         <div className="project">
             <div className="project-name">
                <p>Projects</p>
                <p className="downward-arrow">{">"}</p>
             </div>
             <ul className="project-details">
                <li>Tech Stack used is React, Django, CNN, SQL, MongoDB</li>
                <li>Accident is detected from CCTV footage using the VGG16 model.</li>
                <li>If an accident is detected, then the accident detected frame is uploaded to the MongoDB database, and
details of the accident such as date, time, latitude, and longitude is stored in the SQLLite database</li>
                 <li>Registered emergency services can see the latest and previous alerts. They can also add details of
victims and vehicles involved in the accident</li>
             </ul>
             <a href="https://github.com/MayaSatishRao/Accident-Detection-and-Assistance-System" className="project-link">
              <p className="ed-link">https://github.com/MayaSatishRao/Accident-Detection-and-Assistance-System</p>
              <p className="ed-name">Accident Detection and Assistance System</p>
             </a>
         </div>
     </div>
     </div>
    )
     
}

export default Projects;
