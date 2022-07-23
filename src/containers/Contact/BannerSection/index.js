import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerWrapper } from "./styles";
import Logo from "../../../assets/logo.png";
import { Col, Container, Row } from "react-grid-system";

export const BannerSection = () => {
  return (
    <BannerWrapper>
      <div className="logo">
        <a href="/"><img src={Logo} alt="logo" /></a>
      </div>
        <Container style={{width:'100%'}}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
              <div className="poster-content">
                <div className="bottle_image_wrapper">
                  <h1 data-aos="fade-right" className="title-style left-title">
                    Contact
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </BannerWrapper>
  );
};
