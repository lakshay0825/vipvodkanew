import React from "react";
import "./css-files/styles.css";
import img1 from "../../assets/VIP-Cryptocurrency/layer_30.png";
import img2 from "../../assets/VIP-Cryptocurrency/layer_32.png";
import img3 from "../../assets/VIP-Cryptocurrency/layer_31.png";

function BitcoinNews(){
    return(
        <>
            <div className="about bitcoin-news">
              <h1 className="about-heading"><span>BITCOIN</span> NEWS</h1>
              <p className="about-p-line">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.</p>
              <div className="news-feed">
                <div className="news">
                    <img src={img1} alt="newsimg"/>
                    <h3>How Cryptocurrency Begun & Its Impact To Financial Transactions</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    <a href="/">
                      <button className="read-more-button-aboutus news-button">Read more</button>
                    </a>
                </div>
                <div className="news">
                    <img src={img2} alt="newsimg"/>
                    <h3>How Cryptocurrency Begun & Its Impact To Financial Transactions</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    <a href="/">
                      <button className="read-more-button-aboutus news-button">Read more</button>
                    </a>
                </div>
                <div className="news">
                    <img src={img3} alt="newsimg"/>
                    <h3>How Cryptocurrency Begun & Its Impact To Financial Transactions</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    <a href="/">
                      <button className="read-more-button-aboutus news-button">Read more</button>
                    </a>
                </div>
              </div>
            </div>
        </>
    );
}
            
export default BitcoinNews;