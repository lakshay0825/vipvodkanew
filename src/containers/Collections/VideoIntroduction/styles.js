import styled from "styled-components";
import Poster from "../../../assets/collections/videobg.jpg";

export const WrapperVideoInfo = styled.section`
  overflow: hidden;
  .swiper-slide {
    max-width: 80vw;
  }

  .wrapper-video {
    position: relative;
    .poster-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .poster-visible {
    display: flex !important ;
  }

  .poster {
    z-index: 1111;
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    background-image: url(${Poster});
    background-position: center;
    background-size: cover;
    img {
      min-width: 100%;
      height: auto;
    }
    .play-icon {
      color: #e0e0e0;
      font-size: 70px;
      cursor: pointer;
      img{
        width:150px;
      }
    }
  }

  .video-text {
    font-size: 31px;
    letter-spacing: 3px;
    font-weight: 400;
    font-family: "Open Sans";
    margin:0;
  }

  @media (max-width: 992px) {
    .video-text {
      font-size: 25px;
      letter-spacing: 0px;
    }
  }
  @media (max-width: 768px) {
    .video-text {
      font-size: 12px;
      letter-spacing: 0px;
    }
  }
`;
