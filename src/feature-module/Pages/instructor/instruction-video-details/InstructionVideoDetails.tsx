import { useState } from "react";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const InstructorVideoDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Adrian Hendriques",
      avatar: "assets/img/user/user-05.jpg",
      time: "2 days ago",
      content:
        "I highly recommend to anyone looking to learn. Their passion for the subject and dedication to students make them an outstanding instructor.",
      likes: 21,
      dislikes: 50,
      hearts: 45,
      replies: [
        {
          id: 11,
          user: "Rolands Granger",
          avatar: "assets/img/user/user-25.jpg",
          time: "2 days ago",
          content: "Thanks! Best luck for Future",
          likes: 21,
          dislikes: 50,
          hearts: 45,
        },
      ],
    },
    {
      id: 2,
      user: "Jane Doe",
      avatar: "assets/img/user/user-26.jpg",
      time: "3 days ago",
      content:
        "Great course, but could use more real-world examples to practice the concepts.",
      likes: 10,
      dislikes: 5,
      hearts: 8,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const newEntry = {
      id: Date.now(),
      user: "Current User",
      avatar: "assets/img/user/default-avatar.jpg",
      time: "Just now",
      content: newComment,
      likes: 0,
      dislikes: 0,
      hearts: 0,
      replies: [],
    };
    setComments([newEntry, ...comments]);
    setNewComment("");
  };

  return (
    <>
      <div className="instructor-detail-content py-4">
        <div className="container">
          <div className="row">
            {/* LEFT: Main Video Section */}
            <div className="col-lg-7">
              {/* Main Video */}
              <div className="mb-4">
                <video className="w-100 rounded" controls>
                  <source
                    src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757921134/videoplayback_emlkcy.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Title */}
              <h5 className="fw-bold mb-2">
                Global Indexing Explained: Importance, Usability & Need | Prof.
                Soumitra Dutta
              </h5>

              {/* Channel + Actions */}
              <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://res.cloudinary.com/drj0uehgx/image/upload/v1757919372/Generated_Image_August_27_2025_-_1_43PM_1_biessq.jpg"
                    alt="Instructor"
                    className="rounded-circle me-2"
                    width="48"
                    height="48"
                  />
                  <div>
                    <p className="mb-0 fw-semibold d-flex align-items-center">
                      Prof. Soumitra Dutta
                      <i className="bi bi-patch-check-fill text-primary ms-1"></i>
                    </p>
                    <p className="text-muted small mb-0">120K subscribers</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <button className="btn btn-light fw-semibold rounded-2 px-3">
                    Follow
                  </button>
                  <div className="d-flex align-items-center border rounded-pill px-1">
                    <Link
                      to="#"
                      className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                    >
                      <i className="isax isax-like-15 me-1" />
                      55K
                    </Link>
                    <div className="vr mx-1"></div>
                    <Link
                      to="#"
                      className="text-gray-5 d-inline-flex align-items-center  fs-14"
                    >
                      <i className="isax isax-dislike5 me-1" />2
                    </Link>

                    <button
                      className="btn btn-sm text-dark"
                      // style={{ color: "blue" }}
                    >
                      {/* <i className="bi bi-hand-thumbs-down"></i> */}
                    </button>
                  </div>
                  <button className="btn btn-light btn-sm d-flex align-items-center rounded-2">
                    <i className="bi bi-share me-1"></i> Share
                  </button>
                  <button className="btn btn-light btn-sm d-flex align-items-center rounded-2">
                    <i className="bi bi-download me-1"></i> Explore Courses
                  </button>
                  <button className="btn btn-light btn-sm rounded-circle">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>
              </div>

              {/* Description with View More */}
              <div className="bg-light-900 p-3 rounded-3">
                <p className="text-muted ">
                  {showFullDescription
                    ? `Global indexing refers to the practice of building investment or
                  information indexes that cover markets, companies, or data
                  points on a worldwide scale. In finance, global indexing allows
                  investors to diversify portfolios by tracking the performance of
                  international markets through benchmark indexes like MSCI World
                  or FTSE Global. Beyond finance, in technology and information
                  systems, global indexing ensures seamless organization,
                  retrieval, and comparison of data across geographies,
                  industries, and contexts. Its importance lies in providing a
                  unified, transparent, and standardized framework that reduces
                  fragmentation, improves accessibility, and supports informed
                  decision-making in an increasingly interconnected world.`
                    : `Global indexing refers to the practice of building investment or information indexes that cover markets, companies, or data points on a worldwide scale...`}
                </p>
                <button
                  className="btn btn-sm btn-link p-0"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? "Show Less" : "View More"}
                </button>
              </div>

              {/* Comment Section */}
              <div className="mt-4">
                <h5 className="mb-3 fs-18">Comments</h5>

                {/* Add New Comment */}
                <div className="mb-3">
                  <textarea
                    className="form-control mb-2"
                    rows={3}
                    placeholder="Add a public comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleAddComment}
                  >
                    Comment
                  </button>
                </div>

                {/* Existing Comments */}
                {/* Existing Comments */}
                {comments.map((c) => (
                  <div className="review-item shadow-none mb-3" key={c.id}>
                    <div className="review-info">
                      <div className="d-flex align-items-center mb-2">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src={c.avatar}
                            className="rounded-circle"
                            alt={c.user}
                          />
                        </span>
                        <div>
                          <h5 className="fs-16 fw-medium">{c.user}</h5>
                          <div className="d-flex align-items-center flex-wrap date-info">
                            <span className="mb-0 fs-14">{c.time}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mb-2 mt-1">{c.content}</p>

                      {/* Like / Dislike / Heart - YouTube style */}
                      <div className="d-inline-flex align-items-center mb-2">
                        <Link
                          to="#"
                          className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                        >
                          <i className="isax isax-like-15 me-1" />
                          {c.likes}
                        </Link>
                        <Link
                          to="#"
                          className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                        >
                          <i className="isax isax-dislike5 me-1" />
                          {c.dislikes}
                        </Link>
                        <Link
                          to="#"
                          className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                        >
                          <i className="isax isax-heart5 text-danger me-1" />
                          {c.hearts}
                        </Link>
                        <Link
                          to="#"
                          className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                        >
                          Reply
                        </Link>
                      </div>

                      {/* Replies */}
                      {c.replies.map((r) => (
                        <div
                          className="review-info border-0 bg-light-900 reply mt-3 p-3 rounded-2"
                          key={r.id}
                        >
                          <div className="d-flex align-items-center mb-2">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src={r.avatar}
                                className="rounded-circle"
                                alt={r.user}
                              />
                            </span>
                            <div>
                              <h6 className="fs-16 fw-medium">{r.user}</h6>
                              <div className="d-flex align-items-center flex-wrap date-info">
                                <span className="mb-0 fs-14">{r.time}</span>
                              </div>
                            </div>
                          </div>
                          <p className="mb-2">{r.content}</p>
                          <div className="d-inline-flex align-items-center">
                            <Link
                              to="#"
                              className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                            >
                              <i className="isax isax-like-15 me-1" />
                              {r.likes}
                            </Link>
                            <Link
                              to="#"
                              className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                            >
                              <i className="isax isax-dislike5 me-1" />
                              {r.dislikes}
                            </Link>
                            <Link
                              to="#"
                              className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                            >
                              <i className="isax isax-heart5 text-danger me-1" />
                              {r.hearts}
                            </Link>
                            <Link
                              to="#"
                              className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Videos List */}
            <div className="col-lg-5">
              <h6 className="mb-3">Suggested Videos</h6>
              {[1, 2, 3].map((_, index) => (
                <div
                  className="d-flex flex-column flex-md-row rounded-3 overflow-hidden mb-3 position-relative suggested-video-item"
                  key={index}
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ flex: "0 0 200px", maxWidth: "160px" }}>
                    <Link to="#">
                      <video
                        className="img-fluid w-100 h-100 rounded-3"
                        controls
                      >
                        <source
                          src="https://res.cloudinary.com/drj0uehgx/video/upload/v1757921510/videoplayback3_qaywne.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </Link>
                  </div>

                  <div className="p-2 flex-grow-1 d-flex justify-content-between">
                    <div>
                      <h6 className="mb-1">
                        <Link
                          to="#"
                          className="text-dark"
                          style={{ fontSize: "13px" }}
                        >
                          Global Indexing Explained: Importance, Usability &
                          Need | Prof. Soumitra Dutta
                        </Link>
                      </h6>
                      <p className="text-muted small mb-0">Aditya Malik</p>
                      <p className="text-muted small mb-0">
                        899K views • 1 month ago
                      </p>
                    </div>

                    {/* 3-dot options menu */}
                    <BsThreeDotsVertical
                      style={{
                        color: "black",
                        fontSize: "26px",
                        cursor: "pointer",
                      }}
                    />
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
