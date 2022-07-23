import styled from "styled-components";
export const WrapperDrinks = styled.section`
  position: relative;
  overflow: hidden;

  .absoluted_data {
    background-color: #020f1f40;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1111;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .overlay {
      background-color: #00000052 !important;
      width: 100%;
      height: 100%;
    }
  }

  .bg-loop-video {
    width: 100vw;
  }

  @media (max-width: 768px) {
    overflow: hidden;

    .bg-loop-video {
      min-width: 500vw !important;
    }

    .absoluted_data {
      min-height: 100vh;
    }
  }

  @media (max-width: 1650px) {
    .bg-loop-video {
      min-width: 120vw;
    }
  }
  @media (max-width: 1366px) {
    .bg-loop-video {
      min-width: 130vw;
    }
  }
  @media (max-width: 1300px) {
    .bg-loop-video {
      min-width: 150vw;
    }
  }
  @media (max-width: 1200px) {
    .bg-loop-video {
      min-width: 170vw;
    }
  }
  @media (max-width: 992px) {
    .bg-loop-video {
      min-width: 221vw;
    }
  }

  .main-title {
    font-size: 44px;
    font-weight: 400;
    position: relative;
    top: 119px;
  }

  .carousel-wrapper {
    margin: 60px 0;
    padding: 0 10px;
  }

  .slick-dots li button:before {
    font-size: 12px !important;
    color: #fff !important;
  }

  .angle-left {
    /* position: absolute;
    top: 44%;
    left: 0;
    font-size: 35px;
    color: #ad6a0a;

    display: flex;
    align-items: center; */
  }
  .angle-right {
    /* position: absolute;
    top: 44%;
    right: 0;
    font-size: 35px;
    color: #ad6a0a;

    display: flex;
    align-items: center; */
  }

  /* .slick-initialized {
    overflow: hidden;
  } */

  @media (max-width: 768px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;

export const CarouselItemWrapper = styled.div`
  .carousel-item-wrapper {
    padding: 30px 0px;
  }

  .carousel-item {
    text-align: center;
    margin: 0 3px;
    text-align: center;
    flex-direction: column;
    transition: 0.6s all ease-in-out;
    min-height: 662px;
    &:hover {
      transform: scale(1.3);
    }

    img {
      width: 100%;
      height: auto;
    }

    .title {
      color: ${(props) => props?.titleColor};
    }

    .flavor {
      color: #d1ebbe;
      letter-spacing: 1.6px;
    }

    .title,
    .flavor {
      margin: 5px 0;
      font-size: 25px;
      font-weight: 400;
    }
  }

  @media (max-width: 300px) {
    .carousel-item:hover {
      transform: scale(1) !important;
    }
  }

  .slick-dots li button:before {
  }
`;
