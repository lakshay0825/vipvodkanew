import { BannerWrapper,Wrapper } from './styles';
import Logo from '../../../assets/logo.png';
import { Col, Container, Row } from 'react-grid-system';
import { Paragraph, SubHeading } from '../../../components';

export const PPSection = () => {
  return (
    <>
      <BannerWrapper>
        <div className='logo'>
          <a href='/'>
            <img src={Logo} alt='logo' />
          </a>
        </div>
        <SubHeading>
          Privacy Policy
        </SubHeading>
      </BannerWrapper>
      <Wrapper>
        <Container style={{ width: '100%' }}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
              <SubHeading>
                Privacy Policy
              </SubHeading>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Paragraph>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Paragraph>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Paragraph>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};
