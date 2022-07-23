import styled from 'styled-components';
import Banner1 from '../../../assets/login.jpg';

export const BannerWrapper = styled.section`
  background-image: url(${Banner1});
  min-height: 85vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    position: absolute;
    left: 45%;
    top: 100px;
  }
`;

export const ReadStoryButton = styled.button`
  color: #fff;
  background: #e3ae55;
  border-radius: 5px;
  border: none;
  width: 166px;
  height: 56px;
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  font-family: 'Poppins';
`;

export const PostTitle = styled.div`
  color: #cc9944;
  font-size: 37px;
  font-weight: 400;
`;

export const PostPara = styled.div`
  font-size: 22px;
  color: #535353;
  font-weight: 400;
  font-family: 'Poppins';
`;

export const PostParaTwo = styled.div`
  font-size: 16px;
  color: #535353;
  font-weight: 400;
  font-family: 'Poppins';
  color: #fff;
`;

export const Wrapper = styled.section`
  background:#fff;
  padding-bottom:50px;
  .postmain{
    background-color: #f4f1f6;
    filter: drop-shadow(6.691px 7.431px 9px rgba(80,80,80,0.37));
    padding:20px;
    margin-top:-60px;
    h2{
      margin:0 0 15px 0;
      font-size: 37px;
      color: #cc9944;
      font-weight: 400;
      font-family: "Poppins";
    }
    p{
      margin-bottom:15px;
    }
  }

  .social-icons {
    display: inline-block;
    a {
        margin: 0 5px;
        img {
            height: 25px;
        }
    }
}

`;