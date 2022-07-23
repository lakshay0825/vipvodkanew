import { WrapperVideoInfo } from "./styles";
import "video-react/dist/video-react.css";
import { useRef, useState } from "react";
import playIcon from "../../../assets/collections/play.png";
export const VideoIntroduction = () => {
  const ref = useRef();
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    ref?.current?.play();
    setPlaying(true);
  };

  return (
    <WrapperVideoInfo
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
    >
      <div className="wrapper-video">
        <div className="poster-wrapper">
          <div className={`poster flexDirection ${!playing ? "poster-visible" : ""}`}>
            <i onClick={playVideo} className="play-icon">
              <img src={playIcon} alt='playicon'/>
            </i>

            <p className="textWhite video-text">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
        </div>

        <video
          className="video-player"
          onEnded={() => {
            setPlaying(false);
          }}
          ref={ref}
          width={"100%"}
          controls={playing}
        >
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </WrapperVideoInfo>
  );
};
