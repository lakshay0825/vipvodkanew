import styled from 'styled-components';

export const VIPVodkaWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  min-height: 150vh;

  .absoluted_data {
    background-color: #020f1f40;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1111;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .appleMartiniBottle {
    max-width: 66%;
    height: auto;
  }

  .buyNowBtn,
  .addCartBtn {
    margin: 20px 0 0 0;
    width: 200px;
    height: 68px;
    border-radius: 49px;
    background-color: #000000;
    border: 1px solid #e3ae55;
    font-size: 33px;
    color: #ffffff;
    font-weight: 600;
    font-family: 'Open Sans';
    cursor: pointer;
  }

  .superCoinBtn {
    margin: 20px 0;
    width: 325px;
    height: 63px;
    border-radius: 31px;
    background-color: #000000;
    border: 0.5px solid #e3ae55;
    font-size: 17px;
    color: #ffffff;
    font-weight: 400;
    font-family: 'Open Sans';
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    .appleMartiniBottle {
      max-width: 70% !important;
      height: auto;
    }
  }
  @media (max-width: 768px) {
    min-height: 250vh;
    overflow: hidden;
    .appleMartiniBottle {
      max-width: 100% !important;
      height: auto;
    }
    .absoluted_data {
      min-height: 100vh;
    }
  }
`;
