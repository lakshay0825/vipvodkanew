import styled from "styled-components";
import BGIMG from "../../../assets/homePage/vipSection/vipVodkaBg.jpg";

export const VipVodkaWrapper = styled.section`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  background-image: url(${BGIMG});
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;

  .overlay {
    min-height: 100vh;
    width: 100%;
    background-color: #00000057 !important ;
  }

  .vodkaBottle {
    max-width: 70%;
    height: auto;
  }

  @media (max-width: 1200px) {
    .vodkaBottle {
      max-width: 70% !important;
      height: auto;
    }
  }
  @media (max-width: 768px) {
    overflow: hidden;
    .vodkaBottle {
      max-width: 100% !important;
      height: auto;
    }
  }
`;
