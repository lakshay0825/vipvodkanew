import { WrapperReachHistory } from "./styles";
import { Container, Row, Col } from "react-grid-system";
import { Paragraph, SubHeading } from "../../../components";
import Image from "../../../assets/reachItem.png";

import { Overlay } from "../../../components/overlay";
import { useWindowSize } from "../../../utils/useWindowSize";

export const ReachHistory = () => {
  const [width] = useWindowSize();

  return (
    <WrapperReachHistory>
      <Overlay className="flex alignCenter overlay">
        <Container>
          <Row gutterWidth={250}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <div className={`${width <= 768 ? "textCenter" : "textRight"}`}>
                <img
                  data-aos="fade-right"
                  className="image"
                  src={Image}
                  alt="vip vodka"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <Row className="customize_row">
                <Col xs={12} sm={12} md={12} lg={10} xl={9} xxl={9} xxxl={9}>
                  <div data-aos="fade-left" className="wrapper-info">
                    <SubHeading className="uppercase title ">
                      Reach & Historical recipe
                    </SubHeading>
                    <Paragraph className="details ">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do <br /> <br />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                    </Paragraph>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Overlay>
    </WrapperReachHistory>
  );
};
