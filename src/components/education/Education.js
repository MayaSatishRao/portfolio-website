import React from "react"
import "./Education.css"

import CompEducation from "./CompEducation"
import MobileEducation from "./MobileEducation"

const Education = ()=>{
    return (
        <>
         <div className="mob-ed">
            <MobileEducation/>
         </div>
         <div className="comp-ed">
            <CompEducation/>
         </div>
        </>
    )
}

export default Education;
