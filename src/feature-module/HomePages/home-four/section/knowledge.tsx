import ImageWithBasePath from "../../../../core/common/imageWithBasePath";

const Knowledge = () => {
  return (
    <>
      {/* Share your knowledge */}
      <div className="knowledge-sec">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 ps-0">
              <div className="featured-img-1" />
            </div>
            <div className="col-lg-6 col-sm-12 p-0" data-aos="fade-up">
              <div className="joing-group">
                <div className="section-header">
                  <h2 className="mb-2">
                    Want to share your knowledge? Join us a Mentor
                  </h2>
                </div>
                <div className="joing-list">
                  <ul>
                    <li data-aos="fade-bottom">
                      <div className="joing-header">
                        <span className="joing-icon bg-primary">
                          <ImageWithBasePath
                            src="assets/img/icons/joing-01.svg"
                            alt="Img"
                            className="img-fluid"
                          />
                        </span>
                        <div className="joing-content">
                          <h5 className="title">
                            Create Your Professional Profile
                          </h5>
                          <p>
                            Tell us who you are, and our AI will craft a
                            polished professional profile that attracts,
                            impresses, and engages learners, followers, and
                            users.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li data-aos="fade-bottom">
                      <div className="joing-header">
                        <span className="joing-icon bg-warning">
                          <ImageWithBasePath
                            src="assets/img/icons/joing-02.svg"
                            alt="Img"
                            className="img-fluid"
                          />
                        </span>
                        <div className="joing-content">
                          <h5 className="title">
                            Build Courses with a Simple Prompt
                          </h5>
                          <p>
                            Share your skills in a single line — VirtualXai’s AI
                            generates complete, detailed courses for you. Sell
                            at your own price and let your hyper-realistic AI
                            avatar deliver them.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li data-aos="fade-bottom">
                      <div className="joing-header">
                        <span className="joing-icon bg-success">
                          <ImageWithBasePath
                            src="assets/img/icons/joing-03.svg"
                            alt="Img"
                            className="img-fluid"
                          />
                        </span>
                        <div className="joing-content aos">
                          <h5 className="title">Your Content, Your Earnings</h5>
                          <p>
                            Easily turn your knowledge into income. AI
                            auto-creates videos, highlights, and lectures to
                            engage your audience, and you earn on every
                            subscription and view.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li data-aos="fade-bottom" className="mb-0">
                      <div className="joing-header">
                        <span className="joing-icon bg-secondary">
                          <ImageWithBasePath
                            src="assets/img/icons/joing-04.svg"
                            alt="Img"
                            className="img-fluid"
                          />
                        </span>
                        <div className="joing-content aos">
                          <h5 className="title">Interactive AI Avatar Q&A</h5>
                          <p>
                            Let people interact directly with your lifelike
                            avatar. Host unlimited, multilingual Q&A sessions
                            that are professional, fact-based, and always
                            available.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Share your knowledge */}
    </>
  );
};

export default Knowledge;
