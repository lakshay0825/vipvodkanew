import styled from 'styled-components';
import Banner1 from '../../../assets/vip-signup.jpg';

export const BannerWrapper = styled.section`
  background-image: url(${Banner1});
  min-height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .logo {
    position: absolute;
    left: 30px;
    top: 30px;
  }
  .poster-content {
    padding: 100px 0;

    .social-icons-div{
      text-align: center;
      a{
        text-decoration: none;
        color: #e3ae55;
        margin: 0 0.6rem;
      }
      a:hover{
        opacity: 0.6;
      }
    }

    .form {
      text-align: center;
      .form-item {
        padding: 10px 0;
        position: relative;
        input,
        textarea, select {
          border-radius: 20px;
          border: none;
          width: 70%;
          padding: 0.9rem 2.6rem;
          outline: none;
          background-color: #fff;
          color: grey;
          font-family: 'Oswald', sans-serif;
          font-size: 1.3rem;
        }
        .form-icon{
          position: absolute;
          top: 1.8rem;
          left: 2.2rem;
          color: grey;
        }
        button {
          width: 12rem;
          padding: 1rem 2.3rem;
          margin-top: 2rem;
          background-color: transparent;
          border: 1.7px solid #e3ae55;
          ${'' /* height: 79px; */}
          border-radius: 39px;
          font-size: 1.3rem;
          letter-spacing: 0.26rem;
          color: #ffffff;
          font-family: "Avenir Next LT Pro";
          text-align: center;
          cursor: pointer;
        }
        button:hover{
          background-color: #e3ae55;
          color: black;
          opacity: 0.6;
        }
        .custom-checkbox {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 15px;
          color:#fff;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            &:checked {
              ~ {
                .checkmark {
                  &:after {
                    display: block;
                  }
                }
              }
            }
          }
          &:hover {
            input {
              ~ {
                .checkmark {
  
                }
              }
            }
          }
          .checkmark {
            &:after {
              left: 9px;
              top: 5px;
              width: 5px;
              height: 10px;
              border: solid white;
              border-width: 0 3px 3px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: transparent;
          border: solid 1px #efbb62;
          &:after {
            content: "";
            position: absolute;
            display: none;
          }
        }
  
      }
    }
    
  }

  .title-style {
    font-size: 128px;
    color: #efbb62;
    margin: 0;
  }
  @media (max-width: 992px) {
    .bottle_image_wrapper {
      img {
        max-width: 100px;
      }
      .title-style,.subtitle-style{ {
        font-size: 90px;
      }
    }
  }
  @media (max-width: 895px) {
    .bottle_image_wrapper {
      img {
        max-width: 100px;
      }
      .title-style,.subtitle-style{ {
        font-size: 80px;
      }
    }
  }
  @media (max-width: 651px) {
    .bottle_image_wrapper {
      img {
        max-width: 80px;
      }
      .title-style,.subtitle-style{ {
        font-size: 60px;
      }
    }
  }
  @media (max-width: 500px) {
    .bottle_image_wrapper {
      img {
        max-width: 50px;
      }
      .title-style,.subtitle-style{ {
        font-size: 40px;
      }
    }
  }
  @media (max-width: 300px) {
    .bottle_image_wrapper {
      img {
        max-width: 35px;
      }
      .title-style,.subtitle-style{ {
        font-size: 30px;
      }
    }
    .logo img {
      max-width: 100px;
    }
  }
`;
