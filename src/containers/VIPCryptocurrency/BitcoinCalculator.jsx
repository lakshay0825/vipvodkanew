import React from "react";
import "./css-files/styles.css";
import img1 from "../../assets/VIP-Cryptocurrency/rectangle_7.png";
import img2 from "../../assets/VIP-Cryptocurrency/bitcoin_2.png";

function BitcoinCalculator(){
    return(
        <>
            <div className="bitcoin-calculator">
                <img src={img1} alt="bitcoin-banner"/>
                <div className="calculator">
                    <h1 className="calculator-heading"><span>BITCOIN</span> CALCULATOR</h1>
                    <p className="calculator-p">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.</p>
                    <div className="calculator-input">
                      <input type="number" />
                      <div className="bitcoin-symbol">
                        <img src={img2} alt="bitcoin-symbol"/>
                      </div>
                      <span>=</span>
                      <input type="number" />
                      <div className="select">
                      <select>
                          <option value="ETH">ETH</option>
                          <option value="DOGE">DOGE</option>
                          <option value="SOL">SOL</option>
                          <option value="USDT">USDT</option>
                      </select>
                      </div>
                    </div>
                    <p className="data-p">*Data updated every 15 minutes</p>
                </div>
            </div>
        </>
    );
}
    
export default BitcoinCalculator;