import styled from "styled-components";
import ReachBg from "../../../assets/reach.jpg";

export const WrapperReachHistory = styled.section`
  overflow-x: hidden;
  background-image: url(${ReachBg});
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .overlay {
    min-height: 100vh;
    padding: 40px 0;
    background-color: #00000057 !important ;
  }

  .title,
  .details {
    color: #fff;
  }

  .image {
    height: auto;
    max-width: 100%;
  }

  .wrapper-info {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`;
