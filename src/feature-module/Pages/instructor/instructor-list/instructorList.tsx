// import type { SliderSingleProps } from "antd";
// import { Slider } from "antd";
// import { useState } from "react";
import { all_routes } from "../../../router/all_routes";
// import Breadcrumb from "../../../../core/common/Breadcrumb/breadcrumb";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";

const InstructorList = () => {
  // const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (
  //   value
  // ) => `$${value}`;

  // const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  // const handleItemClick = (index: number) => {
  //   setSelectedItems((prevSelectedItems) => {
  //     const updatedSelectedItems = [...prevSelectedItems];
  //     updatedSelectedItems[index] = !updatedSelectedItems[index];
  //     return updatedSelectedItems;
  //   });
  // };

  const route = all_routes;

  return (
    <>
      {/* <Breadcrumb title="Professionals" /> */}
      <div className="main-wrapper">
        {/* Course */}
        <div className="instructor-list">
          <div className="container">
            <div className="row align-items-baseline">
              <div className="col-lg-3">
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
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1One"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1One"
                        >
                          Professionals{" "}
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
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
                              <span className="checkmark" /> Teaching &
                              Instruction
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Research &
                              Knowledge Creation
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Administration & Leadership
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Corporate &
                              Executive Education
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                name="select_specialist"
                                defaultChecked
                              />
                              <span className="checkmark" />
                              EdTech & Modern Learning
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
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Two"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Two"
                        >
                          Profile
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
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
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Three"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Three"
                        >
                          Experience
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
                      </h2>
                      <div
                        id="collapsecustomicon1Three"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1Three"
                        data-bs-parent="#accordioncustomicon1Example"
                      >
                        <div className="accordion-body">
                          {[
                            "0-5 Years",
                            "5-9 Years",
                            "10-14 Years",
                            "14-20 Years",
                            "20-24 Years",
                            "24-29 Years",
                            "30+ Years",
                          ].map((range, index) => (
                            <div key={index}>
                              <label className="custom_check custom_one mb-3">
                                <input
                                  type="checkbox"
                                  name="experience_range"
                                  value={range}
                                />
                                <span className="checkmark" /> {range}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Four"
                      >
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Four"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Four"
                        >
                          Country
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
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
                              India
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Canada
                            </label>
                          </div>

                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              USA
                            </label>
                          </div>

                          <div>
                            <label className="custom_check custom_one mb-0">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Australia
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* <div
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
                      </div> */}
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Five"
                      >
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Five"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Five"
                        >
                          Availabilty
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
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
                              Interact Avatar
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Profile On
                            </label>
                          </div>

                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Real Me
                            </label>
                          </div>

                          <div>
                            <label className="custom_check custom_one mb-0">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Chat
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingcustomicon1Five"
                      >
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Five"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Five"
                        >
                          Gender
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
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
                              Male
                            </label>
                          </div>

                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" />
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
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
                                to={route.instructorGrid}
                                className="grid-view"
                              >
                                <i className="isax isax-element-3" />
                              </Link>
                              <Link
                                to={route.instructorList}
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
                <div className="instructor-item instructor-item-seven ">
                  <div className="instructor-img">
                    <Link to={route.instructorDetails}>
                      <ImageWithBasePath
                        src="https://res.cloudinary.com/drj0uehgx/image/upload/v1757936392/0112_dutta_tnd_0_2_vbcsmn.jpg"
                        // style={{
                        //   width: "100%",
                        //   height: "300px",
                        //   objectFit: "cover",
                        //   borderRadius: "8px",
                        // }}
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    {/* <div
                      className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                      key={1}
                      onClick={() => handleItemClick(1)}
                    >
                      <Link
                        className={`favourite ${
                          selectedItems[1] ? "selected" : ""
                        }`}
                        to="#"
                      >
                        <i className="isax isax-heart color-active" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="instructor-content flex-fill">
                    <div className="pb-3 border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                        <div>
                          <h6 className="title">
                            <Link to={route.instructorDetails}>
                              Rolands Granger
                            </Link>
                          </h6>
                          <span className="designation">Developer</span>
                        </div>
                        <div>
                          <p className="rating">
                            <i className="fas fa-star me-1" />
                            4.9 (200 Reviews)
                          </p>
                        </div>
                      </div>
                      <p>
                        I am a web developer with a vast array of knowledge in
                        many different front end and back end languages,
                        responsive frameworks, databases, and best code
                        practices.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                          </span>
                          12+ Lesson
                        </span>
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                          </span>
                          169hr 20min
                        </span>
                        <span className="d-flex align-items-center">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                          </span>
                          50 Students
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Web Design
                        </div>
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Development
                        </div>
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Re-Design
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructor-item instructor-item-seven ">
                  <div className="instructor-img">
                    <Link to={route.instructorDetails}>
                      <ImageWithBasePath
                        src="https://webkype.com/storage/profile_images/WbkIAFAe9b82aOgrK0A2X4fytxuxRp4qEpjnBIl6.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    {/* <div
                      className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                      key={2}
                      onClick={() => handleItemClick(2)}
                    >
                      <Link
                        className={`favourite ${
                          selectedItems[2] ? "selected" : ""
                        }`}
                        to="#"
                      >
                        <i className="isax isax-heart color-active" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="instructor-content flex-fill">
                    <div className="pb-3 border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                        <div>
                          <h6 className="title">
                            <Link to={route.instructorDetails}>
                              Lisa Lopezr
                            </Link>
                          </h6>
                          <span className="designation">Finance</span>
                        </div>
                        <div>
                          <p className="rating">
                            <i className="fas fa-star me-1" />
                            4.4 (130 Reviews)
                          </p>
                        </div>
                      </div>
                      <p>
                        I am a web developer with a vast array of knowledge in
                        many different front end....
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                          </span>
                          22+ Lesson
                        </span>
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                          </span>
                          15hr 06min
                        </span>
                        <span className="d-flex align-items-center">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                          </span>
                          22 Students
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Accounting
                        </div>
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Commerce
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructor-item instructor-item-seven ">
                  <div className="instructor-img">
                    <Link to={route.instructorDetails}>
                      <ImageWithBasePath
                        src="https://webkype.com/storage/1727701196.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    {/* <div
                      className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                      key={3}
                      onClick={() => handleItemClick(3)}
                    >
                      <Link
                        className={`favourite ${
                          selectedItems[3] ? "selected" : ""
                        }`}
                        to="#"
                      >
                        <i className="isax isax-heart color-active" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="instructor-content flex-fill">
                    <div className="pb-3 border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                        <div>
                          <h6 className="title">
                            <Link to={route.instructorDetails}>
                              Charles Ruizr
                            </Link>
                          </h6>
                          <span className="designation">Cloud Engineer</span>
                        </div>
                        <div>
                          <p className="rating">
                            <i className="fas fa-star me-1" />
                            4.4 (130 Reviews)
                          </p>
                        </div>
                      </div>
                      <p>
                        I am a web developer with a vast array of knowledge in
                        many different front end
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                          </span>
                          16+ Lesson
                        </span>
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                          </span>
                          2hr 25min
                        </span>
                        <span className="d-flex align-items-center">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                          </span>
                          10 Students
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          DevOps
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructor-item instructor-item-seven ">
                  <div className="instructor-img">
                    <Link to={route.instructorDetails}>
                      <ImageWithBasePath
                        src="https://res.cloudinary.com/drj0uehgx/image/upload/v1758191704/5397-0520_1_bcfrsx.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    {/* <div
                      className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                      key={4}
                      onClick={() => handleItemClick(4)}
                    >
                      <Link
                        className={`favourite ${
                          selectedItems[4] ? "selected" : ""
                        }`}
                        to="#"
                      >
                        <i className="isax isax-heart color-active" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="instructor-content flex-fill">
                    <div className="pb-3 border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                        <div>
                          <h6 className="title">
                            <Link to={route.instructorDetails}>
                              Rogerina Grogan
                            </Link>
                          </h6>
                          <span className="designation">Vocational</span>
                        </div>
                        <div>
                          <p className="rating">
                            <i className="fas fa-star me-1" />
                            4.6 (180 Reviews)
                          </p>
                        </div>
                      </div>
                      <p>
                        I am a web developer with a vast array of knowledge in
                        many different front end
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                          </span>
                          06+ Lesson
                        </span>
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                          </span>
                          19hr 30min
                        </span>
                        <span className="d-flex align-items-center">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                          </span>
                          50 Students
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Language
                        </div>
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Voice
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructor-item instructor-item-seven ">
                  <div className="instructor-img">
                    <Link to={route.instructorDetails}>
                      <ImageWithBasePath
                        src="https://webkype.com/storage/1727701208.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    {/* <div
                      className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                      key={5}
                      onClick={() => handleItemClick(5)}
                    >
                      <Link
                        className={`favourite ${
                          selectedItems[5] ? "selected" : ""
                        }`}
                        to="#"
                      >
                        <i className="isax isax-heart color-active" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="instructor-content flex-fill">
                    <div className="pb-3 border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                        <div>
                          <h6 className="title">
                            <Link to={route.instructorDetails}>Ivana Tow</Link>
                          </h6>
                          <span className="designation">Corporate Trainer</span>
                        </div>
                        <div>
                          <p className="rating">
                            <i className="fas fa-star me-1" />
                            4.2 (210 Reviews)
                          </p>
                        </div>
                      </div>
                      <p>
                        I am a web developer with a vast array of knowledge in
                        many different front
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                          </span>
                          25+ Lesson
                        </span>
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                          </span>
                          4hr 20min
                        </span>
                        <span className="d-flex align-items-center">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                          </span>
                          50 Students
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Professional
                        </div>
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Training
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructor-item instructor-item-seven ">
                  <div className="instructor-img">
                    <Link to={route.instructorDetails}>
                      <ImageWithBasePath
                        src="https://webkype.com/storage/1727701450.JPG"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    {/* <div
                      className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                      key={6}
                      onClick={() => handleItemClick(6)}
                    >
                      <Link
                        className={`favourite ${
                          selectedItems[6] ? "selected" : ""
                        }`}
                        to="#"
                      >
                        <i className="isax isax-heart color-active" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="instructor-content flex-fill">
                    <div className="pb-3 border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                        <div>
                          <h6 className="title">
                            <Link to={route.instructorDetails}>
                              Kevin Leonard
                            </Link>
                          </h6>
                          <span className="designation">Developer</span>
                        </div>
                        <div>
                          <p className="rating">
                            <i className="fas fa-star me-1" />
                            4.5 (140 Reviews)
                          </p>
                        </div>
                      </div>
                      <p>
                        I am a web developer with a vast array of knowledge in
                        many different front
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                          </span>
                          11+ Lesson
                        </span>
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                          </span>
                          7hr 10min
                        </span>
                        <span className="d-flex align-items-center">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                          </span>
                          21 Students
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Web Design
                        </div>
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Functionality
                        </div>
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Modules
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructor-item instructor-item-seven ">
                  <div className="instructor-img">
                    <Link to={route.instructorDetails}>
                      <ImageWithBasePath
                        src="https://webkype.com/storage/profile_images/tDZn8ORTdYlqy8vPsTmj0JWiLmpCWLQ1XY9QDCN8.jpg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    {/* <div
                      className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                      key={7}
                      onClick={() => handleItemClick(7)}
                    >
                      <Link
                        className={`favourite ${
                          selectedItems[7] ? "selected" : ""
                        }`}
                        to="#"
                      >
                        <i className="isax isax-heart color-active" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="instructor-content flex-fill">
                    <div className="pb-3 border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                        <div>
                          <h6 className="title">
                            <Link to={route.instructorDetails}>
                              Jeanette Dulaneyr
                            </Link>
                          </h6>
                          <span className="designation">Technical Traine</span>
                        </div>
                        <div>
                          <p className="rating">
                            <i className="fas fa-star me-1" />
                            4.7 (220 Reviews)
                          </p>
                        </div>
                      </div>
                      <p>
                        I am a web developer with a vast array of knowledge in
                        many different front
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                          </span>
                          12+ Lesson
                        </span>
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                          </span>
                          9hr 30min
                        </span>
                        <span className="d-flex align-items-center">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                          </span>
                          32 Students
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          IT
                        </div>
                        <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">
                          Development
                        </div>
                      </div>
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
              <div className="col-lg-2">
                {/* Filter */}
                <div className="showing-list mb-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div className="show-result text-center text-lg-start">
                        {/* <h6 className="fw-medium">Showing 1-9 of 50 results</h6> */}
                      </div>
                    </div>
                    <div className="col-lg-8"></div>
                  </div>
                </div>
                {/* /Filter */}
                <div className=" border-0  rounded-1 overflow-hidden">
                  <div className=" p-0">
                    <a
                      href="https://your-ad-link.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://imgs.search.brave.com/atJlFLu9G1GiyodGfNkKsxD6O0ZCyqykd6zvfVSeKhQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/bWFya2V0aW5nLWJ1/c2luZXNzLWZseWVy/LXNxdWFyZV8yMy0y/MTQ4NzczNTEzLmpw/Zw"
                        alt="Advertisement"
                        className="img-fluid w-100 h-100"
                      />
                    </a>
                  </div>
                  <div className="card-footer text-center p-2 bg-light">
                    <small className="text-muted">Sponsored</small>
                  </div>
                </div>
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
