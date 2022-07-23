import { MimosaWrapp } from './styles';
import { Container, Row, Col } from 'react-grid-system';
// import MimosaImage from '../../../assets/collections/img1.png';
import { useWindowSize } from '../../../utils/useWindowSize';
import { Paragraph, SubHeading } from '../../../components';
import { Link } from 'react-router-dom';
import ShareImg from "../../../assets/share.png";
import HeartImg from "../../../assets/heart.png";
import CoinImg from "../../../assets/coin.png";

export const PopupContent = ({data}) => {
  const [width] = useWindowSize();
  console.log(data);
  return (
    <>
      <MimosaWrapp>
          <Container>
            <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
                <div className='share-icons'>
                    <Link to="#"><img src={ShareImg} alt="share"/></Link>
                    <Link to="#"><img src={HeartImg} alt="heart"/></Link>
                </div>
            </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
                <div className={width <= 786 ? 'textCenter' : 'textRight'}>
                  <img
                    className='appleMartiniBottle img-responsive'
                    data-aos='fade-up'
                    data-aos-duration='3000'
                    src={data.img}
                    alt={data.title}
                  />
                </div>
              </Col>
              <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} xxxl={8}>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
                    <div
                      data-aos='fade-down'
                      data-aos-easing='linear'
                      data-aos-duration='1500'
                      className='mt-25'>
                      <SubHeading
                        className='uppercase title' style={{color:data.titleColor}}>
                        {data.title}
                      </SubHeading>
                      <Paragraph className="subheading">
                        Ice Drinks
                      </Paragraph>
                      <Paragraph
                        className='textWhite'
                        style={{
                          fontSize: '16px',
                          fontWeight: 400,
                          fontFamily: 'Open Sans',
                        }}>
                        {data.content}
                      </Paragraph>
                    </div>
                  </Col>
                </Row>
                <Row Align="center">
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
                    <button className='buyNowBtn uppercase'>Buy Now</button>
                    <button className='addCartBtn uppercase'>Add to Cart</button>
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
                      You can use super coing <img src={CoinImg} alt="coin"/>
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
      </MimosaWrapp>
    </>
  );
};
