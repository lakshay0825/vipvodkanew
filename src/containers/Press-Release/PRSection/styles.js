import styled from 'styled-components';
import Banner1 from '../../../assets/login.jpg';

export const BannerWrapper = styled.section`
  background-image: url(${Banner1});
  min-height: 50vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    position: absolute;
    left: 30px;
    top: 30px;
  }
`;

export const CardBorder = styled.div`
  padding: 10px;
  border-bottom: 1px solid #d6aa5e;
  border-right: 1px solid #d6aa5e;
  border-left: 1px solid #d6aa5e;
`;
