import React from "react";
import "./css-files/styles.css";
import img1 from "../../assets/philosophy/1.png";
import img2 from "../../assets/philosophy/2.png";
import img3 from "../../assets/philosophy/3.png";

function Middle(){
    return(
        <div className="middle">
            <div className="section-1">
                <div className="image-1">
                    <img  data-aos="fade-right" src={img1} alt="img-1" />
                </div>
                <div  data-aos="fade-down" className="details-1">
                    <h1>LOREM IPSUM IS SIMPLY</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.	
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.	
                    </p>
                </div>
            </div>
            <div className="section-2">
                <div  data-aos="fade-down" className="details-2">
                    <h1>LOREM IPSUM IS SIMPLY</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.	
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.	
                    </p>
                </div>
                <div className="image-2">
                    <img  data-aos="fade-up" src={img2} alt="img-2" />
                </div>
            </div>
            <div className="section-3">
                <div className="image-3">
                    <img  data-aos="fade-right" src={img3} alt="img-3" />
                </div>
                <div  data-aos="fade-down" className="details-3">
                    <h1>LOREM IPSUM IS SIMPLY</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.	
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.	
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Middle;