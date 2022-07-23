import Logo from "../../../assets/logo.png";
import { WrapperLogoBanner } from "./styles";
export const LogoBanner = () => {
  return (
    <WrapperLogoBanner className="flex alignCenter justifyCenter">
      <img
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="logo"
        src={Logo}
        alt="logo"
      />
    </WrapperLogoBanner>
  );
};
