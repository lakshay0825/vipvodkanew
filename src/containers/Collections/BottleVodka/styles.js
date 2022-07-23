import styled from "styled-components";
export const WrapperReachHistory = styled.section`
  overflow-x: hidden;
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .overlay {
    background-color: #00000057 !important ;
  }
  video.bg-loop-video {
    width: 100%;
  }
  .video_content {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    padding-bottom: 20px;
    h2{
      font-size: 32px;
      font-weight: 300;
      margin:0 0 15px 0;
    }
    a{
      width: 45px;
      height: 45px;
      line-height: 43px;
      font-size: 24px;
      color: #fff;
      border: solid 1px;
      display: inline-block;
      background: rgba(0,0,0,0.6);
    }
  }
`;