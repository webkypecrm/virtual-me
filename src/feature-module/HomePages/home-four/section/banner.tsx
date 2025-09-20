import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { all_routes } from "../../../router/all_routes";
import "./Banner.css";
// import bannerVideo from "../../../../../public/assets/video/banner/VirtualXai_ Your Digital Legacy.mp4";

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
    <section className="banner-section-four">
      {/* Video on right side, smaller & lower */}

      {/* Text Content */}
      <div className="container ">
        <div className="row ">
          <div className="col-lg-5">
            <div className="text-content">
              <h3 className="banner-title" style={{ fontSize: "24px" }}>
                An Interactive AI Avatars’ Marketplace for education sector is
                designed to transform education and professional development
                into revenue-generating ecosystems
              </h3>
              <p className="banner-description">
                Fast, simple, and incredibly powerful.
                <br />
                Enabling personalised AI learning, scalable teaching, and
                monetised earning opportunities via course/content selling
                across the EdTech, Corporate L&amp;D, Universities, and
                Community platforms. - <strong>Powered by AI</strong>
              </p>

              {/* <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(route.courseList);
            }}
            className="banner-form mt-4"
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control banner-input"
                placeholder="Enter your idea..."
              />
              <button className="btn btn-secondary sub-btn1" type="submit">
                <i className="fa-solid fa-magnifying-glass me-2" />
                Generate
              </button>
            </div>
          </form> */}
            </div>
          </div>
          <div className="col-lg-7 h-100">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
