import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { all_routes } from "../../../router/all_routes";
import "./Banner.css";

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
    <section className="banner-section-four position-relative">
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
            src="https://dynamic.heygen.ai/www/Home%20-%20Page/Scene-1%20(3)%20(1).webm/ik-video.mp4?updatedAt=1742260077867#t=0.01"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Mute / Unmute Button */}
        <button className="mute-btn" onClick={toggleMute}>
          {muted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Text Content */}
      <div className="container position-relative h-100 d-flex align-items-center">
        <div className="text-content">
          <h1 className="banner-title">
            An Interactive AI Avatars’ Marketplace for education sector is
            designed to transform education and professional development into
            revenue-generating ecosystems
          </h1>
          <p className="banner-description">
            Fast, simple, and incredibly powerful.
            <br />
            Enabling personalised AI learning, scalable teaching, and monetised
            earning opportunities via course/content selling across the EdTech,
            Corporate L&amp;D, Universities, and Community platforms. -{" "}
            <strong>Powered by AI</strong>
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
    </section>
  );
};

export default Banner;
