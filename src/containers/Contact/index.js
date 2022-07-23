import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { LogoBanner } from "./LogoBanner";
import { BannerSection } from "./BannerSection";
import { ContactForm } from "./ContactForm";
export const Contact = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <ContactForm />
      <LogoBanner />
      <Footer />
    </>
  );
};
