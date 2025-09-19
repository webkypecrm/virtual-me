import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <ImageWithBasePath
          src="assets/img/bg/footer-bg-01.png"
          className="footer-bg-1"
          alt=""
        />
        <ImageWithBasePath
          src="assets/img/bg/footer-bg-02.png"
          className="footer-bg-2"
          alt=""
        />
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row  d-flex justify-content-center align-items-center text-center">
            <div className="col-lg-8">
              <div className="footer-about">
                <div className="footer-logo mb-3">
                  <ImageWithBasePath
                    src="assets/img/logo-virtual.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <p className="mb-3">
                  Platform designed to help organizations, educators, and
                  learners manage, deliver, and track learning and training
                  activities.
                </p>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-2">
                  <Link
                    to={all_routes.instructorDashboard}
                    className="btn btn-primary d-inline-flex align-items-center px-3 w-100 justify-content-center"
                  >
                    For Instructor
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6 mb-2">
                  <Link
                    to={all_routes.studentDashboard}
                    className="btn btn-primary d-inline-flex align-items-center px-3 w-100 justify-content-center"
                  >
                    For Student
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row row-gap-2">
            <div className="col-md-6">
              <div className="text-center text-md-start">
                <p className="text-white">
                  Copyright © 2025 VirtualXai. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                {/* ✅ Show stacked lists below md */}
                <div className="d-block d-md-none">
                  <ul className="d-flex align-items-center justify-content-center footer-link">
                    <li>
                      <Link to={all_routes.about_us}>About</Link>
                    </li>
                    <li>
                      <Link to={all_routes.contactUs}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={all_routes.FAQ}>FAQ</Link>
                    </li>
                  </ul>
                  <ul className="d-flex align-items-center justify-content-center footer-link">
                    <li>
                      <Link to={all_routes.about_us}>Team</Link>
                    </li>
                    <li>
                      <Link to={all_routes.contactUs}>Career</Link>
                    </li>
                    <li>
                      <Link to={all_routes.FAQ}>Partners</Link>
                    </li>
                  </ul>
                  <ul className="d-flex align-items-center justify-content-center footer-link">
                    <li>
                      <Link to={all_routes.termsConditions}>
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to={all_routes.privacyPolicy}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>

                {/* ✅ Show inline list on md+ */}
                <div className="d-none d-md-block">
                  <ul className="d-flex align-items-center justify-content-md-end footer-link flex-wrap gap-0">
                    <li>
                      <Link to={all_routes.about_us}>About</Link>
                    </li>
                    <li>
                      <Link to={all_routes.contactUs}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={all_routes.FAQ}>FAQ</Link>
                    </li>
                    <li>
                      <Link to={all_routes.about_us}>Team</Link>
                    </li>
                    <li>
                      <Link to={all_routes.contactUs}>Career</Link>
                    </li>
                    <li>
                      <Link to={all_routes.FAQ}>Partners</Link>
                    </li>
                    <li>
                      <Link to={all_routes.termsConditions}>Terms</Link>
                    </li>
                    <li>
                      <Link to={all_routes.privacyPolicy}>Privacy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
