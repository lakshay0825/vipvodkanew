import React from "react";
import "./css-files/styles.css";
import img1 from "../../assets/VIP-Cryptocurrency/layer_15.png";
import img2 from "../../assets/VIP-Cryptocurrency/layer_16.png";
import img3 from "../../assets/VIP-Cryptocurrency/layer_15.png";
import img4 from "../../assets/VIP-Cryptocurrency/layer_16.png";
import img5 from "../../assets/VIP-Cryptocurrency/rectangle_4_copy.jpg";
import vid from "../../assets/VIP-Cryptocurrency/bitcoin-tutorial.mp4";

function Wallet() {
  return ( 
    <>
      <div className="wallet2">
        <div className="wallet2-div1">
            <div className="wallet2-div1-up">
                <div className="wallet2-options">
                    <img src={img1} alt="bitcoin-lock" />
                    <div className="wallet2-links"><a href="/">LOREM IPSUM</a></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="wallet2-options">
                    <img src={img2} alt="bitcoin-wallet" />
                    <div className="wallet2-links"><a href="/">LOREM IPSUM</a></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="wallet2-div1-down">
                <div className="wallet2-options">
                    <img src={img3} alt="bitcoin-lock" />
                    <div className="wallet2-links"><a href="/">LOREM IPSUM</a></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="wallet2-options">
                    <img src={img4} alt="bitcoin-wallet" />
                    <div className="wallet2-links"><a href="/">LOREM IPSUM</a></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
        <div  className="videoInsert">
            <video controls poster={img5}>
              <source src={vid} type="video/mp4"/>
            </video>
        </div>
      </div>
    </>
  );
}

export default Wallet;