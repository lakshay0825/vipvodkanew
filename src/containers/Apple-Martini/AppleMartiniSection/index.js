import { AppleMartiniWrapp } from './styles';
import { Container, Row, Col } from 'react-grid-system';
import AppleMartiniImage from '../../../assets/collections/img2.png';
import { useWindowSize } from '../../../utils/useWindowSize';
import { Navbar } from '../../../components/navbar';
import { Footer } from '../../../components/footer';
import { Paragraph, SubHeading } from '../../../components';

export const AppleMartiniSection = () => {
  const [width] = useWindowSize();
  return (
    <>
      <Navbar />
      <AppleMartiniWrapp>
        <div className='absoluted_data'>
          <Container>
            <Row></Row>
            <Row gutterWidth={250}>
              <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} xxxl={5}>
                <div className={width <= 786 ? 'textCenter' : 'textRight'}>
                  <img
                    className='appleMartiniBottle img-responsive'
                    data-aos='fade-up'
                    data-aos-duration='3000'
                    src={AppleMartiniImage}
                    alt='Apple Martini'
                  />
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7} xxxl={7}>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={8} xxxl={8}>
                    <div
                      data-aos='fade-down'
                      data-aos-easing='linear'
                      data-aos-duration='1500'
                      className='mt-25'>
                      <SubHeading
                        className='uppercase title'
                        style={{
                          fontSize: '50px',
                          color: '#66bc49',
                          fontWeight: 500,
                          fontFamily: 'Oswald',
                        }}>
                        apple martini
                      </SubHeading>
                      <Paragraph
                        className='textWhite'
                        style={{
                          fontSize: '24px',
                          color: '#ffffff',
                          fontWeight: 400,
                          fontFamily: 'Open Sans',
                        }}>
                        Ice Drinks <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </Paragraph>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} xxxl={6}>
                    <button className='buyNowBtn uppercase'>buy now</button>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} xxxl={6}>
                    <button className='addCartBtn uppercase'>add cart</button>
                  </Col>
                  <Col
                    className='textCenter'
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    xxl={12}
                    xxxl={12}>
                    <button className='superCoinBtn'>
                      You can use super coing
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </AppleMartiniWrapp>
      <Footer />
    </>
  );
};
