import { CarouselItemWrapper, WrapperDrinks } from "./styles";
import Slider from "react-slick";
import { Col, Container, Row } from "react-grid-system";
import CarouselData from "./data";
import { useWindowSize } from "../../../utils/useWindowSize";
import { useEffect, useRef } from "react";
import VIDEO from "../../../assets/homePage/drinks/video.mp4";
import { Overlay } from "../../../components/overlay";
 
export const AngleLeft = () => {
  return (
    <i className="angle-left">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="0.48em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 608 1280"
      >
        <path
          fill="currentColor"
          d="M595 288q0 13-10 23L192 704l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"
        />
      </svg>
    </i>
  );
};
export const AngleRight = () => {
  return (
    <i className="angle-right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="0.48em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 608 1280"
      >
        <g transform="translate(608 0) scale(-1 1)">
          <path
            fill="currentColor"
            d="M595 288q0 13-10 23L192 704l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"
          />
        </g>
      </svg>
    </i>
  );
};

export const Drinks = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    // nextArrow: <AngleRight />,
    // prevArrow: <AngleLeft />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          initialSlide: 0,
        },
      },
    ],
  };
  const play = useRef();
  const playVodka = useRef();

  useEffect(() => {
    if (play?.current) {
      play?.current?.play();
      playVodka?.current?.play();
    }
  }, [play]);

  const [width] = useWindowSize();
  const variable = width <= 456 ? 430 : 475;
  const responsive = variable - width;

  return (
    <WrapperDrinks responsive={responsive}>
      <video className="bg-loop-video" ref={play} muted autoplay loop>
        <source src={VIDEO} type="video/mp4" />
      </video>
      <div className="absoluted_data">
        <Overlay className="overlay">
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
                <div data-aos="fade-up" className="textCenter">
                  <h2 className="capitalize  fw-500  textWhite main-title">
                    Vip ice drinks
                  </h2>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
                <div data-aos="zoom-in-up" className="carousel-wrapper">
                  <Slider {...settings}>
                    {CarouselData?.map((item, index) => {
                      return ( 
                        <CarouselItemWrapper
                          titleColor={item?.titleColor}
                          className="textCenter carousel-item-wrapper"
                        >
                          <div className="carousel-item flex alignCenter justifyCenter">
                            <img
                              className="img-responsive"
                              src={item?.img}
                              alt="carousel "
                            />
                            <div className="mt-20">
                              <h2 className="title">{item?.title}</h2>
                              <h2 className="flavor">{item?.flavor}</h2>
                            </div>
                          </div>
                        </CarouselItemWrapper>
                      );
                    })}
                  </Slider>
                </div>
              </Col>
            </Row>
          </Container>
        </Overlay>
      </div>
    </WrapperDrinks>
  );
};
