import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { LogoBanner } from "./LogoBanner";
import { BannerSection } from "./BannerSection";
import { ReachHistory } from "./ReachHistory";
import { BottleVodka } from "./BottleVodka";
import { Drinks } from "./Drinks";
import { VideoIntroduction } from "./VideoIntroduction";
export const Collections = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <ReachHistory />
      <BottleVodka />
      <Drinks />
      <VideoIntroduction />
      <LogoBanner />
      <Footer />
    </>
  );
};
