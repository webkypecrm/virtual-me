import type { SliderSingleProps } from "antd";
import { Slider } from "antd";
import { all_routes } from "../../../router/all_routes";
import Breadcrumb from "../../../../core/common/Breadcrumb/breadcrumb";
import { Link } from "react-router-dom";

const InstructorList = () => {
  const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (
    value
  ) => `$${value}`;

  // const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  // const handleItemClick = (index: number) => {
  //   setSelectedItems((prevSelectedItems) => {
  //     const updatedSelectedItems = [...prevSelectedItems];
  //     updatedSelectedItems[index] = !updatedSelectedItems[index];
  //     return updatedSelectedItems;
  //   });
  // };

  // console.log(selectedItems);

  const route = all_routes;

  return (
    <>
      <Breadcrumb title="Professionals" />
      <div className="main-wrapper">
        {/* Course */}
        <div className="instructor-list">
          <div className="container">
            <div className="row align-items-baseline">
              {/* <div className="col-lg-3">
                <div className="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">
                  <h5>
                    <i className="feather-filter me-2" />
                    Filters
                  </h5>
                  <Link to="#" className="clear-text">
                    Clear
                  </Link>
                </div>
                <div className="filter-clear">
                  <div className="accordion accordion-customicon1 accordions-items-seperate">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1One"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1One"
                          aria-expanded="true"
                          aria-controls="collapsecustomicon1One"
                        >
                          Categories <i className="fa-solid fa-chevron-down" />
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1One"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1One"
                        data-bs-parent="#accordioncustomicon1Example"
                        style={{}}
                      >
                        <div className="accordion-body">
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Backend (3)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> CSS (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Frontend (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> General (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                name="select_specialist"
                                defaultChecked
                              />
                              <span className="checkmark" /> IT &amp; Software
                              (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Photography (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Programming
                              Language (3)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check mb-0">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Technology (2)
                            </label>
                          </div>
                          <Link to="#" className="see-more-btn">
                            See More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Two"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Two"
                          aria-expanded="true"
                          aria-controls="collapsecustomicon1Two"
                        >
                          Instructors
                          <i className="fa-solid fa-chevron-down" />
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Two"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1Two"
                        data-bs-parent="#accordioncustomicon1Example"
                      >
                        <div className="accordion-body">
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Keny White (10)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Hinata Hyuga (5)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> John Doe (3)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check mb-0">
                              <input
                                type="checkbox"
                                name="select_specialist"
                                defaultChecked
                              />
                              <span className="checkmark" /> Nicole Brown
                            </label>
                          </div>
                          <Link to="#" className="see-more-btn">
                            See More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Three"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Three"
                          aria-expanded="true"
                          aria-controls="collapsecustomicon1Three"
                        >
                          Price
                          <i className="fa-solid fa-chevron-down" />
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Three"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1Three"
                        data-bs-parent="#accordioncustomicon1Example"
                      >
                        <div className="accordion-body">
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> All (10)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Free (5)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one mb-0">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Paid (3)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Four"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Four"
                          aria-expanded="true"
                          aria-controls="collapsecustomicon1Four"
                        >
                          Range
                          <i className="fa-solid fa-chevron-down" />
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Four"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1Four"
                        data-bs-parent="#accordioncustomicon1Example"
                      >
                        <div className="accordion-body">
                          <div className="filter-range">
                            <Slider
                              range
                              tooltip={{ formatter }}
                              min={50}
                              max={5695}
                              defaultValue={[50, 2000]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Five"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Five"
                          aria-expanded="true"
                          aria-controls="collapsecustomicon1Five"
                        >
                          Level
                          <i className="fa-solid fa-chevron-down" />
                        </button>
                      </h2>
                      <div
                        id="collapsecustomicon1Five"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1Five"
                        data-bs-parent="#accordioncustomicon1Example"
                      >
                        <div className="accordion-body">
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Beginner (10)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Intermediate (5)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Advanced (21)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one mb-0">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Expert (3)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12">
                {/* Filter */}
                <div className="showing-list mb-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div className="show-result text-center text-lg-start">
                        <h6 className="fw-medium">Showing 1-9 of 50 results</h6>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="show-filter add-course-info">
                        <form action="#">
                          <div className="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">
                            <div className="view-icons mb-2 mb-sm-0">
                              <Link
                                to={route.instructorVideoGrid}
                                className="grid-view"
                              >
                                <i className="isax isax-element-3" />
                              </Link>
                              <Link
                                to={route.instructorVideoList}
                                className="list-view active"
                              >
                                <i className="isax isax-task" />
                              </Link>
                            </div>
                            <select className="form-select">
                              <option>Newly Published </option>
                              <option>Trending Courses</option>
                              <option>Top Rated</option>
                              <option>Free Courses</option>
                            </select>
                            <div className=" search-group">
                              <i className="isax isax-search-normal-1" />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Filter */}

                <div className="d-flex flex-column flex-md-row border rounded overflow-hidden mb-3">
                  {/* LEFT: Video */}
                  <div
                    className="w-100 w-md-50"
                    style={{ maxWidth: "100%", flex: "0 0 300px" }}
                  >
                    <Link to={route.instructorVideoDetails}>
                      <video
                        className="img-fluid w-100 h-100"
                        controls
                        // poster="https://via.placeholder.com/300x180"
                      >
                        <source
                          src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757586791/istockphoto-1464751572-640_adpp_is_nlyxyv.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </Link>
                  </div>

                  {/* RIGHT: Video Info */}
                  <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      {/* Title */}
                      <h6 className="mb-2">
                        <Link
                          to={route.instructorVideoDetails}
                          className="text-dark"
                        >
                          Learn Full Stack Development in 12 Hours!
                        </Link>
                      </h6>

                      {/* Instructor Name */}
                      <p className="text-muted mb-1 small">Aditya Malik</p>

                      {/* Views & Posted Time */}
                      <p className="text-muted small mb-0">
                        1.2M views • 2 weeks ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row border rounded overflow-hidden mb-3">
                  {/* LEFT: Video */}
                  <div
                    className="w-100 w-md-50"
                    style={{ maxWidth: "100%", flex: "0 0 300px" }}
                  >
                    <Link to={route.instructorVideoDetails}>
                      <video
                        className="img-fluid w-100 h-100"
                        controls
                        // poster="https://via.placeholder.com/300x180"
                      >
                        <source
                          src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757586791/istockphoto-1464751572-640_adpp_is_nlyxyv.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </Link>
                  </div>

                  {/* RIGHT: Video Info */}
                  <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      {/* Title */}
                      <h6 className="mb-2">
                        <Link
                          to={route.instructorVideoDetails}
                          className="text-dark"
                        >
                          Learn Full Stack Development in 12 Hours!
                        </Link>
                      </h6>

                      {/* Instructor Name */}
                      <p className="text-muted mb-1 small">Aditya Malik</p>

                      {/* Views & Posted Time */}
                      <p className="text-muted small mb-0">
                        1.2M views • 2 weeks ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row border rounded overflow-hidden mb-3">
                  {/* LEFT: Video */}
                  <div
                    className="w-100 w-md-50"
                    style={{ maxWidth: "100%", flex: "0 0 300px" }}
                  >
                    <Link to={route.instructorVideoDetails}>
                      <video
                        className="img-fluid w-100 h-100"
                        controls
                        // poster="https://via.placeholder.com/300x180"
                      >
                        <source
                          src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757586791/istockphoto-1464751572-640_adpp_is_nlyxyv.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </Link>
                  </div>

                  {/* RIGHT: Video Info */}
                  <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      {/* Title */}
                      <h6 className="mb-2">
                        <Link
                          to={route.instructorVideoDetails}
                          className="text-dark"
                        >
                          Learn Full Stack Development in 12 Hours!
                        </Link>
                      </h6>

                      {/* Instructor Name */}
                      <p className="text-muted mb-1 small">Aditya Malik</p>

                      {/* Views & Posted Time */}
                      <p className="text-muted small mb-0">
                        1.2M views • 2 weeks ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row border rounded overflow-hidden mb-3">
                  {/* LEFT: Video */}
                  <div
                    className="w-100 w-md-50"
                    style={{ maxWidth: "100%", flex: "0 0 300px" }}
                  >
                    <Link to={route.instructorVideoDetails}>
                      <video
                        className="img-fluid w-100 h-100"
                        controls
                        // poster="https://via.placeholder.com/300x180"
                      >
                        <source
                          src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757586791/istockphoto-1464751572-640_adpp_is_nlyxyv.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </Link>
                  </div>

                  {/* RIGHT: Video Info */}
                  <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      {/* Title */}
                      <h6 className="mb-2">
                        <Link
                          to={route.instructorVideoDetails}
                          className="text-dark"
                        >
                          Learn Full Stack Development in 12 Hours!
                        </Link>
                      </h6>

                      {/* Instructor Name */}
                      <p className="text-muted mb-1 small">Aditya Malik</p>

                      {/* Views & Posted Time */}
                      <p className="text-muted small mb-0">
                        1.2M views • 2 weeks ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* /pagination */}
                <div className="row align-items-center mt-sm-4 mt-md-5 mt-3">
                  <div className="col-md-2">
                    <p className="pagination-text">Page 1 of 2</p>
                  </div>
                  <div className="col-md-10">
                    <ul className="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                      <li className="page-item prev">
                        <Link className="page-link" to="#" tabIndex={-1}>
                          <i className="fas fa-angle-left" />
                        </Link>
                      </li>
                      <li className="page-item first-page active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item next">
                        <Link className="page-link" to="#">
                          <i className="fas fa-angle-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /pagination */}
              </div>
            </div>
          </div>
          {/* /Course */}
        </div>
      </div>
    </>
  );
};

export default InstructorList;
