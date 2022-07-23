import styled from "styled-components";
import BGIMG from "../../../assets/homePage/RefinedVodka/RefinedVodkaBg.png";
export const WrapperRefinedVodka = styled.section`
  background-image: url(${BGIMG});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50% 60vh;
  background-color: #000000;
  overflow: hidden;

  @media (max-width: 768px) {
    background-position: center !important;
    background-size: 100%;
  }
  .overlay {
    min-height: 90vh;
    padding: 60px 0 0 0;
  }

  .main-title {
    margin-bottom: 50px;
    h2 {
      font-size: 44px;
      color: #cb8c31;
      margin: 0;
    }
    .para {
      font-size: 20px;
    }
  }
  .maturation {
    margin-top: 60px;
  }
  .malting {
    .title {
      font-size: 40px;
    }
    img {
      max-width: 110px;
    }
    .para {
      font-size: 20px;
    }
  }
  .bottlesImage{
    img{
      margin-top: 3rem;
    }
  }
`;
