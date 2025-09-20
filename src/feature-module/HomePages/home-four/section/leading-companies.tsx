import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
// import Slider from "react-slick";

const Leadingcompanies = () => {
  //   const leadingslider = {
  //     infinite: true,
  //     speed: 2000,
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //     autoplay: false,
  //     arrows: false,
  //     dots: false,
  //     responsive: [
  //       {
  //         breakpoint: 1170,
  //         settings: {
  //           slidesToShow: 6,
  //           slidesToScroll: 1,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 0,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           dots: false,
  //         },
  //       },
  //     ],
  //   };

  return (
    <>
      {/* Leading Companies */}
      <section className="real-reviews-sec">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">
              Check out these real reviews
            </span>
            <h2>Users love us Don't take it from us</h2>
            <p>
              95% of eLearning learners report our hands-on content directly
              helped their careers.
            </p>
          </div>
          <div className="real-reviews-group">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up">
                <div className="reviews-img">
                  <ImageWithBasePath
                    src="https://dreamslms.dreamstechnologies.com/html/template/assets/img/feature/feature-21.jpg"
                    alt="Img"
                    className="img-fluid rounded-4"
                  />
                  <span className="review-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/review.svg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-md-12" data-aos="fade-up">
                <div className="owl-carousel real-reviews owl-theme">
                  <div className="item">
                    <div className="real-reviews-grid">
                      <div className="review-content">
                        <h3>Helps us to improve our productivity</h3>
                        <p>
                          Education has always been the foundation of growth,
                          yet there remains a significant gap between{" "}
                          <strong>
                            what is taught and how it is experienced.
                          </strong>{" "}
                          Learners often struggle to access personalized,
                          engaging, and affordable education. With VirtualXai,
                          we are bridging this gap by creating a marketplace of
                          knowledge — where experts, educators, and
                          professionals can easily share their wisdom, and
                          learners can access it anytime, anywhere. Our vision
                          is{" "}
                          <strong>
                            to transform education into an interactive,
                            accessible, and sustainable ecosystem
                          </strong>{" "}
                          for the future.
                        </p>
                      </div>
                      <div className="review-top">
                        <div className="review-info">
                          <h5 data-aos="fade-up">Soumitra Dutta</h5>
                          <h6 data-aos="fade-up"> Founder </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="real-reviews-grid">
                      <div className="review-content">
                        <h3>Helps us to improve our productivity</h3>
                        <p>
                          The future of learning lies in AI-driven education.
                          Traditional systems cannot scale to meet the diverse
                          needs of learners across the world. That’s where
                          VirtualXai steps in — combining the power of AI with
                          the human touch of hyper-realistic avatars. We empower
                          educators to build courses effortlessly, create
                          engaging content, and connect with learners globally.
                          VirtualXai fills the critical gap by making knowledge
                          delivery smarter, interactive, and monetizable, while
                          ensuring learners receive a truly personalized
                          experience.
                        </p>
                      </div>
                      <div className="review-top">
                        <div className="review-info">
                          <h5 data-aos="fade-up">Aditya Malik</h5>
                          <h6 data-aos="fade-up">Co-Founder</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="owl-nav slide-nav-8 nav-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="client-two-carousel">
            <div className="row g-3 justify-content-center">
              {[
                "assets/img/client/16.svg",
                "assets/img/client/17.svg",
                "assets/img/client/18.svg",
                "assets/img/client/19.svg",
                "assets/img/client/20.svg",
                "assets/img/client/21.svg",
              ].map((src, i) => (
                <div key={i} className="col-6 col-sm-4 col-md-2">
                  <div className="lead-img text-center">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt={`client-${i}`}
                      src={src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ImageWithBasePath
          src="assets/img/bg/bg-9.png"
          alt="img"
          className="review-bg"
        />
      </section>
      {/* /Leading Companies */}
    </>
  );
};

export default Leadingcompanies;
