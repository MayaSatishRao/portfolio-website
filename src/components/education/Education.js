import React from "react"
import "./Education.css"

const Education = ()=>{
    return (
        <div className="education-work">

          <div className="education">
          <div className="ed">
            <p className="ed-link">https://education/<span style={{fontWeight:"bold"}}>R V COLLEGE OF ENGINEERING</span></p>
            <p className="ed-name">Bachelor of Engineering in Computer Science</p>
            <p className="ed-link">Bengaluru,India <span style={{fontWeight:"bold"}}>Dec,2020 - June,2024</span></p>
          </div>

          <div className="work">
            <p className="ed-link">https://work-experience/<span style={{fontWeight:"bold"}}>INTERNSHIPS</span></p>
            <p className="ed-name">Project Intern at IISc</p>
            <p className="ed-link">Bengaluru,India <span style={{fontWeight:"bold"}}>Oct,2022 - Jan,2023</span></p>

            <ul className="work-details">
                <li>I worked at Computational and Intelligence Lab (CINT Lab), Department of Aerospace Engineering, IISc as a Project Intern</li>
                <li>The tech stack used in the internship was React and React Native.</li>
                <li>Responsible for providing UI to a research project which took inputs from the user and had to display the results from the machine learning model graphically</li>
                <li>Built a data collection app using React Native</li>
            </ul>
          </div>
          </div>

          <div classname="about-section" >
              <div className="about">
                 <p className="about-heading">Maya S Rao</p>
                 <p>I am a tech enthusiast, a Frontend Developer and a beginner Competitive programmer.
                    I love to participate in hackathons and coding contests. Besides tech, I love painting. 
                 </p>
                 <p className="skill-text"><span style={{fontWeight:"bold",color:"black", marginRight:"0.3rem"}}>Programming Languages:</span>Java, Javascript, Python, C</p>
                 <p className="skill-text"><span style={{fontWeight:"bold",color:"black", marginRight:"0.3rem"}}>Frontend Tech:</span>HTML, CSS, Javascript, React, React Native</p>
                 <p className="skill-text"><span style={{fontWeight:"bold",color:"black", marginRight:"0.3rem"}}>Backend Tech:</span>Django, Node.js</p>

                  <div classname="profiles" style={{marginTop:"3rem"}}>
                     <p className="about-heading">Profiles</p>
                     <div className="profile-images">
                          <div className="profile">
                              <div className="profile-image">
                                 <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"/>
                              </div>
                              <a href="https://www.linkedin.com/in/maya-s-rao/">LinkedIn</a>
                          </div>
                          <div className="profile">
                              <div className="profile-image">
                                 <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                              </div>
                              <a href="https://github.com/MayaSatishRao/">Github</a>
                          </div>
                          <div className="profile">
                              <div className="profile-image">
                                 <img src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png"/>
                              </div>
                              <a href="https://leetcode.com/mayasrao25/">Leetcode</a>
                          </div>
                     </div>
                  </div>
               </div>    

               
          </div>


        </div>
    )
}

export default Education;