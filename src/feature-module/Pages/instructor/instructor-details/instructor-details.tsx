// import Breadcrumb from "../../../../core/common/Breadcrumb/breadcrumb";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
//import Slider from "react-slick";
import { all_routes } from "../../../router/all_routes";

const InstructorDetails = () => {
  //  const route = all_routes;

  // const instructorDetailsSlider = {
  //     infinite: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           infinite: true,
  //           dots: false,
  //         },
  //       },
  //     ],
  //   };

  const courses = [
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

  const route = all_routes;

  return (
    <>
      {/* <Breadcrumb title="Professionals Details" /> */}

      {/* Instructor */}
      <div className="instructor-detail-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card bg-light mb-4">
                <div className="card-body instructor-details">
                  <div className="instructor-img">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/user/user-64.jpeg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                    <Link to="#" className="btn heart">
                      <i className="isax isax-heart5 text-danger" />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="pb-3 border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="fw-bold">
                          <Link to="#">Rolands Granger</Link>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <Link to="#" className="fs-14 me-2">
                          Developer
                        </Link>
                        <span className="me-2">
                          <i className="fa-solid fa-star text-warning" />
                        </span>
                        <span className="fs-14">4.9 (200 Reviews)</span>
                      </div>
                      <div>
                        <p>
                          I am a web developer with a vast array of knowledge in
                          many different front end and back end languages,
                          responsive frameworks, databases, and best code
                          practices.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center counts-details">
                        <span className="d-flex align-items-center me-4">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                          </span>
                          12+ Lesson
                        </span>
                        <span className="d-flex align-items-center">
                          <span className="d-flex align-items-center">
                            <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                          </span>
                          50 Students
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span>
                          <Link
                            to="#"
                            className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                          >
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </span>
                        <span>
                          <Link
                            to="#"
                            className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                          >
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </span>
                        <span>
                          <Link
                            to="#"
                            className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                          >
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </span>
                        <span>
                          <Link
                            to="#"
                            className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </span>
                        <span>
                          <Link
                            to="#"
                            className="rounded-circle d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">About Me</h5>
                  <p className="mb-3">
                    Very well thought out and articulate communication. Clear
                    milestones, deadlines and fast work. Patience. Infinite
                    patience. No shortcuts. Even if the client is being
                    careless. Some quick example text to build on the card title
                    and bulk the card's content Moltin gives you platform.
                  </p>
                  <Link to="#" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Education</h5>
                  <div className="education-flow">
                    <div className="ps-4 pb-4 timeline-flow">
                      <div>
                        <h6 className="mb-1">
                          BCA - Bachelor of Computer Applications
                        </h6>
                        <p className="fs-14">
                          International University - (2004 - 2010)
                        </p>
                      </div>
                    </div>
                    <div className="ps-4 pb-4 timeline-flow">
                      <div>
                        <h6 className="mb-1">
                          MCA - Master of Computer Application
                        </h6>
                        <p className="fs-14">
                          International University - (2010 - 2012)
                        </p>
                      </div>
                    </div>
                    <div className="ps-4 timeline-flow">
                      <div>
                        <h6 className="mb-1">Design Communication Visual</h6>
                        <p className="fs-14">
                          International University - (2012-2015)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Experience</h5>
                  <div className="d-flex align-items-center mb-4">
                    <span className="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3">
                      <i className="isax isax-briefcase" />
                    </span>
                    <div>
                      <h6 className="mb-1">
                        Web Design &amp; Development Team Leader
                      </h6>
                      <p>Creative Agency - (2013 - 2016)</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3">
                      <i className="isax isax-briefcase" />
                    </span>
                    <div>
                      <h6 className="mb-1">Project Manager</h6>
                      <p>CJobcy Technology Pvt.Ltd - (Present)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Education</h5>

                  {/* Education Item 1 */}
                  <div className="d-flex align-items-center mb-4">
                    <span className="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3">
                      <i className="isax isax-book" />{" "}
                      {/* book icon for education */}
                    </span>
                    <div>
                      <h6 className="mb-1">
                        Bachelor of Science in Computer Science
                      </h6>
                      <p>XYZ University - (2010 - 2013)</p>
                    </div>
                  </div>

                  {/* Education Item 2 */}
                  <div className="d-flex align-items-center mb-4">
                    <span className="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3">
                      <i className="isax isax-book" />
                    </span>
                    <div>
                      <h6 className="mb-1">
                        Master of Science in Web Development
                      </h6>
                      <p>ABC Institute - (2013 - 2015)</p>
                    </div>
                  </div>

                  {/* Education Item 3 */}
                  <div className="d-flex align-items-center">
                    <span className="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3">
                      <i className="isax isax-book" />
                    </span>
                    <div>
                      <h6 className="mb-1">
                        Full-Stack Web Development Bootcamp
                      </h6>
                      <p>Online Course - (2016)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Skills Card */}
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="mb-3">Skills & Endorsements</h5>

                  {/* Skill Item */}
                  <div className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded">
                    <div className="d-flex align-items-center">
                      {/* Company Logo */}
                      <div className="certificate-img rounded-circle me-2">
                        <ImageWithBasePath
                          src="assets/img/certificates/certificate-02.svg"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Redux.js</h6>
                        <small className="text-muted">
                          Frontend Developer at Webkype
                        </small>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      Endorse
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded">
                    <div className="d-flex align-items-center">
                      {/* Company Logo */}
                      <div className="certificate-img rounded-circle me-2">
                        <ImageWithBasePath
                          src="assets/img/certificates/certificate-02.svg"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Node.js</h6>
                        <small className="text-muted">
                          MernStack Developer at INDIAN ROBOTICS SOLUTION PVT
                          LTD
                        </small>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      Endorse
                    </button>
                  </div>

                  {/* Add more skills here */}
                </div>
              </div>
              {/* Skills Card */}

              {/* Recommendations Card */}
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="mb-3">Recommendations</h5>

                  {/* Recommendation Item */}
                  <div className="d-flex mb-3 p-3 border rounded">
                    {/* Person Image */}
                    <div className="me-3">
                      <div
                        className="rounded-circle"
                        style={{
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                        }}
                      >
                        <ImageWithBasePath
                          src="assets/img/user/user-64.jpeg"
                          alt="User"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h6 className="mb-0">John Doe</h6>
                      <small className="text-muted d-block">
                        Frontend Developer at Webkype
                      </small>
                      <small className="text-muted mb-1 d-block">
                        Recommended on June 10, 2025
                      </small>
                      <p className="mb-0 mt-1">
                        Divyam is an amazing developer! He consistently delivers
                        high-quality work and is a great team player.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 p-3 border rounded">
                    <div className="me-3">
                      <div
                        className="rounded-circle"
                        style={{
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                        }}
                      >
                        <ImageWithBasePath
                          src="assets/img/user/user-64.jpeg"
                          alt="User"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <div>
                      <h6 className="mb-0">Jane Smith</h6>
                      <small className="text-muted d-block">
                        Project Manager at INDIAN ROBOTICS SOLUTION PVT LTD
                      </small>
                      <small className="text-muted mb-1 d-block">
                        Recommended on March 15, 2024
                      </small>
                      <p className="mb-0 mt-1">
                        Divyam has strong technical skills and excellent
                        problem-solving abilities. Highly recommended!
                      </p>
                    </div>
                  </div>

                  {/* Add more recommendations here */}
                </div>
              </div>

              {/* <div className="card border-0">
                <div className="card-body p-0">
                  <h5 className="mb-3">Courses</h5>
                  <Slider
                    {...instructorDetailsSlider}
                    className="course-carousal"
                  >
                    <div>
                      <div className="course-item course-item-three mx-2 mb-0">
                        <div className="course-carousal-img position-relative overflow-hidden rounded-3 mb-3">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-02.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                            <Link className="like" to="#">
                              <i className="isax isax-heart color-active" />
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm rounded-circle">
                              <ImageWithBasePath
                                className="img-fluid rounded-circle object-fit-cover"
                                src="./assets/img/avatar/avatar2.jpg"
                                alt="img"
                              />
                            </div>
                            <p className="ms-2">
                              <Link to={route.instructorDetails}>
                                Ana Reyes
                              </Link>
                            </p>
                          </div>
                          <span className="tag-btn">Wordpress</span>
                        </div>
                        <h5 className="mt-3 mb-2 text-truncate line-clamb-2">
                          <Link to={route.courseDetails}>
                            Wordpress for Beginners - Master Wordpress Quickly
                          </Link>
                        </h5>
                        <div className="d-flex align-items-center">
                          <i className="ti ti-star-filled text-warning" />
                          <p className="ms-2">4.4 (160 Reviews)</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3 align-items-center">
                          <h6 className="fs-16 text-secondary">$140</h6>
                          <Link
                            to={route.courseGrid}
                            className="btn view-course-btn"
                          >
                            View Course
                            <i className="fs-8 fas fa-angle-right ms-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="course-item course-item-three mx-2 mb-0">
                        <div className="course-carousal-img position-relative overflow-hidden rounded-3 mb-3">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-03.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                            <Link className="like" to="#">
                              <i className="isax isax-heart color-active" />
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm rounded-circle">
                              <ImageWithBasePath
                                className="img-fluid rounded-circle object-fit-cover"
                                src="./assets/img/avatar/avatar3.jpg"
                                alt="img"
                              />
                            </div>
                            <p className="ms-2">
                              <Link to={route.instructorDetails}>
                                Andrew Pirtle
                              </Link>
                            </p>
                          </div>
                          <span className="tag-btn">Design</span>
                        </div>
                        <h5 className="mt-3 mb-2 text-truncate line-clamb-2">
                          <Link to={route.courseDetails}>
                            Sketch from A to Z (2024): Become an app designer
                          </Link>
                        </h5>
                        <div className="d-flex align-items-center">
                          <i className="ti ti-star-filled text-warning" />
                          <p className="ms-2">4.6 (170 Reviews)</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3 align-items-center">
                          <h6 className="fs-16 text-secondary">$160</h6>
                          <Link
                            to={route.courseGrid}
                            className="btn view-course-btn"
                          >
                            View Course
                            <i className="fs-8 fas fa-angle-right ms-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="course-item course-item-three mx-2 mb-0">
                        <div className="course-carousal-img position-relative overflow-hidden rounded-3 mb-3">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-04.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                            <Link className="like" to="#">
                              <i className="isax isax-heart color-active" />
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm rounded-circle">
                              <ImageWithBasePath
                                className="img-fluid rounded-circle object-fit-cover"
                                src="./assets/img/avatar/avatar4.jpg"
                                alt="img"
                              />
                            </div>
                            <p className="ms-2">
                              <Link to={route.instructorDetails}>Christy</Link>
                            </p>
                          </div>
                          <span className="tag-btn">Programming</span>
                        </div>
                        <h5 className="mt-3 mb-2">
                          <Link
                            to={route.courseDetails}
                            className=" text-truncate line-clamb-2"
                          >
                            Build Responsive Real World Websites with Crash
                            Course
                          </Link>
                        </h5>
                        <div className="d-flex align-items-center">
                          <i className="ti ti-star-filled text-warning" />
                          <p className="ms-2">4.2 (220 Reviews)</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3 align-items-center">
                          <h6 className="fs-16 text-secondary">$200</h6>
                          <Link
                            to={route.courseGrid}
                            className="btn view-course-btn"
                          >
                            View Course
                            <i className="fs-8 fas fa-angle-right ms-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Certifications</h5>
                  <div className="d-flex align-items-center">
                    <div className="certificate-img rounded-circle me-2">
                      <ImageWithBasePath
                        src="assets/img/certificates/certificate-01.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="certificate-img rounded-circle me-2">
                      <ImageWithBasePath
                        src="assets/img/certificates/certificate-02.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="certificate-img rounded-circle me-2">
                      <ImageWithBasePath
                        src="assets/img/certificates/certificate-03.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="certificate-img rounded-circle">
                      <ImageWithBasePath
                        src="assets/img/certificates/certificate-01.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Contact Details</h5>
                  <div className="d-flex align-items-center mb-4">
                    <span className="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="fa-regular fa-envelope" />
                    </span>
                    <div>
                      <h6 className="mb-0">Email</h6>
                      <p className="mb-0">jennywilson@example.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <span className="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="isax isax-location" />
                    </span>
                    <div>
                      <h6 className="fs-16 fw-medium text-gray-9 mb-0">
                        Address
                      </h6>
                      <p className="mb-0 text-truncate">
                        877 Ferry Street, Huntsville, Alabama
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                      <i className="isax isax-call" />
                    </span>
                    <div>
                      <h6 className="fs-16 fw-medium text-gray-9 mb-0">
                        Phone
                      </h6>
                      <p className="mb-0">+1(452) 125-6789</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="mb-3">You May Like</h5>

                  {/* Suggested Course Item */}
                  <div className="d-flex align-items-center mb-3 p-2 border rounded">
                    {/* Course Image */}
                    <div
                      className="rounded me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        overflow: "hidden",
                      }}
                    >
                      <ImageWithBasePath
                        src="assets/img/certificates/certificate-02.svg"
                        alt="Course"
                        className="img-fluid"
                      />
                    </div>

                    {/* Course Info */}
                    <div className="flex-grow-1">
                      <h6 className="mb-0">React.js Advanced Concepts</h6>
                      <small className="text-muted d-block">
                        Frontend Development · 3h 30m
                      </small>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      View
                    </button>
                  </div>

                  <div className="d-flex align-items-center mb-3 p-2 border rounded">
                    <div
                      className="rounded me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        overflow: "hidden",
                      }}
                    >
                      <ImageWithBasePath
                        src="assets/img/certificates/certificate-02.svg"
                        alt="Course"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Node.js & Express Masterclass</h6>
                      <small className="text-muted d-block">
                        Backend Development · 4h 15m
                      </small>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      View
                    </button>
                  </div>

                  <div className="d-flex align-items-center mb-3 p-2 border rounded">
                    <div
                      className="rounded me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        overflow: "hidden",
                      }}
                    >
                      <ImageWithBasePath
                        src="assets/img/certificates/certificate-02.svg"
                        alt="Course"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Fullstack MERN Bootcamp</h6>
                      <small className="text-muted d-block">
                        Fullstack Development · 6h
                      </small>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      View
                    </button>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="mb-3">Pages for You</h5>

                  {/* Page Item */}
                  <div className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded">
                    <div className="d-flex align-items-center">
                      {/* Company Logo */}
                      <div
                        className="rounded-circle me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                        }}
                      >
                        <ImageWithBasePath
                          src={`https://imgs.search.brave.com/pSZmGtBmQvmBaWoCdlIq8OhCEYBnzrxjYMB25Q9SYhs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGZldGNoLmNvbS9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9p/bWFnZXMucHJpc21p/Yy5pby9icmFuZGZl/dGNoLzgwNTliZDVi/LTUwNjgtNGRhNC1h/NTIwLTVjYzQzM2Q1/OTVkYV80LnBuZz9h/dXRvPWNvbXByZXNz/LGZvcm1hdCZ3PTM4/NDAmcT03NQ`}
                          alt="Zoho"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Zoho</h6>
                        <small className="text-muted d-block">
                          Software Development
                        </small>
                        <small className="text-muted d-block">
                          2,154,252 followers · 49 connections follow this page
                        </small>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      Follow
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded">
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                        }}
                      >
                        <ImageWithBasePath
                          src={
                            "https://imgs.search.brave.com/YZ2gq6iyE5ztuu3_xvnMSKHkVVDwdFTEBlJFmS2LZn4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLXByZW1p/dW0vaWNvbm8tbG9n/by1nb29nbGUtZGVm/aW5lLWljb25vLWdv/b2dsZS1idXNjYW5k/by1pY29ub3MtdmVj/dG9yaWFsZXNfOTgx/NTM2LTQ1NC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA"
                          }
                          alt="Google for Developers"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Google for Developers</h6>
                        <small className="text-muted d-block">
                          Technology, Information and Internet
                        </small>
                        <small className="text-muted d-block">
                          2,801,326 followers · 57 connections follow this page
                        </small>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      Follow
                    </button>
                  </div>

                  {/* Add more suggested pages similarly */}
                </div>
              </div>
            </div>
          </div>

          {/* most opted courses */}
          <div className=" ">
            <h6 className="mb-3">Most Opted Courses</h6>
            <div className=" row">
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
          </div>

          {/* most popular videos */}
          <div className="row course-list-cover">
            <h6 className="mb-3">Popular Videos</h6>
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card video-card border-0">
                <div className="video-thumbnail position-relative">
                  <Link to={route.instructorVideoDetails}>
                    <video
                      className="img-fluid rounded w-100"
                      controls
                      // poster="assets/img/videos/video-thumbnail.jpg"
                    >
                      <source
                        src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757921134/videoplayback_emlkcy.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </Link>
                  <span className="video-duration position-absolute bottom-0 end-0 m-2 px-2 py-1 bg-dark text-white small rounded">
                    12:34
                  </span>
                </div>

                <div className="video-info mt-2">
                  {/* Row with profile image and title */}
                  <div className="d-flex align-items-start">
                    {/* Profile Image */}
                    <img
                      src="https://res.cloudinary.com/drj0uehgx/image/upload/v1757919372/Generated_Image_August_27_2025_-_1_43PM_1_biessq.jpg "
                      alt="Prof. Soumitra Dutta"
                      className="rounded-circle me-2 mt-1"
                      width="36"
                      height="36"
                    />

                    {/* Title and Author */}
                    <div>
                      <h6 className="video-title mb-1">
                        <Link
                          to={route.instructorVideoDetails}
                          className="text-dark"
                          style={{}}
                        >
                          Global Indexing Explained: Importance, Usability &
                          Need | Prof. Soumitra Dutta
                        </Link>
                      </h6>
                      <p className="text-muted mb-0 small">
                        Prof. Soumitra Dutta
                      </p>
                      <p className="text-muted mb-0 small">
                        1.2 M View | 11 Months.
                      </p>
                    </div>
                  </div>

                  {/* Indent views + time text to align with title */}
                  <div className="ms-5">
                    {/* <p className="text-muted mb-0 small mt-1">
                            1.2 M View  | 11 Months.
                          </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card video-card border-0">
                <div className="video-thumbnail position-relative">
                  <Link to={route.instructorVideoDetails}>
                    <video
                      className="img-fluid rounded w-100"
                      controls
                      // poster="assets/img/videos/video-thumbnail.jpg"
                    >
                      <source
                        src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757921352/videoplayback2_dbbtck.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </Link>
                  <span className="video-duration position-absolute bottom-0 end-0 m-2 px-2 py-1 bg-dark text-white small rounded">
                    12:34
                  </span>
                </div>

                <div className="video-info mt-2">
                  {/* Row with profile image and title */}
                  <div className="d-flex align-items-start">
                    {/* Profile Image */}
                    <img
                      src="https://res.cloudinary.com/drj0uehgx/image/upload/v1757919372/Generated_Image_August_27_2025_-_1_43PM_1_biessq.jpg "
                      alt="Prof. Soumitra Dutta"
                      className="rounded-circle me-2 mt-1"
                      width="36"
                      height="36"
                    />

                    {/* Title and Author */}
                    <div>
                      <h6 className="video-title mb-1">
                        <Link
                          to={route.instructorVideoDetails}
                          className="text-dark"
                        >
                          Global Indexing Explained: Importance, Usability &
                          Need | Prof. Soumitra Dutta
                        </Link>
                      </h6>
                      <p className="text-muted mb-0 small">
                        Prof. Soumitra Dutta
                      </p>
                      <p className="text-muted mb-0 small">
                        1.2 M View | 11 Months.
                      </p>
                    </div>
                  </div>

                  {/* Indent views + time text to align with title */}
                  <div className="ms-5">
                    {/* <p className="text-muted mb-0 small mt-1">
                            1.2 M View  | 11 Months.
                          </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card video-card border-0">
                <div className="video-thumbnail position-relative">
                  <Link to={route.instructorVideoDetails}>
                    <video
                      className="img-fluid rounded w-100"
                      controls
                      // poster="assets/img/videos/video-thumbnail.jpg"
                    >
                      <source
                        src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757921510/videoplayback3_qaywne.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </Link>
                  <span className="video-duration position-absolute bottom-0 end-0 m-2 px-2 py-1 bg-dark text-white small rounded">
                    12:34
                  </span>
                </div>

                <div className="video-info mt-2">
                  {/* Row with profile image and title */}
                  <div className="d-flex align-items-start">
                    {/* Profile Image */}
                    <img
                      src="https://res.cloudinary.com/drj0uehgx/image/upload/v1757919372/Generated_Image_August_27_2025_-_1_43PM_1_biessq.jpg "
                      alt="Prof. Soumitra Dutta"
                      className="rounded-circle me-2 mt-1"
                      width="36"
                      height="36"
                    />

                    {/* Title and Author */}
                    <div>
                      <h6 className="video-title mb-1">
                        <Link
                          to={route.instructorVideoDetails}
                          className="text-dark"
                        >
                          Global Indexing Explained: Importance, Usability &
                          Need | Prof. Soumitra Dutta
                        </Link>
                      </h6>
                      <p className="text-muted mb-0 small">
                        Prof. Soumitra Dutta
                      </p>
                      <p className="text-muted mb-0 small">
                        1.2 M View | 11 Months.
                      </p>
                    </div>
                  </div>

                  {/* Indent views + time text to align with title */}
                  <div className="ms-5">
                    {/* <p className="text-muted mb-0 small mt-1">
                            1.2 M View  | 11 Months.
                          </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Instructor */}
    </>
  );
};

export default InstructorDetails;
