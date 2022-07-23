import { useState } from "react";
import { NavbarWrapper } from "./styles";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <NavbarWrapper toggle={toggle}>
      <div className="social">
        <i className="facebook mr-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            />
          </svg>
        </i>
        <i className="twitter mr-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
            />
          </svg>
        </i>
        <i className="youtube mr-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
            />
          </svg>
        </i>
        <i className="googlePlus mr-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3c-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8c.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3c27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97c54.2 1.8 108.5 1 162.7 1.8c-23.9 120.3-187.4 159.3-273.9 80.7c-89-68.9-84.8-220 7.7-284c64.7-51.6 156.6-38.9 221.3 5.8c25.4-23.5 49.2-48.7 72.1-74.7c-53.8-42.9-119.8-73.5-190-70.3c-146.6-4.9-281.3 123.5-283.7 270.2c-9.4 119.9 69.4 237.4 180.6 279.8c110.8 42.7 252.9 13.6 323.7-86c46.7-62.9 56.8-143.9 51.3-220c-90.7-.7-181.3-.6-271.9-.3z"
            />
          </svg>
        </i>
      </div>
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className="toggle flex alignCenter justifyCenter"
      >
        <div className="bar"></div>
      </div>
      <div className={`toggle-content ${toggle ? `toggle-on` : "toggle-off"}`}>
        <ul className="link-list">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/philosophy">Our Philosophy</Link>
          </li>
          <li>
            <Link to="/collections">Collection</Link>
          </li>
          {/* <li>
            <Link to="">New Products</Link>
          </li>
          <li>
            <Link to="">Cocktails</Link>
          </li> */}
          <li>
            <Link to="/my-order">My Order</Link>
          </li>
          <li>
            <Link to="/order-history">Order History</Link>
          </li>
          {/* <li>
            <Link to="/press-release">Press Release</Link>
          </li> */}
          <li>
            <Link to="/vip-press-release">VIP Press Release</Link>
          </li>
          <li>
            <Link to="/vipcryptocurrency">VIP Cryptocurrency</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </NavbarWrapper>
  );
};
