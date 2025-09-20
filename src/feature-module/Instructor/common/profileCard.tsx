import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const ProfileCard = () => {
  return (
    <div
      className="instructor-profile register-bg-gredient"
      // style={{ border: "2px solid black" }}
    >
      {/* <div className="instructor-profile-bg">
        <ImageWithBasePath
          src="assets/img/bg/card-bg-01.png"
          className="instructor-profile-bg-1"
          alt=""
        />
      </div> */}
      <div className="row align-items-center row-gap-3">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <span className="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">
              <ImageWithBasePath src="assets/img/user/user-01.jpeg" alt="img" />
              <span className="verify-tick">
                <i className="isax isax-verify5" />
              </span>
            </span>
            <div>
              <h5 className="mb-1 text-black d-inline-flex align-items-center">
                Soumitra Dutta
                <Link
                  to={all_routes.instructorProfile}
                  className="link-black fs-16 ms-2"
                >
                  <i className="isax isax-edit-2" />
                </Link>
              </h5>
              <p className="text-black">Professor</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
            <Link
              to={all_routes.addNewCourse}
              className="btn btn-white rounded-pill"
            >
              Add New Course +
            </Link>
            <Link
              to={all_routes.instructorAvatar}
              className="btn btn-primary rounded-pill"
            >
              Create My Avatar +
            </Link>
            <Link
              to={all_routes.instructorAvatar}
              className="btn btn-primary rounded-pill"
            >
              Create My Business +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
