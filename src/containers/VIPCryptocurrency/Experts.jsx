import React from "react";
import "./css-files/styles.css";
import img1 from "../../assets/VIP-Cryptocurrency/rectangle_5_copy_10.jpg";
import img2 from "../../assets/VIP-Cryptocurrency/rectangle_5_copy_4.jpg";
import img3 from "../../assets/VIP-Cryptocurrency/rectangle_5_copy_5.jpg";
import img4 from "../../assets/VIP-Cryptocurrency/rectangle_5_copy_6.jpg";

function Experts(){
    return(
        <>
            <div className="about our-experts">
                <h1 className="about-heading">OUR<span> EXPERTS</span></h1>
                <p className="about-p-line">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.</p>
                <div className="expert-cards">
                    <div className="experts">
                        <img src={img1} alt="profile-img"/>
                        <h3>NAME</h3>
                        <p>Bitcoin Consultant</p>
                    </div>
                    <div className="experts experts-margin">
                        <img src={img2} alt="profile-img"/>
                        <h3>NAME</h3>
                        <p>Bitcoin Consultant</p>
                    </div>
                    <div className="experts experts-margin">
                        <img src={img3} alt="profile-img"/>
                        <h3>NAME</h3>
                        <p>Bitcoin Consultant</p>
                    </div>
                    <div className="experts">
                        <img src={img4} alt="profile-img"/>
                        <h3>NAME</h3>
                        <p>Bitcoin Consultant</p>
                    </div>
                </div>
            </div>
        </>
    );
}
        
export default Experts;