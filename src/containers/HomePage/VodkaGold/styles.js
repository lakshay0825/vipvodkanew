import styled from "styled-components";

export const VipVodkaWrapper = styled.section`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  position: relative;

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

  .bg-loop-video {
    width: 100vw;
  }

  .vodkaBottle {
    max-width: 60%;
    height: auto;
  }

  .textGold {
    color: #d6a223;
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
    .bg-loop-video {
      min-width: 500vw;
    }

    .absoluted_data {
      min-height: 100vh;
    }
  }
`;
