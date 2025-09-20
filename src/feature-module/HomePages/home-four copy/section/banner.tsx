import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { all_routes } from "../../../router/all_routes";
import "./Banner.css";
import bannerVideo from "../../../../../public/assets/video/banner/VirtualXai_ Your Digital Legacy.mp4";

const Banner = () => {
  // const route = all_routes;
  // const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setMuted(newMuted);
    }
  };

  return (
    <section className="banner-section-four2   position-relative">
      {/* Video on right side, smaller & lower */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-background"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="auto"
        >
          <source
            // src={bannerVideo}
            src="https://res.cloudinary.com/drj0uehgx/video/upload/v1758343058/VirtualXai__Your_Digital_Legacy_bpvs50.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Mute / Unmute Button */}
        <button className="mute-btn" onClick={toggleMute}>
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </section>
  );
};

export default Banner;
