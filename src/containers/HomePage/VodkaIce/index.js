import { VipVodkaWrapper } from "./styles";
import { Container, Row, Col } from "react-grid-system";
import { Paragraph, SubHeading } from "../../../components";
import BottleImage from "../../../assets/homePage/VodkaIce/vodkaIce1.png";
import { useWindowSize } from "../../../utils/useWindowSize";
import { useEffect, useRef } from "react";
import SHIPVID from "../../../assets/homePage/VodkaIce/bg.mp4";
export const VodkaIce = () => {
  const [width] = useWindowSize();
  const play = useRef();
  const playVodka = useRef();

  useEffect(() => {
    if (play?.current) {
      play?.current?.play();
      playVodka?.current?.play();
    }
  }, [play]);

  return (
    <VipVodkaWrapper>
      <video className="bg-loop-video" ref={play} muted autoplay loop>
        <source src={SHIPVID} type="video/mp4" />
      </video>
      <div className="absoluted_data">
        <Container className="custom_container">
          <Row></Row>
          <Row gutterWidth={250}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <div className={width <= 786 ? "textCenter" : "textRight"}>
                <img
                  onMouseDown={(mouseDownEvent) => console.log(mouseDownEvent)}
                  onMouseUp={() => console.log("onMouseUp")}
                  onTouchStsart={(e) => console.log(e)}
                  onTouchEnd={(e) => console.log(e)}
                  className="vodkaBottle img-responsive"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  src={BottleImage}
                  alt="vodka"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <Row className="customize_row">
                <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={8} xxxl={8}>
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="mt-25"
                  >
                    <SubHeading className="uppercase title textWhite">
                      Vip Vodka ice
                    </SubHeading>
                    <Paragraph className="textWhite">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do <br />
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </Paragraph>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </VipVodkaWrapper>
  );
};
