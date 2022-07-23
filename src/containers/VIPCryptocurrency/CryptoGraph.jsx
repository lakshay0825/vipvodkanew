import React from "react";
import "./css-files/styles.css";
import img1 from "../../assets/VIP-Cryptocurrency/rectangle_13.jpg";
import img2 from "../../assets/VIP-Cryptocurrency/image_2.png";
import img3 from "../../assets/VIP-Cryptocurrency/ellipse_1.png";
import img4 from "../../assets/VIP-Cryptocurrency/copy.png";
import img5 from "../../assets/VIP-Cryptocurrency/layer_26.png";

function CryptoGraph(){
    return(
        <>
            <div className="ceo-graph">
                <div className="left-section">
                    <img className="ceo-graph-leftimg" src={img1} alt="ceo" />
                    <div className="on-img">
                        <img className="qutetion-top" src={img2} alt="quetetion"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book.
                        </p>
                        <div className="ceo-profile">
                            <img src={img3} alt="profile"/>
                            <h3>Name - <span>CEO</span></h3>
                        </div>
                        <img className="qutetion-bottom" src={img4} alt="quetetion"/>
                    </div>
                </div>
                <div>
                    <img className="ceo-graph-rightimg" src={img5} alt="graph"/>
                </div>
            </div>
        </>
    );
}
        
export default CryptoGraph;