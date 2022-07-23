import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
    0%{
        top: -150% ;
        opacity: 0  ;
    }
    50%{
        top: 0 ;
        opacity: 0 ;
    }
    100%{
        top: 0 ;
        opacity: 1  ;
    }
`;
const fadeOut = keyframes`
        0%{
            top: 0 ;
            opacity: 0  ;
        }
        50%{
            top: 0 ;
            opacity: 0 ;
        }
        100%{
            top: -150% ;
            opacity: 0  ;
        }
`;
export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  z-index: 11111;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .social {
    padding: 11px 0px;
    display: flex;
    justify-content: flex-end;
    i.facebook {
      font-size: 21px !important ;
    }
    i {
      font-size: 25px;
      color: white;
      transition: 0.2s all ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .toggle {
    width: 55px;
    height: 55px;
    background-color: #815308;
    padding: 0 10px;
    z-index: 1111;
    cursor: pointer;
    .bar {
      width: 80%;
      height: 3px;
      background: ${(props) => (props?.toggle ? "transparent" : "white")};
      position: relative;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s all ease-in-out;

      &:before {
        position: absolute;
        content: "";

        width: 100%;
        height: 100%;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        transform: ${(props) =>
          props?.toggle ? `rotate(45deg)` : `rotate(0)`};
        top: ${(props) => (props?.toggle ? `10px` : `-13px`)};
      }
      &:after {
        position: absolute;
        content: "";
        bottom: -13px;
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        transform: ${(props) =>
          props?.toggle ? `rotate(-45deg)` : `rotate(0)`};
      }
    }
    &:hover .bar {
      transform: scale(1.06);
    }
  }

  .toggle-content {
    position: fixed;
    height: 100vh;
    background: #815308;
    left: 0;
    width: 100%;
    padding: 80px 80px;

    /* transition: 0.6s all ease-in-out; */
  }

  .toggle-on {
    animation-name: ${fadeIn};
    animation-duration: 0.6s;
    animation-iteration-count: ease-in;
  }
  .toggle-off {
    animation-name: ${fadeOut};
    animation-duration: 0.6s;
    animation-iteration-count: ease-out;
    transition: 0.6s all ease-in-out;
    opacity: 0;
    top: -150%;
  }

  .link-list {
    list-style: none;

    li {
      margin: 30px 0;
      position: relative;
      left: 0;
      transition: 0.3s all ease-in-out;
      a {
        font-size: 30px;
        outline: none;
        text-decoration: none;
        font-weight: 600;
        color: #fff;
        text-transform: uppercase;
      }
    }
    li:hover {
      left: 10px;
    }
  }
`;
