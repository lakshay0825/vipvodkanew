import React from "react";
import "./css-files/styles.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img1 from "../../assets/VIP-Cryptocurrency/logo_copy.png";
import img2 from "../../assets/VIP-Cryptocurrency/layer_36.png";
import img3 from "../../assets/VIP-Cryptocurrency/layer_35.png";
import img4 from "../../assets/VIP-Cryptocurrency/layer_34.png";
import img5 from "../../assets/VIP-Cryptocurrency/rounded_rectangle_2.png";

function Footer(){
    return(
        <>
          <div className="footer">
                <div className="footer-main">
                    <img className="footer-logo" src={img1} alt="logo"/>
                    <div className="contact-us">
                        <h2>Contact Us</h2>
                        <p>20404 NE 16th Place<br/> Miami, FL 33179</p>
                        <div className="contacts">
                            <img src={img2} alt="flag"/>
                            <p>+ 1 312 684 2954</p>
                        </div>
                        <div className="contacts">
                            <img src={img3} alt="flag"/>
                            <p>+ 33 97 00 19 205</p>
                        </div>
                        <div className="contacts">
                            <img src={img4} alt="flag"/>
                            <p>+ 44 20 3769 8981</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <h2>Social Media</h2>
                        <div className="social-links">
                            <a href="https://www.facebook.com"><FacebookIcon /></a>
                            <a href="https://www.linkedin.com"><LinkedInIcon /></a>
                            <a href="https://www.twitter.com"><TwitterIcon /></a>
                            <a href="https://www.instagram.com"><InstagramIcon /></a>
                        </div>
                    </div>
                    <div className="location">
                        <h2>Location</h2>
                        <img src={img5} alt="map"/>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="horizontal-line"></div>
                    <a href="/">GO TO TOP</a>
                </div>
                <p className="copyright">© 2022 All Rights Reserved. Design & Development by The Web Art</p>
            </div>
        </>
    );
}
                
export default Footer;