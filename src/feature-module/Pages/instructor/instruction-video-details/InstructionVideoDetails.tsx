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
