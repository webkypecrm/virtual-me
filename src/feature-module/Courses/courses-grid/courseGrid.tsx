import Breadcrumb from "../../../core/common/Breadcrumb/breadcrumb";
// import type { SliderSingleProps } from "antd";
// import { Slider } from "antd";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";

const CourseGrid = () => {
  // const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (
  //   value
  // ) => `$${value}`;

  const courses = [
    {
      img: "assets/img/course/course-01.jpg",
      discount: "15% off",
      instructorImg: "assets/img/user/user-29.jpg",
      instructorName: "Brenda Slaton",
      category: "Design",
      title: "Information About UI/UX Design Degree",
      price: "$120",
    },
    {
      img: "assets/img/course/course-02.jpg",
      discount: null,
      instructorImg: "assets/img/user/user-30.jpg",
      instructorName: "Ana Reyes",
      category: "Wordpress",
      title: "Wordpress for Beginners",
      price: "$140",
    },
    {
      img: "assets/img/course/course-03.jpg",
      discount: "10% off",
      instructorImg: "assets/img/user/user-31.jpg",
      instructorName: "John Doe",
      category: "Marketing",
      title: "Digital Marketing Fundamentals",
      price: "$90",
    },
    {
      img: "assets/img/course/course-04.jpg",
      discount: null,
      instructorImg: "assets/img/user/user-32.jpg",
      instructorName: "Jane Smith",
      category: "Programming",
      title: "Learn Python Programming",
      price: "$110",
    },
    {
      img: "assets/img/course/course-05.jpg",
      discount: "20% off",
      instructorImg: "assets/img/user/user-33.jpg",
      instructorName: "Mike Johnson",
      category: "Photography",
      title: "Mastering DSLR Photography",
      price: "$150",
    },
    {
      img: "assets/img/course/course-06.jpg",
      discount: null,
      instructorImg: "assets/img/user/user-34.jpg",
      instructorName: "Emily Clark",
      category: "Business",
      title: "Entrepreneurship 101",
      price: "$130",
    },
    {
      img: "assets/img/course/course-07.jpg",
      discount: "5% off",
      instructorImg: "assets/img/user/user-35.jpg",
      instructorName: "Robert Brown",
      category: "Finance",
      title: "Financial Analysis for Beginners",
      price: "$100",
    },
  ];

  return (
    <>
      <Breadcrumb title="Course Grid" />

      {/* Course */}
      <section className="course-content">
        <div className="container">
          <div className="row align-items-baseline">
            {/* <div className="col-lg-3 theiaStickySidebar">
              <div className="filter-clear">
                <div className="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">
                  <h5>
                    <i className="feather-filter me-2" />
                    Filters
                  </h5>
                  <Link to="#" className="clear-text">
                    Clear
                  </Link>
                </div>
                <div className="accordion accordion-customicon1 accordions-items-seperate">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingcustomicon1One">
                      <Link
                        to="#"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsecustomicon1One"
                        aria-expanded="false"
                        aria-controls="collapsecustomicon1One"
                      >
                        Categories <i className="fa-solid fa-chevron-down" />
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
                            <span className="checkmark" /> IT &amp; Software (2)
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
                            <span className="checkmark" /> Programming Language
                            (3)
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
                    <h2 className="accordion-header" id="headingcustomicon1Two">
                      <Link
                        to="#"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsecustomicon1Two"
                        aria-expanded="false"
                        aria-controls="collapsecustomicon1Two"
                      >
                        Instructors
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
                        Price
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
                      <Link
                        to="#"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsecustomicon1Four"
                        aria-expanded="false"
                        aria-controls="collapsecustomicon1Four"
                      >
                        Range
                        <i className="fa-solid fa-chevron-down" />
                      </Link>
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
                      <Link
                        to="#"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsecustomicon1Five"
                        aria-expanded="false"
                        aria-controls="collapsecustomicon1Five"
                      >
                        Level
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
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingcustomicon1Six">
                      <Link
                        to="#"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsecustomicon1Six"
                        aria-expanded="false"
                        aria-controls="collapsecustomicon1Six"
                      >
                        Reviews <i className="fa-solid fa-chevron-down" />
                      </Link>
                    </h2>
                    <div
                      id="collapsecustomicon1Six"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingcustomicon1Six"
                      data-bs-parent="#accordioncustomicon1Example"
                    >
                      <div className="accordion-body">
                        <div>
                          <label className="custom_check custom_one">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning" />
                          </label>
                        </div>
                        <div>
                          <label className="custom_check custom_one">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-light" />
                          </label>
                        </div>
                        <div>
                          <label className="custom_check custom_one">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-light me-1" />
                            <i className="fa-solid fa-star text-light" />
                          </label>
                        </div>
                        <div>
                          <label className="custom_check custom_one">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-light me-1" />
                            <i className="fa-solid fa-star text-light me-1" />
                            <i className="fa-solid fa-star text-light" />
                          </label>
                        </div>
                        <div>
                          <label className="custom_check custom_one mb-0">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" />
                            <i className="fa-solid fa-star text-warning me-1" />
                            <i className="fa-solid fa-star text-light me-1" />
                            <i className="fa-solid fa-star text-light me-1" />
                            <i className="fa-solid fa-star text-light me-1" />
                            <i className="fa-solid fa-star text-light" />
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
                              to={all_routes.courseGrid}
                              className="grid-view active"
                            >
                              <i className="isax isax-element-3" />
                            </Link>
                            <Link
                              to={all_routes.courseList}
                              className="list-view"
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
              <div className="row">
                {courses.map((course, index) => (
                  <div className="col-xl-4 col-md-6 mb-4" key={index}>
                    <div className="course-item-two course-item mx-0">
                      <div className="course-img">
                        <Link to={all_routes.courseDetails}>
                          <ImageWithBasePath
                            src={course.img}
                            alt="img"
                            className="img-fluid"
                          />
                        </Link>
                        <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                          {course.discount && (
                            <div className="badge text-bg-danger">
                              {course.discount}
                            </div>
                          )}
                          <Link to="#" className="fav-icon ms-auto">
                            <i className="isax isax-heart" />
                          </Link>
                        </div>
                      </div>
                      <div className="course-content">
                        <div className="d-flex justify-content-between mb-2">
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.instructorDetails}
                              className="avatar avatar-sm"
                            >
                              <ImageWithBasePath
                                src={course.instructorImg}
                                alt="img"
                                className="img-fluid avatar avatar-sm rounded-circle"
                              />
                            </Link>
                            <div className="ms-2">
                              <Link
                                to={all_routes.instructorDetails}
                                className="link-default fs-14"
                              >
                                {course.instructorName}
                              </Link>
                            </div>
                          </div>
                          <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                            {course.category}
                          </span>
                        </div>
                        <h6 className="title mb-2">
                          <Link to={all_routes.courseDetails}>
                            {course.title}
                          </Link>
                        </h6>
                        <div className="">
                          <h5 className="text-secondary mt-2 mb-0">
                            {course.price}
                          </h5>
                          <Link
                            to={all_routes.courseDetails}
                            className="btn btn-dark btn-sm mt-4 d-inline-flex align-items-center"
                          >
                            View Course
                            <i className="isax isax-arrow-right-3 ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* /pagination */}
              <div className="row align-items-center">
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
      </section>
      {/* /Course */}
    </>
  );
};

export default CourseGrid;
