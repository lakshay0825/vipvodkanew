import { WrapperContact } from "./styles";
import { Paragraph, SubHeading } from "../../../components";
import { Container, Row, Col } from "react-grid-system";
// import { Overlay } from "../../../components/overlay";
export const ContactForm = () => {
  return (
    <WrapperContact className="contact_sec">
        <Container>
          <Row gutterWidth={100}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <div data-aos="zoom-out" className="">
                <SubHeading className="uppercase textGolden">
                  Get in touch
                </SubHeading>
                <Paragraph className="textWhite">For general comments or questions please <br/>send us a message using the contact form.</Paragraph>

                  <div className="form">
                    <form>
                      <div className="form-item">
                        <input placeholder="First Name" />
                      </div>
                      <div className="form-item">
                        <input placeholder="Last Name" />
                      </div>
                      <div className="form-item">
                        <input placeholder="Your Email" type="email" />
                      </div>
                      <div className="form-item">
                        <input placeholder="Date of Birth" type="text" />
                      </div>
                      <div className="form-item">
                        <div className="select-inner">
                          <select>
                            <option>Submission Topic</option>
                            <option>Submission Topic</option>
                            <option>Submission Topic</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-item">
                        <textarea rows={6} placeholder="Message" />
                      </div>
                      <div className="form-item">
                        <label class="custom-checkbox">I agree to the sharing of my data with Moët Hennessy affiliates for analysis purposes.
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div className="form-item">
                        <button>SEND</button>
                      </div>
                    </form>
                  </div>
                    
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <div data-aos="zoom-out" className="textLeft">
                    <SubHeading className="uppercase textGolden">
                      Subscribe to News from VIP
                    </SubHeading>

                    <div className="form">
                    <form>
                      <div className="form-item">
                        <input placeholder="First Name" />
                      </div>
                      <div className="form-item">
                        <input placeholder="Last Name" />
                      </div>
                      <div className="form-item">
                        <input placeholder="Your Email" type="email" />
                      </div>
                      <div className="form-item">
                        <input placeholder="Date of Birth" type="text" />
                      </div>
                      <div className="form-item">
                        <label class="custom-checkbox">I agree to the sharing of my data with Moët Hennessy affiliates for analysis purposes.
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div className="form-item">
                        <button>SEND</button>
                      </div>
                    </form>
                  </div>

              </div>
            </Col>
          </Row>
        </Container>
    </WrapperContact>
  );
};
