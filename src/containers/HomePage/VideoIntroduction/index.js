import { WrapperVideoInfo } from "./styles";
import "video-react/dist/video-react.css";
import { useRef, useState } from "react";

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
          <div className={`poster ${!playing ? "poster-visible" : ""}`}>
            <i onClick={playVideo} className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </g>
              </svg>
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
        {/* <Player
          ref={ref}
          fluid={true}
          poster={Poster}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
          <ControlBar autoHide={true} disableCompletely={true} />
        </Player> */}
      </div>
    </WrapperVideoInfo>
  );
};
