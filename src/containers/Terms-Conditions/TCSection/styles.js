import styled from 'styled-components';
import Banner1 from '../../../assets/reach.jpg';

export const BannerWrapper = styled.section`
  background-image: url(${Banner1});
  min-height: 65vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    position: absolute;
    left: 30px;
    top: 30px;
  }
`;

export const Wrapper = styled.section`
  background:#fff;
  padding:50px 0;
  h2{
    margin:0 0 15px 0;
    font-size: 82px;
    color: #000;
    font-family: 'Libel Suit Rg';
  }
  p{
    margin-bottom:15px;
  }
`;
