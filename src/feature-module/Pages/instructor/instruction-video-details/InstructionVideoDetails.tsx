import Breadcrumb from "../../../../core/common/Breadcrumb/breadcrumb";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";

const InstructorVideoDetails = () => {
  return (
    <>
      <Breadcrumb title="Video Details" />

      <div className="instructor-detail-content py-4">
        <div className="container">
          <div className="row">
            {/* LEFT: Main Video Section */}
            <div className="col-lg-8">
              {/* Main Video */}
              <div className="mb-4">
                <video
                  className="w-100 rounded"
                  controls
                  //   poster="https://via.placeholder.com/800x400"
                >
                  <source
                    src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757586791/istockphoto-1464751572-640_adpp_is_nlyxyv.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Title */}
              <h5 className="fw-bold mb-2">
                Learn Full Stack Development in 12 Hours!
              </h5>

              {/* Author, Views, Time */}
              <div className="d-flex align-items-center mb-3">
                <img
                  src="http://localhost:5173/assets/img/user/user-64.jpeg"
                  alt="Instructor"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <div>
                  <p className="mb-0 fw-semibold">Aditya Malik</p>
                  <small className="text-muted">1.2M views • 2 weeks ago</small>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted">
                This is a full course to become a full-stack web developer.
                Learn from basics to advanced concepts in just 12 hours.
              </p>

              {/* comments and replies */}
              <div className="blog-reviews mb-3">
                <h5 className="mb-3 fs-18">Reviews</h5>
                <div className="review-item shadow-none mb-3">
                  <div className="review-info">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center mb-2">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <Link to={"all_routes.studentsDetails"}>
                            <ImageWithBasePath
                              src="assets/img/user/user-05.jpg"
                              className="rounded-circle"
                              alt="img"
                            />
                          </Link>
                        </span>
                        <div>
                          <h5 className="fs-16 fw-medium">
                            <Link to={"all_routes.studentsDetails"}>
                              Adrian Hendriques
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center flex-wrap date-info">
                            <span className="mb-0 fs-14">2 days ago</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-md d-inline-flex align-items-center me-2 mb-2 text-gray-5"
                      >
                        <i className="isax isax-repeat me-1" />
                        Reply
                      </Link>
                    </div>
                    <p className="mb-2 mt-1">
                      I highly recommend to anyone looking to learn . Their
                      passion for the subject and dedication to students make
                      them an outstanding instructor. I would definitely take
                      another course with them in the future.
                    </p>
                    <div className="d-inline-flex align-items-center">
                      <Link
                        to="#"
                        className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      >
                        <i className="isax isax-like-15 me-1" />
                        21
                      </Link>
                      <Link
                        to="#"
                        className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      >
                        <i className="isax isax-dislike5 me-1" />
                        50
                      </Link>
                      <Link
                        to="#"
                        className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      >
                        <i className="isax isax-heart5 text-danger me-1" />
                        45
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="review-item shadow-none mb-0">
                  <div className="review-info">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center mb-2">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <Link to={"all_routes.studentsDetails"}>
                            <ImageWithBasePath
                              src="assets/img/user/user-26.jpg"
                              className="rounded-circle"
                              alt="img"
                            />
                          </Link>
                        </span>
                        <div>
                          <h5 className="fs-16 fw-medium">
                            <Link to={"all_routes.studentsDetails"}>
                              Adrian Hendriques
                            </Link>
                          </h5>
                          <div className="d-flex align-items-center flex-wrap date-info">
                            <span className="mb-0 fs-14">2 days ago</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-md d-inline-flex align-items-center mb-2 text-gray-5"
                      >
                        <i className="isax isax-repeat me-1" />
                        Reply
                      </Link>
                    </div>
                    <p className="mb-2 mt-1">
                      While I learned a lot from this course, I feel like I
                      could have used more practical examples or exercises that
                      apply the theory. The course focused a lot on
                      lecture-based content and could have incorporated more
                      real-world scenarios.
                    </p>
                    <div className="d-inline-flex align-items-center">
                      <Link
                        to="#"
                        className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      >
                        <i className="isax isax-like-15 me-1" />
                        21
                      </Link>
                      <Link
                        to="#"
                        className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      >
                        <i className="isax isax-dislike5 me-1" />
                        50
                      </Link>
                      <Link
                        to="#"
                        className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      >
                        <i className="isax isax-heart5 text-danger me-1" />
                        45
                      </Link>
                    </div>
                    <div className="review-info border-0 bg-light-900 reply mt-4 p-3 rounded-2">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center mb-2">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <Link to={"all_routes.instructorDetails"}>
                              <ImageWithBasePath
                                src="assets/img/user/user-25.jpg"
                                className="rounded-circle"
                                alt="img"
                              />
                            </Link>
                          </span>
                          <div>
                            <h6 className="fs-16 fw-medium">
                              <Link to={"all_routes.instructorDetails"}>
                                Rolands Granger
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap date-info">
                              <span className="mb-0 fs-14">2 days ago</span>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-md d-inline-flex align-items-center me-2 mb-2 text-gray-5"
                        >
                          <i className="isax isax-repeat me-1" />
                          Reply
                        </Link>
                      </div>
                      <p className="mb-2">Thanks! Best luck for Future</p>
                      <div className="d-inline-flex align-items-center">
                        <Link
                          to="#"
                          className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                        >
                          <i className="isax isax-like-15 me-1" />
                          21
                        </Link>
                        <Link
                          to="#"
                          className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                        >
                          <i className="isax isax-dislike5 me-1" />
                          50
                        </Link>
                        <Link
                          to="#"
                          className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                        >
                          <i className="isax isax-heart5 text-danger me-1" />
                          45
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* comments and replies */}
            </div>

            {/* RIGHT: Suggested Videos List */}
            <div className="col-lg-4">
              <h6 className="mb-3">Suggested Videos</h6>

              {/* List Item */}
              {[1, 2, 3].map((item, index) => (
                <div
                  className="d-flex flex-column flex-md-row border rounded overflow-hidden mb-3"
                  key={index}
                >
                  {/* Video Thumbnail */}
                  <div style={{ flex: "0 0 150px", maxWidth: "150px" }}>
                    <Link to="#">
                      <video className="img-fluid w-100 h-100" controls>
                        <source
                          src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757586791/istockphoto-1464751572-640_adpp_is_nlyxyv.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </Link>
                  </div>

                  {/* Info */}
                  <div className="p-2 flex-grow-1">
                    <h6 className="mb-1">
                      <Link to="#" className="text-dark">
                        Master React in 10 Hours!
                      </Link>
                    </h6>
                    <p className="text-muted small mb-0">Aditya Malik</p>
                    <p className="text-muted small mb-0">
                      899K views • 1 month ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorVideoDetails;
