import { WrapperDrinks, ModalStyle } from "./styles";
import { Col, Container, Row } from "react-grid-system";
import CarouselData from "./data";
import {PopupContent} from "./PopupContent";
import { useWindowSize } from "../../../utils/useWindowSize";
import { Overlay } from "../../../components/overlay";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Drinks = () => {

  const [width] = useWindowSize();
  const variable = width <= 456 ? 430 : 475;
  const responsive = variable - width;

  return (
    <WrapperDrinks responsive={responsive}>
        <Overlay className="overlay">
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
                <div data-aos="fade-up" className="textCenter">
                  <h2 className="capitalize  fw-500  textWhite main-title">
                    VIP ICE DRINKS
                  </h2>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
                <div data-aos="zoom-in-up" className="drink-wrapper">
                <Row>
                    {CarouselData?.map((item, index) => {
                      return (
                        <Col className="mb-30" key={index} xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} xxxl={3}>
                          <Popup
                            trigger={
                              <div className="flex alignCenter justifyCenter flexDirection drink-main" style={{background:item?.backgroundGradient}}>
                              <img
                                className="img-responsive"
                                src={item?.img}
                                alt="carousel "
                              />
                              <div className="mt-20 mb-30 textWhite textCenter">
                                <h2 className="title">{item?.title}</h2>
                                <h5 className="flavor">{item?.flavor}</h5>
                              </div>
                            </div>
                            }
                            modal
                            nested
                          >
                            {close => (
                              <ModalStyle>
                                <div className="modal" style={{backgroundImage:`url(`+item.bg+`)`}}>
                                  <button className="close" onClick={close}>
                                    &times;
                                  </button>
                                  <PopupContent data={item}/>
                                </div>
                              </ModalStyle>
                            )}
                          </Popup>

                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Overlay> 
    </WrapperDrinks>
  );
};
