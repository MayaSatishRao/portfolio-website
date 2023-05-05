import React, {useState} from "react"

import "./Project.css"

const Project = ({name,url,details})=>{

    const [classString, setClassString] = useState("hide");
    const showDetails = ()=>{
           if(classString === "hide")
             setClassString("show");
           else
             setClassString("hide");
    }

    return (
          <>
            <div className="project-name">
                <p>{name}</p>
                <p className="downward-arrow" onClick={showDetails}>{">"}</p>
             </div>
             <div className={classString}>
            <ul >
               {
                  details.map(d=><li>{d}</li>)
               }
             </ul>
             <a href={url} className="project-link">
              <p className="ed-link">{url}</p>
              <p className="ed-name">{name}</p>
             </a>
             </div>
          </>
    )
}

export default Project;