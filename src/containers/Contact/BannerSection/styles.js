import styled from "styled-components";
import Banner1 from "../../../assets/contact_bg.jpg";

export const BannerWrapper = styled.section`
  background-image: url(${Banner1});
  min-height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  .logo {
    position: absolute;
    left: 30px;
    top: 30px;
  }
  .poster-content {
    padding: 100px 0;
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
