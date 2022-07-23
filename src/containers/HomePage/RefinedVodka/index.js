import { Col, Container, Row } from "react-grid-system";
import { Paragraph, SubHeading } from "../../../components";
import { Overlay } from "../../../components/overlay";
import { WrapperRefinedVodka } from "./styles";
import Grain from "../../../assets/homePage/RefinedVodka/grain.png";
import Drum from "../../../assets/homePage/RefinedVodka/drum.png";
import Bottles from "../../../assets/homePage/RefinedVodka/refinedVodka.png";

export const RefinedVodka = () => {
  return (
    <WrapperRefinedVodka>
      <Overlay color="#0d0202" className="overlay">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
              <div data-aos="fade-up" className="textCenter main-title">
                <h2 className="uppercase  fw-500  textWhite main-title">
                  Refined Vip vodka
                </h2>
                <Paragraph className="textWhite para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesettin
                </Paragraph>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
              xxl={10}
              xxxl={10}
              offset={{
                lg: 1,
                xl: 1,
                xxl: 1,
                xxxl: 1,
              }}
            >
              <Row data-aos="fade-up">
                <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} xxxl={3}>
                  <div className="malting textCenter">
                    <img src={Grain} alt="Grain" />
                    <SubHeading className="uppercase textWhite title">
                      Malting
                    </SubHeading>
                    <Paragraph className="textWhite para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesettin copy
                    </Paragraph>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} xxxl={6}>
                  <div className="bottlesImage textCenter">
                    <img
                      className="img-responsive"
                      src={Bottles}
                      alt="vodka bottle"
                    />
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} xxxl={3}>
                  <div className="malting textCenter maturation">
                    <img src={Drum} alt="Grain" />
                    <SubHeading className="uppercase textWhite title">
                      Maturation
                    </SubHeading>
                    <Paragraph className="textWhite para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesettin copy
                    </Paragraph>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Overlay>
    </WrapperRefinedVodka>
  );
};
