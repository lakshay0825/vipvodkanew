import styled, { keyframes } from "styled-components";
import Logo from "../../assets/logo.png";

export const Loader = () => {
  return (
    <WrapperLoader className="flex alignCenter justifyCenter">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
    </WrapperLoader>
  );
};

const zoomin = keyframes`
0%{
    transform: scale(0.1);
}
100%{
    transform: scale(1) ;
}

`;

const WrapperLoader = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;

  .logo {
    height: 249px;
    width: 249px;
    text-align: center;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 9px 19px 39px -26px #a58146;
    animation-name: ${zoomin};
    animation-duration: 8s;
    animation-iteration-count: linear;
  }
`;
