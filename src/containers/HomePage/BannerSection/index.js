import React, { useRef } from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { BannerWrapper } from "./styles";
import GoldenBottle from "../../../assets/homePage/goldenBottle.png";
import blueBottle from "../../../assets/homePage/blueBottle.png";
import blackBottle from "../../../assets/homePage/blackBottle.png";
import banner1 from "../../../assets/homePage/VIP-home-banner-1.jpg";
import banner2 from "../../../assets/homePage/VIP-home-banner-2.jpg";
import banner3 from "../../../assets/homePage/VIP-home-banner-3.jpg";
import Logo from "../../../assets/logo.png";

export const BannerSection = () => {

  const sliderRef = useRef(null);

  const settings = {
    ref: sliderRef,
    arrows: false,
    // dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
  };

  return (  
    <BannerWrapper>
      <Slider {...settings}>
          <div className="bb">
            <img src={banner1} alt='bimg' className="bimg"/> 
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="poster-content">
              <div className="bottle_image_wrapper flex alignCenter justifyCenter blackBottle">
                <h1 data-aos="fade-right" className="title-style left_title">
                   EX
                </h1>
                <img
                  data-aos="fade-up"
                  className="mh-20 blackBottleimg"
                  src={blackBottle}
                  alt="vodkaBottle"
                />
                <h1 data-aos="fade-left" className="title-style right-title ">
                  CLUSIVE
                  <br/>
                  <p>Ultra Premium Vodka</p>
                </h1>
              </div>
            </div>
          </div>


          <div className="bb">
            <img src={banner2} alt='bimg' className="bimg"/> 
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="poster-content blueBottle">
              <div className="bottle_image_wrapper flex alignCenter justifyCenter ">
                <h1 data-aos="fade-right" className="title-style left_title">
                   UN
                </h1>
                <img
                  data-aos="fade-up"
                  className="mh-20"
                  src={blueBottle}
                  alt="vodkaBottle"
                />
                <h1 data-aos="fade-left" className="title-style right-title ">
                  IQUE
                  <br/>
                  <p>Ultra Premium Vodka</p>
                </h1>
              </div>
            </div>
          </div>


          <div className="bb">
            <img src={banner3} alt='bimg'className="bimg"/> 
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="poster-content GoldenBottle">
              <div className="bottle_image_wrapper flex alignCenter justifyCenter">
                <h1 data-aos="fade-right" className="title-style left_title">
                   ULTRA
                </h1>
                <img
                  data-aos="fade-up"
                  className="mh-20"
                  src={GoldenBottle}
                  alt="vodkaBottle"
                />
                <h1 data-aos="fade-left" className="title-style right-title ">
                  PREMIUM
                  <br/>
                  <p>Ultra Premium Vodka</p>
                </h1>
              </div>
            </div>
          </div>
      </Slider>
      <div className="arrow-prev-button" onClick={() => sliderRef.current.slickPrev()}>
        <ArrowBackIosIcon className="arrow-button"/>
      </div>
      <div className="arrow-next-button" onClick={() => sliderRef.current.slickNext()}>
        <ArrowForwardIosIcon className="arrow-button"/>
      </div>
    </BannerWrapper>
  );
};