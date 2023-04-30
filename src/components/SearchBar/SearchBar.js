import React from "react"

import MobileSearchBar from "./MobileSearchBar"
import CompSearchBar from "./CompSearchBar"

import "./SearchBar.css"
const SearchBar = ()=>{
    return (
      <>
        <div className="comp-sb">
           <CompSearchBar/>
         </div>
         <div className="mob-sb">
            <MobileSearchBar/>
         </div>
      </>
    )
}

export default SearchBar;