import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BannerWrapper } from './styles';
import Logo from '../../../assets/logo.png';
import { Col, Container, Row } from 'react-grid-system';
import { Paragraph, SubHeading } from '../../../components';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const SignupSection = () => {
  return (
    <BannerWrapper>
      <div className='logo'>
        <a href='/'>
          <img src={Logo} alt='logo' />
        </a>
      </div>
      <div className='poster-content' style={{ width: '100%' }}>
        <div
          className='bottle_image_wrapper flex alignCenter justifyCenter'
          style={{ paddingTop: '90px' }}>
          <Container style={{ width: '100%' }}>
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} xxxl={5}>
                <SubHeading
                  style={{
                    fontSize: '3rem',
                    color: '#fff',
                    marginBottom: '15px',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontFamily: 'Open Sans',
                    letterSpacing: '2px'
                  }}>
                  Create Account
                </SubHeading>
                <div className='social-icons-div'>
                  <a href='/'><FacebookOutlinedIcon fontSize="large"/></a>
                  <a href='/'><TwitterIcon fontSize="large"/></a>
                  <a href='/'><LinkedInIcon fontSize="large"/></a>
                </div>
                <Paragraph
                  style={{
                    fontSize: '1.2rem',
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Avenir Next LT Pro',
                  }}>
                  or use your email account:
                </Paragraph>
                <div className='form'>
                  <form>
                    <div className='form-item'>
                     <input  placeholder='Name' />
                     <PermIdentityIcon className='form-icon' />
                    </div>
                    <div className='form-item'>
                      <input placeholder='Email' type='email' />
                      <MailOutlineIcon className='form-icon' />
                    </div>
                    <div className='form-item'>
                      <input placeholder='Password' type='password' />
                      <LockOutlinedIcon className='form-icon' />
                    </div>
                    <div className='form-item'>
                      <input placeholder='Confrim Password' type='password' />
                      <LockOutlinedIcon className='form-icon' />
                    </div>
                    <div className='form-item'>
                      <button type='submit'>Sign Up</button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </BannerWrapper>
  );
};
