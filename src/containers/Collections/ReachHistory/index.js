import { WrapperReachHistory } from "./styles";
import { Container, Row, Col } from "react-grid-system";
import { Paragraph, SubHeading } from "../../../components";

import { Overlay } from "../../../components/overlay";

export const ReachHistory = () => {

  return (
    <WrapperReachHistory>
      <Overlay className="flex alignCenter overlay">
        <Container>
          <Row gutterWidth={250}>
            <Col xs={12} sm={12} md={6} lg={12} xl={12} xxl={12} xxxl={12}>
              <Row className="customize_row">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
                  <div data-aos="fade-up" className="wrapper-info textCenter">
                    <SubHeading className="uppercase title ">
                      Reach & Historical recipe
                    </SubHeading>
                    <Paragraph className="details ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
