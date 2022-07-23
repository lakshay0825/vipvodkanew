import {
  BannerWrapper,
  Wrapper,
  ReadStoryButton,
} from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import { Col, Container, Row } from 'react-grid-system';
import { Paragraph, SubHeading } from '../../../components';
import FB from '../../../assets/facebook.png';
import LinkedIn from '../../../assets/linkedin.png';
import Twitter from '../../../assets/twitter.png';
import blogimg1 from '../../../assets/blogimg1.png';
import blogimg2 from '../../../assets/blogimg2.png';
import blogimg3 from '../../../assets/blogimg3.png';
export const VIPPressReleaseSection = () => {
  return (
    <>
      <BannerWrapper>
        <div className='logo'>
          <a href='/'>
            <img src={Logo} alt='logo' />
          </a>
        </div>
        <SubHeading
          data-aos="fade-up"
          style={{
            fontSize: '100px',
            margin: '250px 0 0 0',
            color: '#fff',
            fontFamily: 'Libel Suit Rg',
          }}
          className='uppercase'>
          <span style={{ color: '#e3ae55' }}>VIP </span>press release
        </SubHeading>
      </BannerWrapper>
      <Wrapper>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={1} lg={1} xl={1} xxl={1} xxxl={1}></Col>
            <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10} xxxl={10}>
              <div className='postmain'>
                <SubHeading>Lorem Ipsum</SubHeading>
                <Paragraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </Paragraph>
                <br />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <ReadStoryButton>Read the story</ReadStoryButton>
                  <div className='social-icons'>
                    <Link to="#"><img src={FB} alt="" /></Link>
                    <Link to="#"><img src={LinkedIn} alt="" /></Link>
                    <Link to="#"><img src={Twitter} alt="" /></Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={1} lg={1} xl={1} xxl={1} xxxl={1}></Col>
          </Row>
          <Row className='mt-35'>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
            <img data-aos="fade-right" src={blogimg1} alt="" style={{width:'100%'}}/>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <div
                style={{
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                <SubHeading>Lorem Ipsum</SubHeading>
                <Paragraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </Paragraph>
                <br />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <ReadStoryButton>Read the story</ReadStoryButton>
                  <div className='social-icons'>
                    <Link to="#"><img src={FB} alt="" /></Link>
                    <Link to="#"><img src={LinkedIn} alt="" /></Link>
                    <Link to="#"><img src={Twitter} alt="" /></Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mt-35'>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <div
                style={{
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                <SubHeading>Lorem Ipsum</SubHeading>
                <Paragraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </Paragraph>
                <br />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <ReadStoryButton>Read the story</ReadStoryButton>
                  <div className='social-icons'>
                    <Link to="#"><img src={FB} alt="" /></Link>
                    <Link to="#"><img src={LinkedIn} alt="" /></Link>
                    <Link to="#"><img src={Twitter} alt="" /></Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} xxxl={6}>
              <img data-aos="fade-left" src={blogimg2} alt="" style={{width:'100%'}}/>
            </Col>
          </Row>

          <Row className='mt-35'>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
              <img data-aos="fade-up" src={blogimg3} alt="" style={{width:'100%'}}/>
            </Col>
            <Col xs={12} sm={12} md={1} lg={1} xl={1} xxl={1} xxxl={1}></Col>
            <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10} xxxl={10}>
              <div className='postmain'>
                <SubHeading>Lorem Ipsum</SubHeading>
                <Paragraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </Paragraph>
                <br />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <ReadStoryButton>Read the story</ReadStoryButton>
                  <div className='social-icons'>
                    <Link to="#"><img src={FB} alt="" /></Link>
                    <Link to="#"><img src={LinkedIn} alt="" /></Link>
                    <Link to="#"><img src={Twitter} alt="" /></Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={1} lg={1} xl={1} xxl={1} xxxl={1}></Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};
