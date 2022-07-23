import { BannerWrapper, CardBorder } from './styles';
import Logo from '../../../assets/logo.png';
import { Col, Container, Row } from 'react-grid-system';
import { Paragraph, SubHeading } from '../../../components';

export const PressReleaseSection = () => {
  return (
    <>
      <BannerWrapper>
        <div className='logo'>
          <a href='/'>
            <img src={Logo} alt='logo' />
          </a>
        </div>
        <Paragraph
          style={{
            margin: '250px 0 0 0',
            color: '#fff',
            textAlign: 'center',
            fontSize: '78px',
            fontFamily: 'Open Sans',
            fontWeight: 300,
          }}
          className='uppercase textCenter'>
          Blogs
          <SubHeading
            style={{
              color: '#fff',
              fontFamily: 'Oswald',
              fontWeight: 500,
              fontSize: '78px',
            }}
            className='uppercase'>
            lorem ipsum is simply
          </SubHeading>
        </Paragraph>
      </BannerWrapper>
      <Container style={{ width: '100%' }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
            <SubHeading
              style={{
                color: '#fff',
                fontFamily: 'Oswald',
                fontWeight: 500,
                fontSize: '78px',
              }}
              className='uppercase textCenter'>
              latest articles
            </SubHeading>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
            <CardBorder>
              <p className='textWhite'>IMAGE</p>
              <SubHeading
                style={{
                  fontSize: '27px',
                  color: '#d6aa5e',
                  fontWeight: 500,
                  fontFamily: 'Rubik',
                }}>
                Lorem ipsum is simply dummy text of the printing and
              </SubHeading>
              <Paragraph
                style={{
                  fontSize: '20px',
                  color: '#ffffff',
                  fontWeight: 400,
                  fontFamily: 'Rubik',
                }}>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </Paragraph>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#d6aa5e',
                    fontWeight: 300,
                    fontFamily: 'Rubik',
                  }}>
                  Read More
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#d6aa5e',
                    fontWeight: 400,
                    fontFamily: 'Rubik',
                  }}>
                  18.06.22
                </p>
              </div>
            </CardBorder>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
            <CardBorder>
              <p className='textWhite'>IMAGE</p>
              <SubHeading
                style={{
                  fontSize: '27px',
                  color: '#d6aa5e',
                  fontWeight: 500,
                  fontFamily: 'Rubik',
                }}>
                Lorem ipsum is simply dummy text of the printing and
              </SubHeading>
              <Paragraph
                style={{
                  fontSize: '20px',
                  color: '#ffffff',
                  fontWeight: 400,
                  fontFamily: 'Rubik',
                }}>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </Paragraph>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#d6aa5e',
                    fontWeight: 300,
                    fontFamily: 'Rubik',
                  }}>
                  Read More
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#d6aa5e',
                    fontWeight: 400,
                    fontFamily: 'Rubik',
                  }}>
                  18.06.22
                </p>
              </div>
            </CardBorder>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
            <CardBorder>
              <p className='textWhite'>IMAGE</p>
              <SubHeading
                style={{
                  fontSize: '27px',
                  color: '#d6aa5e',
                  fontWeight: 500,
                  fontFamily: 'Rubik',
                }}>
                Lorem ipsum is simply dummy text of the printing and
              </SubHeading>
              <Paragraph
                style={{
                  fontSize: '20px',
                  color: '#ffffff',
                  fontWeight: 400,
                  fontFamily: 'Rubik',
                }}>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </Paragraph>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#d6aa5e',
                    fontWeight: 300,
                    fontFamily: 'Rubik',
                  }}>
                  Read More
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#d6aa5e',
                    fontWeight: 400,
                    fontFamily: 'Rubik',
                  }}>
                  18.06.22
                </p>
              </div>
            </CardBorder>
          </Col>
        </Row>
      </Container>
      <Container style={{ width: '100%' }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
            <SubHeading
              style={{
                fontSize: '78px',
                color: '#ffffff',
                fontWeight: 500,
                fontFamily: 'Oswald',
              }}
              className='uppercase textCenter'>
              our blogs
            </SubHeading>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
            <p className='textWhite'>IMAGE</p>
            <SubHeading
              style={{
                fontSize: '27px',
                color: '#d6aa5e',
                fontWeight: 500,
                fontFamily: 'Rubik',
              }}>
              Lorem ipsum is simply dummy text of the printing and
            </SubHeading>
            <p className='textWhite'>Name</p>
            <Paragraph
              style={{
                fontSize: '20px',
                color: '#ffffff',
                fontWeight: 400,
                fontFamily: 'Rubik',
              }}>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </Paragraph>
            <p
              style={{
                fontSize: '15px',
                color: '#ffffff',
                fontWeight: 400,
                fontFamily: 'Rubik',
              }}>
              18.06.22
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{ width: '100%' }}>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            xxxl={12}
            className='textCenter'
            style={{ margin: '50px 0' }}>
            <div className='logo'>
              <a href='/'>
                <img src={Logo} alt='logo' />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
