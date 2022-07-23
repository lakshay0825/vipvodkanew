import { VipVodkaWrapper } from "./styles";
import { Container, Row, Col } from "react-grid-system";
import { Paragraph, SubHeading } from "../../../components";
import { Overlay } from "../../../components/overlay";
import BottleImage from "../../../assets/homePage/vipSection/vipBottle1.png";
import { useWindowSize } from "../../../utils/useWindowSize";

export const VipVodka = () => {
  const [width] = useWindowSize();
  return (
    <VipVodkaWrapper>
      <Overlay className="overlay flex alignCenter">
        <Container>
          <Row gutterWidth={250}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <Row className="customize_row">
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={10}
                  xl={9}
                  xxl={9}
                  xxxl={9}
                  offset={{
                    xs: 0,
                    sm: 0,
                    md: 0,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                    xxxl: 3,
                  }}
                >
                  <div data-aos="zoom-out" className="textLeft">
                    <SubHeading className="uppercase textWhite">
                      Vip vodka
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
                data-aos="zoom-in-up"
                className={`${width <= 786 ? "textCenter" : "textLeft"}`}
              >
                <img
                  className="vodkaBottle img-responsive"
                  src={BottleImage}
                  alt="vodkaBottle"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Overlay>
    </VipVodkaWrapper>
  );
};
