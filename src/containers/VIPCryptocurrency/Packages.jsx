import React from "react";
import "./css-files/styles.css";

function Packages(){
    return(
        <>
            <div className="about aff-packages">
              <h1 className="about-heading">AFFORDABLE<span> PACKAGES</span></h1>
              <p className="about-p-line">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.</p>
              <div className="packages-button">
                <button className="packages-1stButton">BUY</button>
                <button className="packages-2ndButton">SELL</button>
              </div>
              <div className="package-value">
                   <div className="package">
                        <h1>GET 0.0010 BTC<br/><br/>FOR</h1>
                        <h2>$100</h2>
                        <button>ORDER NOW</button>
                    </div>
                    <div className="package">
                        <h1>GET 0.0010 BTC<br/><br/>FOR</h1>
                        <h2>$300</h2>
                        <button>ORDER NOW</button>
                    </div>
                    <div className="package">
                        <h1>GET 0.0010 BTC<br/><br/>FOR</h1>
                        <h2>$500</h2>
                        <button>ORDER NOW</button>
                    </div>
                    <div className="package">
                        <h1>GET 0.0010 BTC<br/><br/>FOR</h1>
                        <h2>$1000</h2>
                        <button>ORDER NOW</button>
                    </div>
              </div> 
            </div>
        </>
    );
}

export default Packages;