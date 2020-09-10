import React from "react";
import "./app.css";
import Image1 from "../asserts/1.png";
import Image2 from "../asserts/2.png";
import Top from "../components/Top"
import Bottom from "../components/Bottom"

function Middle() {
  return (
    <div className="container">
        <Top/>
        <div className="Middle">
            <div className="tab-1"><img src={Image1} className="img1" /></div>
        <div className="tab-2">
        <h3 className="t1">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={Image2} className="img2" />
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p></div>      
          
        </div>
        
          <Bottom/>
    </div>
  );
}

export default Middle;
