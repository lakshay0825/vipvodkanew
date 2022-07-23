import styled from "styled-components";
import contactbg from "../../../assets/contactbg.png";

export const WrapperContact = styled.section`
  background-color: #000000;
  padding: 40px 0;
  overflow-x: hidden;
  background-image: url(${contactbg});
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .textGolden{
    color: #efbb62;
  }
  .form {

    .form-item {
      padding: 10px 0;
      input,
      textarea, select {
        border: none;
        border-bottom: 1px solid #efbb62;
        width: 100%;
        padding: 14px 0;
        outline: none;
        background-color: transparent;
        color: white;
        font-family: 'Oswald', sans-serif;
        font-size: 18px;
      }
      button {
        padding: 14px 30px;
        border-radius: 0;
        border: 1px solid #efbb62;
        background: transparent;
        color: white;
        cursor: pointer;
      }
      .custom-checkbox {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        color:#fff;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
          &:checked {
            ~ {
              .checkmark {
                &:after {
                  display: block;
                }
              }
            }
          }
        }
        &:hover {
          input {
            ~ {
              .checkmark {

              }
            }
          }
        }
        .checkmark {
          &:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
      }
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: solid 1px #efbb62;
        &:after {
          content: "";
          position: absolute;
          display: none;
        }
      }

    }
  }
`;
