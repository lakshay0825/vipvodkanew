import styled from "styled-components";
import BG from "../../assets/footerBg.png";
export const FooterWrapper = styled.footer`
  overflow: hidden;
  position: relative;
  .custom-col {
    background-color: #171717;
  }
  .form {
    padding: 40px 0 40px 50px;
    p{
      color: #cb8c31;
      font-style: italic;
      font-size: 0.8rem;
      opacity: 0.5;
    }
    .form-item {
      padding: 10px 0;
      input{
        border: none;
        border-bottom: 2px dotted rgb(128,128,128, 0.5);
        width: 100%;
        padding: 14px 0;
        outline: none;
        background-color: transparent;
        color: white;
      }
      button {
        padding: 14px 40px;
        border-radius: 0;
        border: none;
        background: black;
        color: white;
        cursor: pointer;
      }
    }
  }

  input::placeholder {
    font-family: 'Open Sans';
    font-weight: bold;
    font-style: italic;
  }

  .links-col {
    background-image: url(${BG});
    background-position: center;
    background-size: cover;
    position: relative;
  }
  .contact_us_links {
    padding: 40px 50px 40px 50px;

    h2 {
      font-size: 26px;
    }

    .address {
      .inc {
        margin: 1rem 0 1rem;
        font-style: italic;
        font-size: 0.8rem;
        line-height: 21px;
        letter-spacing: 0.8px;
      }
    }

    .call {
      h4 {
        font-style: italic;
        font-size: 0.7;
        font-weight: lighter;
        letter-spacing: 0.8px;
        margin-bottom: 1rem;
      }
      .numbers p {
        margin: 0;
        font-style: italic;
        line-height: 21px;
        letter-spacing: 0.8px;
      }
    }
  }
  p {
    margin: 0;
  }

  .courtesy {
    position: absolute;
    text-align: right;
    bottom: 1rem;
    right: 1rem;
    width: 100%;

    .designedby {
      text-align: center;
      p,
      a {
        color: #969696;
        letter-spacing: 1.4px;
        word-spacing: 1px;
      }
      a {
        text-decoration: none;
        cursor: pointer;
        font-weight: 600;
      }
    }

    .copyright {
      display: inline-block;
      p {
        color: white;
        font-size: 0.6;
        opacity: 0.5;
        letter-spacing: 0.9px;
      }
    }
  }

  .flags {
    max-width: 36px;
  }
`;
