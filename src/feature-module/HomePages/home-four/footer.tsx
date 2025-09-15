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
          <div className="row row-gap-4">
            <div className="col-lg-6">
              <div className="footer-about">
                <div className="footer-logo">
                  <ImageWithBasePath
                    src="assets/img/logo-virtual.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <p>
                  Platform designed to help organizations, educators, and
                  learners manage, deliver, and track learning and training
                  activities.
                </p>
                <div className="d-flex align-items-center">
                  {/* <Link to="#" className="me-2">
                      <ImageWithBasePath
                        src="assets/img/icon/appstore.svg"
                        alt=""
                      />
                    </Link> */}
                  {/* <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/icon/googleplay.svg"
                        alt=""
                      />
                    </Link> */}
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-4">
                  <div className="footer-widget footer-menu">
                    <div>
                      <Link
                        to={all_routes.instructorDashboard}
                        className="btn btn-primary d-inline-flex align-items-center me-2 px-3"
                      >
                        For Instructor
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-widget footer-menu">
                    <div>
                      <Link
                        to={all_routes.studentDashboard}
                        className="btn btn-secondary d-inline-flex align-items-center me-2 px-3"
                      >
                        For Student
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                    <div className="footer-widget footer-contact">
                      <h5 className="footer-title">Newsletter</h5>
                      <div className="subscribe-input">
                        <form action="#">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your Email Address"
                          />
                          <button
                            type="submit"
                            className="btn btn-primary btn-sm inline-flex align-items-center"
                          >
                            <i className="isax isax-send-2 me-1" />
                            Subscribe
                          </button>
                        </form>
                      </div>
                      <div className="footer-contact-info">
                        <div className="footer-address d-flex align-items-center">
                          <ImageWithBasePath
                            src="assets/img/icon/icon-20.svg"
                            alt="Img"
                            className="img-fluid me-2"
                          />
                          <p>
                            {" "}
                            3556 Beech Street, San Francisco,
                            <br /> California, CA 94108{" "}
                          </p>
                        </div>
                        <div className="footer-address d-flex align-items-center">
                          <ImageWithBasePath
                            src="assets/img/icon/icon-19.svg"
                            alt="Img"
                            className="img-fluid me-2"
                          />
                          <p>VirtualXai@example.com</p>
                        </div>
                        <div className="footer-address d-flex align-items-center">
                          <ImageWithBasePath
                            src="assets/img/icon/icon-21.svg"
                            alt="Img"
                            className="img-fluid me-2"
                          />
                          <p>+19 123-456-7890</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
            <div className="col-lg-6"></div>
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
