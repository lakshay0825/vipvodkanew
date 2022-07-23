import React from "react";
import "./css-files/styles.css";
import img4 from "../../assets/philosophy/4.png";
import page11 from "../../assets/philosophy/page_11.png";


function VIP(){
    return(
        <div className="last-img">
            <img data-aos="fade-down" className="bottle-img" src={img4} alt="bottle-img"/>
            <div className="logo-img">
              <img 
                  data-aos="zoom-out"
                  data-aos-easing="linear"
                  data-aos-duration="3000" 
                  src={page11} alt="logo-img"/>
            </div>  
        </div>
    );
}

export default VIP;

