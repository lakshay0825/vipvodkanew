import styled from "styled-components";

export const BannerWrapper = styled.section`
  .bb{
    min-height: 100vh;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bimg{
    width: 100vw;
    height: 100vh;
  }
  
  .logo {
    position: absolute;
    left: 30px;
    top: 30px;
  }

  .bottle_image_wrapper{
    color: white;
    img{
      height: 80vh;
    }
  }

  .poster-content {
    position: absolute;
    top: 0;
    left: 25%;
    padding: 100px 0;
    p{
      color: white;
      font-size: 1.7rem;
      font-weight: lighter;
      letter-spacing: 1rem;
    }
  }

  .GoldenBottle{
    top: 0;
    left: 15%;
  }

  .arrow-button{
      color: white;
      font-size: 3rem; 
      font-weight: lighter;
  }

  .arrow-prev-button{
      position: absolute;
      top: 50%;
      left: 2%;
      cursor: pointer;
  }

  .arrow-next-button{
      position: absolute;
      top: 50%;
      right: 1%;
      cursor: pointer;
  }

  .title-style {
    font-size: 100px;
    margin: 0;
  }
  .left_title {
    margin-top: -100px;
    margin-right: -10%;
    text-align: right;
  }
  .right-title {
    margin-top: 20%;
    margin-left: -10%;
  }

  ${'' /* black bottle */}
  .blackBottle{
    h1{
      color: rgba(227,174,85,255);
    }
  } 

  @media (max-width: 992px) {
    .bottle_image_wrapper {
      img {
        max-width: 100px;
      }
      .title-style {
        font-size: 90px;
      }
    }
  }
  @media (max-width: 895px) {
    .bottle_image_wrapper {
      img {
        max-width: 100px;
      }
      .title-style {
        font-size: 80px;
        font-weight: 600;
      }
    }
    .logo img {
      max-width: 90px;
    }
  }
  @media (max-width: 651px) {
    .bottle_image_wrapper {
      img {
        max-width: 100%;
      }
      .title-style {
        font-size: 60px;
        font-weight: 600;
      }
    }
    .logo img {
      max-width: 90px;
    }
  }
  @media (max-width: 500px) {
    .bottle_image_wrapper {
      margin-top: 10%;
      img {
        max-width: 100%;
        height: 70vh;
      }
      .title-style {
        font-size: 33px;
        font-weight: 600;
      }
      p{
        letter-spacing: 0.4rem;
      }
    }
    .logo img {
      max-width: 90px;
    }
    .left_title {
      margin-right: -30%;
    }
    .right-title {
      margin-top: 80%;
      margin-left: -30%;
    }
  }
  @media (max-width: 300px) {
    .bottle_image_wrapper {
      img {
        max-width: 35px;
      }
      .title-style {
        font-size: 30px;
        font-weight: 600;
      }
    }
    .logo img {
      max-width: 80px;
    }
  }
`;
