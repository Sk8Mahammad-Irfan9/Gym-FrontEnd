import React from "react";
import aboutImage from "../images/about.png"

export const About=()=>{
    return(
        <div id="about">
            <div className="about-image">
            <img src={aboutImage} alt="Something"/>
            </div>
            <div className="about-text">
                <h1>LERN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis placeat officia illo ut voluptas, laboriosam vero impedit eligendi ea? In porro libero nostrum placeat.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}