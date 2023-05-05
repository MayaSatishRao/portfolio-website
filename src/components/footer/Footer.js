import React from "react"
import FooterImage from "../../assets/footer.png"

const Footer = ()=>{
    return (
        <div className="footer" style={{margin:"2rem 0 2rem"}}>
            <div className="footer-image" style={{width:"24rem",height:"6rem"}}>
                <img src={FooterImage} style={{width:"100%",height:"100%"}}/>
            </div>
        </div>
    )
}

export default Footer;