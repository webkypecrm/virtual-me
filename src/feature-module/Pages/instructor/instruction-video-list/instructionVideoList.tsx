// import type { SliderSingleProps } from "antd";
// import { Slider } from "antd";
import { all_routes } from "../../../router/all_routes";
// import Breadcrumb from "../../../../core/common/Breadcrumb/breadcrumb";
import { Link } from "react-router-dom";

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

  // console.log(selectedItems);

  const route = all_routes;

  return (
    <>
      {/* <Breadcrumb title="Professionals" /> */}
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

                <div className="d-flex flex-column flex-md-row rounded-3 overflow-hidden mb-3">
                  {/* LEFT: Video */}
                  <div
                    className="w-100 w-md-50 "
                    style={{ maxWidth: "100%", flex: "0 0 300px" }}
                  >
                    <Link to={route.instructorVideoDetails}>
                      <video
                        className="img-fluid w-100 h-100 rounded-3"
                        controls
                        // poster="https://via.placeholder.com/300x180"
                      >
                        <source
                          src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757921352/videoplayback2_dbbtck.mp4"
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
                          Global Indexing Explained: Importance, Usability &
                          Need | Prof. Soumitra Dutta
                        </Link>
                      </h6>

                      {/* Instructor Name */}
                      {/* Instructor Image + Name */}
                      <div className="d-flex align-items-center mb-1">
                        <img
                          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1757919372/Generated_Image_August_27_2025_-_1_43PM_1_biessq.jpg "
                          // Replace with actual image URL
                          alt="Prof. Soumitra Dutta"
                          className="rounded-circle me-2"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                          }}
                        />
                        <p className="text-muted mb-0 small">
                          Prof. Soumitra Dutta
                        </p>
                      </div>

                      {/* Views & Posted Time */}
                      <p className="text-muted small mb-0">
                        1.2 M View | 11 Months.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row rounded-3 rounded overflow-hidden mb-3">
                  {/* LEFT: Video */}
                  <div
                    className="w-100 w-md-50"
                    style={{ maxWidth: "100%", flex: "0 0 300px" }}
                  >
                    <Link to={route.instructorVideoDetails}>
                      <video
                        className="img-fluid w-100 h-100  rounded-3"
                        controls
                        // poster="https://via.placeholder.com/300x180"
                      >
                        <source
                          src="https://r1---sn-qxaelnel.googlevideo.com/videoplayback?expire=1757943157&ei=FcHHaIOPEv67vdIPq6vyoQ8&ip=176.1.206.122&id=o-ANm2m9HLhTQLs0dUtEZN58JVjmJfnfxHs9nQ9Se8Gby2&itag=135&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398%2C598&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=ATw7iSV0QSHG0sfM9zkHZEL946-prwtCHUFv0cg3MYAlB4E-lqnLPcU0tgJ2kHpQbDVC90HCfYbHDw68&spc=hcYD5eEOv__M90OaRgLB5fLKg771O7WhsB_VhcdBow0jShQj64PgvCS6A4BSRVXgpAAarnAhQLbnXayrKgmbgCeR&vprv=1&svpuc=1&mime=video%2Fmp4&ns=rOHbSyQs-oTqydhAgLnPciEQ&rqh=1&gir=yes&clen=77921521&dur=1910.080&lmt=1693582413246133&keepalive=yes&fexp=51331020%2C51552689%2C51565115%2C51565681%2C51580968&c=MWEB&sefc=1&txp=5432434&n=3YucUeBUIpOqoA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgPT39fqDNkgcuVWMTOPZfZg2Z3xo64gnSdSw2ZK5Z56YCIQD2Ds3km_wuGRfPX0HiRrrZw26tdV037q0FxhD_tRVc5A%3D%3D&pot=MnbelozV9pfa1t6oy7RWV-ggjq4PpYSrzngaeUuEA4qdGdQjX6uzJp6Cv6vCm47wbr6GY0k4oYjWhtGtmTmK_rZlhKf9GR0MIKGZYwzLIPlupT9HzTt0gx0hT-PhQFnOylPCQRf4YhobhkukOF3uMqQrSCg9B02I&cms_redirect=yes&met=1757921623,&mh=m0&mip=103.172.252.176&mm=31&mn=sn-qxaelnel&ms=au&mt=1757920904&mv=m&mvi=1&pl=24&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIgTZRhuJ6ILy_y8BQImpTXtHElLXQ5dcgUvdq2YwAOo-UCIBGfGgb6sDb0kAcSQ5q4VaqDtI6A4pXDU9YOBX-_LIbz"
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
                          Global Indexing Explained: Importance, Usability &
                          Need | Prof. Soumitra Dutta
                        </Link>
                      </h6>

                      {/* Instructor Name */}
                      {/* Instructor Image + Name */}
                      <div className="d-flex align-items-center mb-1">
                        <img
                          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1757919372/Generated_Image_August_27_2025_-_1_43PM_1_biessq.jpg "
                          // Replace with actual image URL
                          alt="Prof. Soumitra Dutta"
                          className="rounded-circle me-2"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                          }}
                        />
                        <p className="text-muted mb-0 small">
                          Prof. Soumitra Dutta
                        </p>
                      </div>

                      {/* Views & Posted Time */}
                      <p className="text-muted small mb-0">
                        1.2 M View | 11 Months.
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
