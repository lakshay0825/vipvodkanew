import React from "react";
import "./css-files/styles.css";
import img1 from "../../assets/VIP-Cryptocurrency/logo.png";
import img2 from "../../assets/VIP-Cryptocurrency/layer_12.png";
import img3 from "../../assets/VIP-Cryptocurrency/crypto.png";
import img4 from "../../assets/VIP-Cryptocurrency/bitcoin_1.png";
import img5 from "../../assets/VIP-Cryptocurrency/bitcoin.png";

function Header() {
  return (
    <>
      {/* header section */}
      <div className="header">
        <img src={img1} alt="logo" />
        <h1 data-aos="fade-up">VIP VODKA<br/><span>CRYPTO CURRENCY</span></h1>
        <a href="/">
          <button className="read-more-button">Read more</button>
        </a>
      </div>
      {/* about us section */}
      <div className="about">
        <h1 className="about-heading">ABOUT<span> US</span></h1>
        <p className="about-p-line">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.</p>
        <div className="about-us">
          <div className="about-us-img">
            <img src={img2} alt="bitcoin-logo"/>
          </div>
          <div className="about-us-details">
            <h1 className="about-us-details-heading">LOREM IPSUM</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a className="about-a-line" href="/">OUR MISSION<span>|</span></a>
            <a className="about-a-line" href="/">OUR ADVANTAGES<span>|</span></a>
            <a href="/">OUR GUARANTEES</a>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="/">
              <button className="read-more-button-aboutus">Read more</button>
            </a>
          </div>
        </div>
      </div>
      <div className="wallet">
        <div className="wallet-options">
          <img src={img3} alt="bitcoin-wallet" />
          <div className="wallet-action">
            <a href="/">Download Bitcoin Wallet</a>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="wallet-options">
          <img src={img4} alt="add-coin" />
          <div className="wallet-action">
            <a href="/">Add coins to your Wallet</a>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="wallet-options">
          <img src={img5} alt="wallet" />
          <div className="wallet-action">
            <a href="/">Buy/Sell with Wallet</a>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
