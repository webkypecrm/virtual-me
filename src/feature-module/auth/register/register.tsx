import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";

const hasNumber = (value: string): boolean => /[0-9]/.test(value);
const hasMixed = (value: string): boolean =>
  /[a-z]/.test(value) && /[A-Z]/.test(value);
const hasSpecial = (value: string): boolean => /[!#@$%^&*)(+=._-]/.test(value);

const strengthColor = (count: number): string => {
  if (count < 1) return "poor";
  if (count < 2) return "weak";
  if (count < 3) return "strong";
  if (count < 4) return "heavy";
  return "poor";
};

const Register: React.FC = () => {
  const [eye, setEye] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validationError, setValidationError] = useState<number>(0);
  const [strength, setStrength] = useState<string>("");
  const [eyeConfirmPassword, setEyeConfirmPassword] = useState<boolean>(true);

  const route = all_routes;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(route.registerStepTwo);
  };

  const onEyeClick = () => setEye((prev) => !prev);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (value: string) => {
    if (!value) setValidationError(1);
    else if (value.length < 8) setValidationError(2);
    else if (!/[0-9]/.test(value)) setValidationError(3);
    else if (!/[!@#$%^&*()]/.test(value)) setValidationError(4);
    else setValidationError(5);
  };

  const messages = () => {
    switch (validationError) {
      case 2:
        return (
          <span
            id="poor"
            className="active mt-2"
            style={{ fontSize: 14, color: "#DC3545", marginTop: "8px" }}
          >
            <ImageWithBasePath
              src="assets/img/icon/angry.svg"
              className="me-2"
              alt=""
            />{" "}
            Weak. Must contain at least 8 characters
          </span>
        );
      case 3:
        return (
          <span
            id="weak"
            className="active mt-2"
            style={{ fontSize: 14, color: "#FFC107", marginTop: "8px" }}
          >
            <ImageWithBasePath
              src="assets/img/icon/anguish.svg"
              className="me-2"
              alt=""
            />{" "}
            Average. Must contain at least 1 letter or number
          </span>
        );
      case 4:
        return (
          <span
            id="strong"
            className="active mt-2"
            style={{ fontSize: 14, color: "#0D6EFD", marginTop: "8px" }}
          >
            <ImageWithBasePath
              src="assets/img/icon/smile.svg"
              className="me-2"
              alt=""
            />{" "}
            Almost. Must contain special symbol
          </span>
        );
      case 5:
        return (
          <span
            id="heavy"
            className="active mt-2"
            style={{ fontSize: 14, color: "#4BB543", marginTop: "8px" }}
          >
            <ImageWithBasePath
              src="assets/img/icon/smile.svg"
              className="me-2"
              alt=""
            />{" "}
            Awesome! You have a secure password.
          </span>
        );
      default:
        return null;
    }
  };

  const strengthIndicator = (value: string): number => {
    let strengths = 0;
    if (value.length >= 8) strengths = 1;
    if (hasNumber(value) && value.length >= 8) strengths = 2;
    if (hasSpecial(value) && value.length >= 8 && hasNumber(value))
      strengths = 3;
    if (
      hasMixed(value) &&
      hasSpecial(value) &&
      value.length >= 8 &&
      hasNumber(value)
    )
      strengths = 3;
    return strengths;
  };

  useEffect(() => {
    if (password) {
      const strengthValue = strengthIndicator(password);
      setStrength(strengthColor(strengthValue));
    } else {
      setStrength("");
    }
  }, [password]);

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Make login-content full viewport height and center everything */}
        <div
          className="login-content d-flex align-items-center justify-content-center min-vh-100"
          style={{
            background: "linear-gradient(to right, #feeef0, #f6cbccff)",
          }}
        >
          {/* single centered column (no left banner) */}
          <div
            className="login-wrapper w-100 rounded-4"
            style={{ maxWidth: 540, padding: "1rem", background: "white" }}
          >
            <div className="loginbox">
              <div className="w-100">
                <div className="d-flex align-items-center justify-content-between login-header mb-3">
                  <ImageWithBasePath
                    src="assets/img/logo-virtual.png"
                    className="img-fluid"
                    alt="Logo"
                    height={80}
                    width={80}
                  />
                  <Link to={route.homefour} className="link-1">
                    Back to Home
                  </Link>
                </div>

                <h1 className="fs-26 fw-semibold topic">Sign up</h1>

                <form onSubmit={handleSubmit} className="mb-1 mt-3 pb-3">
                  <div className="mb-1 position-relative">
                    <label className="form-label">
                      Name<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                      <span>
                        <i className="isax isax-user input-icon text-gray-7 fs-14" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-1 position-relative">
                    <label className="form-label">
                      Mobile<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                      <span>
                        {/* <i className="isax isax-user input-icon text-gray-7 fs-14" /> */}
                      </span>
                    </div>
                  </div>

                  {/* <div className="mb-3 position-relative">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                      />
                      <span>
                        <i className="isax isax-sms input-icon text-gray-7 fs-14" />
                      </span>
                    </div>
                  </div> */}

                  <div className="mb-3 position-relative">
                    <label className="form-label">
                      New Password <span className="text-danger"> *</span>
                    </label>
                    <div className="position-relative" id="passwordInput">
                      <input
                        className="form-control pass-input"
                        type={eye ? "password" : "text"}
                        onChange={handlePasswordChange}
                      />
                      {/* fixed stray-quote and toggling classes */}
                      <span
                        onClick={onEyeClick}
                        className={`toggle-passwords text-gray-7 fs-14 isax ${
                          eye ? "isax-eye-slash" : "isax-eye"
                        }`}
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </div>

                    <div
                      id="passwordStrength"
                      style={{ display: "flex", marginTop: 8 }}
                      className={`password-strength ${
                        strength === "poor"
                          ? "poor-active"
                          : strength === "weak"
                          ? "avg-active"
                          : strength === "strong"
                          ? "strong-active"
                          : strength === "heavy"
                          ? "heavy-active"
                          : ""
                      }`}
                    >
                      <span id="poor" className="active"></span>
                      <span id="weak" className="active"></span>
                      <span id="strong" className="active"></span>
                      <span id="heavy" className="active"></span>
                    </div>
                    <div id="passwordInfo">{messages()}</div>
                  </div>

                  <div className="mb-1 position-relative">
                    <label className="form-label">
                      Confirm Password <span className="text-danger"> *</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={eyeConfirmPassword ? "password" : "text"}
                        className="pass-inputa form-control form-control-lg"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <span
                        className={`isax toggle-passworda ${
                          eyeConfirmPassword ? "isax-eye-slash" : "isax-eye"
                        } text-gray-7 fs-14`}
                        onClick={() => setEyeConfirmPassword((prev) => !prev)}
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="remember-me d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label mb-0 d-inline-flex remember-me fs-14"
                        htmlFor="flexCheckDefault"
                      >
                        I agree with{" "}
                        <Link
                          to={route.termsConditions}
                          className="link-2 mx-2"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to={route.privacyPolicy} className="link-2 mx-2">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-secondary btn-md" type="submit">
                      Sign Up <i className="isax isax-arrow-right-3 ms-1" />
                    </button>
                  </div>
                </form>

                <div className="d-flex align-items-center justify-content-center or fs-14 mb-3">
                  Or
                </div>

                <div className="d-flex align-items-center justify-content-center mb-3">
                  <Link to="#" className="btn btn-light me-2">
                    <ImageWithBasePath
                      src="assets/img/icons/google.svg"
                      alt="img"
                      className="me-2"
                    />{" "}
                    Google
                  </Link>
                  <Link to="#" className="btn btn-light">
                    <ImageWithBasePath
                      src="assets/img/icons/facebook.svg"
                      alt="img"
                      className="me-2"
                    />{" "}
                    Facebook
                  </Link>
                </div>

                <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
                  Already you have an account?
                  <Link to={route.login} className="link-2 ms-1">
                    {" "}
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Register;
