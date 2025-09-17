import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const RegisterLoading: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <div className="main-wrapper">
        <div
          className="login-content d-flex align-items-center justify-content-center min-vh-100"
          style={{
            background: "linear-gradient(to right, #feeef0, #576eeeff)",
            position: "relative",
          }}
        >
          {/* Animated Emoji */}
          <div
            style={{
              position: "absolute",
              zIndex: 10,
              textAlign: "center",
              fontSize: "3rem",
              animation: "bounce 1s infinite",
            }}
          >
            🎉
            <br />
            <p>We are setting up your business...</p>
          </div>

          {/* Confetti */}
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={200}
          />
        </div>
      </div>

      {/* Keyframes for bounce */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </>
  );
};

export default RegisterLoading;
