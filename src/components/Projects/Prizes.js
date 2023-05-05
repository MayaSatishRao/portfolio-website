import React from "react"
import { hackathons } from "../../assets/data"

const Prizes = ()=>{
    return (
        <div className="work" style={{marginTop:"2rem"}}>
            <p className="ed-link">https://acheivements/<span style={{fontWeight:"bold"}}>COMPETITIONS</span></p>
            <p className="ed-name">Hackathons and Coding Contests</p>

            <ul className="work-details">
            {
                hackathons.map(h=><li>{h}</li>)
            }
            </ul>
          </div>
    )
}

export default Prizes;