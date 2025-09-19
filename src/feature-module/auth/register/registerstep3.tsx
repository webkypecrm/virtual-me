import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { Modal, Button } from "react-bootstrap";

import RegisterLoading from "./loading";

const Registerstep3: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    socials: [] as string[],
    currency: "",
    customUrl: "",
    plan: "pro",
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const route = all_routes;
  const navigate = useNavigate();

  // Handle inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true); // show full-page loader

    setTimeout(() => {
      navigate(route.instructorDashboard); // navigate after 5 sec
    }, 5000);
  };

  const handleMaybeLater = () => {
    setLoading(true); // show full-page loader

    setTimeout(() => {
      navigate(route.instructorDashboard);
    }, 5000);
  };

  // 🔹 Right card (Setup Business Form)

  const renderCard = () => {
    // Base Pro features
    const proFeatures = [
      {
        id: "faq1",
        title: "Launch your products",
        img: "https://d2oi1rqwb0pj00.cloudfront.net/nasio/get-started/nsp/pro-product-launch.png",
        desc: "Quickly launch and scale your products with our powerful tools designed for growth.",
      },
      {
        id: "faq2",
        title: "Verified badge",
        img: "https://d2oi1rqwb0pj00.cloudfront.net/nasio/get-started/nsp/pro-verified-badge.png",
        desc: "Get a verified badge to build instant trust with your audience.",
      },
      {
        id: "faq3",
        title: "Up to 10,000 members",
        img: "https://d2oi1rqwb0pj00.cloudfront.net/nasio/get-started/nsp/pro-member-limit.png",
        desc: "Grow your community and manage up to 10,000 members seamlessly.",
      },
      {
        id: "faq4",
        title: "Access to payment links",
        img: "https://d2oi1rqwb0pj00.cloudfront.net/nasio/get-started/nsp/pro-zero-link.png",
        desc: "Easily create and share payment links to collect money hassle-free.",
      },
      {
        id: "faq5",
        title: "Priority chat",
        img: "https://d2oi1rqwb0pj00.cloudfront.net/nasio/get-started/nsp/pro-account-manager.png",
        desc: "Get priority chat support for faster query resolution whenever you need help.",
      },
      {
        id: "faq6",
        title: "AI Cofounder & Templates",
        img: "https://d2oi1rqwb0pj00.cloudfront.net/nasio/get-started/nsp/pro-ai-templates.png",
        desc: "Leverage AI-powered templates and tools to accelerate your workflows.",
      },
      {
        id: "faq7",
        title: "Lead generation",
        img: "https://d2oi1rqwb0pj00.cloudfront.net/nasio/get-started/nsp/ai-lead-generation.png",
        desc: "Generate high-quality leads with built-in lead generation tools.",
      },
      {
        id: "faq8",
        title: "Access to AI School",
        img: "https://d2oi1rqwb0pj00.cloudfront.net/nasio/get-started/nsp/ai-school.png",
        desc: "Learn from the best with our AI School resources and training programs.",
      },
    ];

    // Extra Platinum-only features
    const platinumExtras = [
      {
        id: "faq9",
        title: "Lowest fee rate",
        img: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
        desc: "Enjoy the industry’s lowest transaction and service fee rates.",
      },
      {
        id: "faq10",
        title: "Dedicated account manager",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        desc: "Get a dedicated manager to guide and support your business.",
      },
      {
        id: "faq11",
        title: "Run ads on Facebook & Instagram",
        img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
        desc: "Boost your reach by running ads directly on Facebook and Instagram.",
      },
      {
        id: "faq12",
        title: "Affiliate tool",
        img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        desc: "Grow your business with our integrated affiliate marketing tools.",
      },
    ];

    // Merge features based on selected plan
    const features =
      formData.plan === "platinum"
        ? [...proFeatures, ...platinumExtras]
        : proFeatures;

    return (
      <div
        className="login-wrapper w-100 rounded-4"
        style={{ padding: "1rem" }}
      >
        <div className="loginbox">
          <div className="w-100">
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between login-header mb-3">
              <button
                type="button"
                className="btn btn-outline-primary btn-md"
                disabled
              >
                What’s Your Unlock
              </button>
              <button
                type="button"
                className="btn btn-outline-primary btn-md"
                onClick={() => setShowModal(true)}
              >
                View All Benefits
              </button>
            </div>

            {/* Features / FAQ style */}
            <div className="scroll-area">
              {features.map((item) => (
                <div className="faq-card rounded-4 mb-2" key={item.id}>
                  <h6 className="faq-title d-flex align-items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="me-2 ms-3"
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    />
                    <Link
                      className="collapsed flex-grow-1"
                      data-bs-toggle="collapse"
                      to={`#${item.id}`}
                      aria-expanded="false"
                    >
                      {item.title}
                    </Link>
                  </h6>
                  <div id={item.id} className="collapse">
                    <div className="faq-detail">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Main Wrapper */}
      {loading ? (
        <RegisterLoading />
      ) : (
        <div className="main-wrapper">
          <div className="login-content register-bg-gredient d-flex align-items-center min-vh-100">
            <div className="container">
              <div className="row justify-content-center">
                {/* Left Card (Plans) */}
                <div className="col-md-6 mb-4">
                  <div
                    className="login-wrapper w-100 rounded-4"
                    style={{ padding: "1rem" }}
                  >
                    <div className="loginbox">
                      <div className="w-100">
                        {/* Header */}
                        {/* <div className="d-flex align-items-center justify-content-end login-header mb-3">
                          <ImageWithBasePath
                          src="assets/img/logo-virtual.png"
                          className="img-fluid"
                          alt="Logo"
                          height={80}
                          width={80}
                        />
                          <Link to={route.registerStepTwo} className="link-1">
                            Back to Step 2
                          </Link>
                        </div> */}

                        <h1 className="fs-26 fw-semibold topic">
                          Grow your business faster
                        </h1>

                        {/* Plans */}
                        <form
                          onSubmit={handleSubmit}
                          className="mb-1 mt-3 pb-3"
                        >
                          <div className="row g-3">
                            {/* Go Pro */}
                            <div className="col-6">
                              <label
                                className={`w-100 border rounded-3 p-3 d-flex justify-content-center align-items-start ${
                                  formData.plan === "pro"
                                    ? "border-primary"
                                    : ""
                                }`}
                                style={{
                                  cursor: "pointer",
                                  background: "white",
                                }}
                              >
                                <div className="w-100 d-flex flex-column justify-content-start align-items-start">
                                  <span className="fw-semibold">Go Pro</span>
                                  <div className="text-muted small">
                                    Everything you need
                                  </div>
                                </div>
                                <input
                                  type="radio"
                                  name="plan"
                                  value="pro"
                                  checked={formData.plan === "pro"}
                                  onChange={handleChange}
                                  className="form-check-input me-2 mb-2"
                                />
                              </label>
                            </div>

                            {/* Go Platinum */}
                            <div className="col-6">
                              <label
                                className={`w-100 border rounded-3 p-3 d-flex justify-content-center align-items-start ${
                                  formData.plan === "platinum"
                                    ? "border-primary"
                                    : ""
                                }`}
                                style={{
                                  cursor: "pointer",
                                  background: "white",
                                }}
                              >
                                <div className="w-100 d-flex flex-column justify-content-start align-items-start">
                                  <span className="fw-semibold">
                                    Go Platinum
                                  </span>
                                  <div className="text-muted small">
                                    Dedicated human support
                                  </div>
                                </div>
                                <input
                                  type="radio"
                                  name="plan"
                                  value="platinum"
                                  checked={formData.plan === "platinum"}
                                  onChange={handleChange}
                                  className="form-check-input me-2 mb-2"
                                />
                              </label>
                            </div>
                          </div>

                          {/* Upgrade Buttons */}
                          {/* Upgrade Buttons */}
                          <div className="d-grid gap-2 mt-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-md"
                              disabled={loading} // disable while loading
                            >
                              {loading ? "Loading..." : "Upgrade Now"}
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-md"
                              onClick={handleMaybeLater}
                              disabled={loading}
                            >
                              {loading ? "Loading..." : "Maybe Later"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card */}
                <div className="col-md-6 mb-4">{renderCard()}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for View All Benefits */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Compare Plans & Benefits</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="table-responsive"
            style={{
              maxHeight: "400px",
              overflowY: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            }}
          >
            <table className="table table-bordered text-start">
              <thead className="table-light">
                <tr>
                  <th>Plan</th>
                  <th>Trial</th>
                  <th>Pro</th>
                  <th>Platinum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Start & Monetize / Publish products</td>
                  <td>-</td>
                  <td>Upgrade</td>
                  <td>Upgrade</td>
                </tr>
                <tr>
                  <td>Transaction fee</td>
                  <td>-</td>
                  <td>4.9%</td>
                  <td>4.9%</td>
                </tr>
                <tr>
                  <td>Payment links</td>
                  <td>-</td>
                  <td>1-3%</td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td>AI Cofounder</td>
                  <td>5 msgs/day</td>
                  <td>100 msgs/day</td>
                  <td>300 msgs/day</td>
                </tr>
                <tr>
                  <td>AI Templates</td>
                  <td>-</td>
                  <td>10/month</td>
                  <td>30/month</td>
                </tr>
                <tr>
                  <td>Verification badge</td>
                  <td>-</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Members</td>
                  <td>500</td>
                  <td>10,000</td>
                  <td>100,000</td>
                </tr>
                <tr>
                  <td>Additional manager</td>
                  <td>0</td>
                  <td>3</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>1 GB</td>
                  <td>50 GB</td>
                  <td>100 GB</td>
                </tr>
                <tr>
                  <td>Magic Ads / Affiliate / Event QR / Custom Emails</td>
                  <td>-</td>
                  <td>Partial</td>
                  <td>Full</td>
                </tr>
                <tr>
                  <td>Magic Reach WhatsApp</td>
                  <td>500/month</td>
                  <td>1,000/month</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Priority Support & Perks</td>
                  <td>Standard</td>
                  <td>Priority</td>
                  <td>Dedicated human support</td>
                </tr>
                <tr>
                  <td>Traffic analytics / Pixel tracking / Embed widget</td>
                  <td>-</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Registerstep3;
