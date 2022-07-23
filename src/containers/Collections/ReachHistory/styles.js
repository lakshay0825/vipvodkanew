import styled from "styled-components";
import ReachBg from "../../../assets/collections/reach.png";

export const WrapperReachHistory = styled.section`
  overflow-x: hidden;
  background-image: url(${ReachBg});
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .overlay {
    padding: 100px 0;
    background-color: #00000057 !important ;
  }

  .title{
    color: #b9893e;
    font-size: 42px;
    font-weight: 300;
    margin-top:0;
  }
  .details {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    font-family: "Open Sans";

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
