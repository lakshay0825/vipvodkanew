import styled from "styled-components";
export const ModalStyle = styled.section`
.modal {
  background:#000;
  border-radius:20px;
  padding:50px 20px;
  >.content {
    width: 100%;
    padding: 10px 5px;
    backgrund:#000;
  }
  >.actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  >.close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  }
}`;

export const WrapperDrinks = styled.section`
  position: relative;
  overflow: hidden;
    .overlay {
      background-color: #00000052 !important;
      width: 100%;
      height: 100%;
  }

  @media (max-width: 768px) {
    overflow: hidden;

  }

  @media (max-width: 1650px) {

  }
  @media (max-width: 1366px) {

  }
  @media (max-width: 1300px) {

  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 992px) {
  }

  .main-title {
    font-size: 44px;
    letter-spacing: 12px;
    color: #ffffff;
    font-weight: 300;
  }
  .drink-wrapper{
    .drink-main{
      border-top-right-radius: 130px;
      padding: 20px;
      h2{
        margin:0 0 5px 0;
        font-size: 28px;
        letter-spacing: 3px;
        font-weight: 400;
      }
      h5{
        margin:0;
        font-size: 13px;
        font-weight: 400;
        color:#575a58;
      }
    }
  }

  @media (max-width: 768px) {

  }
`;

export const MimosaWrapp = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  .popup-content {
    width: 70%;
    padding: 0;
    background: transparent;
    border: none;
}

.popup-overlay {
    z-index: 99999 !important;
}

.share-icons {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row-reverse;
  a {
    margin: 0 5px;
  }

  img {
    width: 30px;
  }
}
  .title{
    font-size: 75px;
    color: rgb(212, 100, 42);
    font-weight: 500;
    font-family: Oswald;
    margin-bottom: 0px;
    margin-top: 15px;
    line-height:80px;
  }
  .subheading{
    margin-bottom: 15px;
    margin-top:0px;
    color: #fff;
    letter-spacing: 8px;
    font-weight: 400;
    font-family: 'Oswald';
  }
  .buyNowBtn,
  .addCartBtn {
    margin: 20px 5px 0 5px;
    width: 150px;
    height: 40px;
    line-height:40px;
    border-radius: 49px;
    background-color: #000000;
    border: 1px solid #e3ae55;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    font-family: 'Open Sans';
    cursor: pointer;
    padding:0px;
  }

  .superCoinBtn {
    margin: 20px 0;
    width: 250px;
    height: 40px;
    line-height:40px;
    padding:0px;
    border-radius: 33px;
    background-color: #000000;
    border: 0.5px solid #e3ae55;
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
    font-family: 'Open Sans';
    cursor: pointer;
    img {
      width: 14px;
      vertical-align: middle;
    }
  }

  @media (max-width: 1200px) {

  }
  @media (max-width: 768px) {

  }
`;
