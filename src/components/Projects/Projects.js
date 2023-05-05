import React from "react"

import "./Projects.css";
import Project from "./Project"
import Prizes from "./Prizes";
import Footer from "../footer/Footer";

import { projectDetails, hackathons } from "../../assets/data";
const Projects = ()=>{
    return (
        <div className="projects-relative-container">
      <div className="projects-container">
         <div className="projects-heading">
             <p>People also search for Projects</p>
             <hr/>
         </div>

         <div className="project">
             

             {
                projectDetails.map((pd,idx)=>{
                    return (
                        <>
                        <Project name={pd.name} url={pd.link} details={pd.details} />
                        <hr/>
                        </> 
                    )
                })
             }
         </div>
     <Prizes/>
     <Footer/>
     </div>

     </div>
    )
     
}

export default Projects;
