import { WrapperReachHistory } from "./styles";
import { Overlay } from "../../../components/overlay";
import { Container, Row, Col } from "react-grid-system";
import { useRef, useEffect } from "react";
import Bottle1 from "../../../assets/collections/Black_360.mp4";
import Bottle2 from "../../../assets/collections/Ice_360.mp4";
import Bottle3 from "../../../assets/collections/Gold_360.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export const BottleVodka = () => {
    const play = useRef();
    const playVodka = useRef();
  
    useEffect(() => {
      if (play?.current) {
        play?.current?.play();
        playVodka?.current?.play();
      }
    }, [play]);
    return(
        <WrapperReachHistory>
            <Overlay className="overlay">
            <Container fluid>
            <Row debug>
            <Col data-aos="fade-right" style={{padding:0}} xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
                <video className="bg-loop-video" ref={play} muted autoPlay loop>
                    <source src={Bottle1} type="video/mp4" />
                </video>
                <div className="video_content textCenter textWhite">
                    <h2>VIP VODKA BLACK</h2>
                    <a href="/"><FontAwesomeIcon icon={faPlus} /></a>
                </div>
            </Col>
            <Col data-aos="fade-up" style={{padding:0}} xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
                <video className="bg-loop-video" ref={play} muted autoPlay loop>
                    <source src={Bottle2} type="video/mp4" />
                </video>
                <div className="video_content textCenter textWhite">
                    <h2>VIP VODKA ICE</h2>
                    <a href="/"><FontAwesomeIcon icon={faPlus} /></a>
                </div>
            </Col>
            <Col data-aos="fade-left" style={{padding:0}} xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
                <video className="bg-loop-video" ref={play} muted autoPlay loop>
                    <source src={Bottle3} type="video/mp4" />
                </video>
                <div className="video_content textCenter textWhite">
                    <h2>VIP VODKA GOLD</h2>
                    <a href="/"><FontAwesomeIcon icon={faPlus} /></a>
                </div>
            </Col>
            </Row>
            </Container>
            </Overlay>
        </WrapperReachHistory>
    );
};
