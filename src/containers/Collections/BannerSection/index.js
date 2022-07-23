import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerWrapper } from "./styles";
// import GoldenBottle from "../../../assets/goldenBottle.png";
import Logo from "../../../assets/logo.png";

export const BannerSection = () => {
  return (
    <BannerWrapper>
      <div className="logo">
        <a href="/"><img src={Logo} alt="logo" /></a>
      </div>
      <div className="poster-content">
        <div className="bottle_image_wrapper flex alignCenter justifyCenter flexDirection">
          <h2 data-aos="fade-right" className="subtitle-style left_title textWhite textCenter">
            Collections
          </h2>
          <h1 data-aos="fade-left" className="title-style right-title textWhite textCenter">
          Lorem Ipsum is simply
          </h1>
        </div>
      </div>
    </BannerWrapper>
  );
};
