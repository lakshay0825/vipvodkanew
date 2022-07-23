import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
// import Logo from "../../../assets/logo.png";
import { BannerSection } from "./BannerSection";
import Middle from "./Middle";
import Vip from "./Vip";

export const Philosophy = () => {
    return (
      <>
        <Navbar />
        <BannerSection />
        <Middle />
        <Vip />
        <Footer />
      </>
    );
  };