import { VipVodkaWrapper } from "./styles";
import { Container, Row, Col } from "react-grid-system";
import { Paragraph, SubHeading } from "../../../components";
import BottleImage from "../../../assets/homePage/VodkaGold/vodkaGold.png";
import { useWindowSize } from "../../../utils/useWindowSize";
import { useRef, useEffect } from "react";
import BukatiCheron from "../../../assets/homePage/VodkaGold/lv_0_20220413232703.mp4";

export const VodkaGold = () => {
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
        <source src={BukatiCheron} type="video/mp4" />
      </video>
      <div className="absoluted_data">
        <Container>
          <Row gutterWidth={250}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <Row className="customize_row">
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={10}
                  xl={8}
                  xxl={8}
                  xxxl={8}
                  offset={{
                    xs: 0,
                    sm: 0,
                    md: 0,
                    lg: 2,
                    xl: 4,
                    xxl: 4,
                    xxxl: 4,
                  }}
                >
                  <div data-aos="fade-right" className="textLeft">
                    <SubHeading className="uppercase textWhite">
                      Vip Vodka Gold
                    </SubHeading>
                    <Paragraph className="textWhite">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do <br /> <br />
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
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className={width <= 768 ? "textCenter" : "textLeft"}
              >
                <img
                  src={BottleImage}
                  alt="vodkaBottle"
                  className="vodkaBottle"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </VipVodkaWrapper>
  );
};
