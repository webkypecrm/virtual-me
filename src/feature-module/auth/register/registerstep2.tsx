import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import { Modal, Button, Form } from "react-bootstrap";

const Registerstep2: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    socials: [] as string[], // array of social links
    currency: "",
    customUrl: "",
  });

  const [showModal, setShowModal] = useState(false);
  const route = all_routes;
  const navigate = useNavigate();

  // 🔹 Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle currency selection
  const handleCurrencySelect = (currency: string) => {
    setFormData((prev) => ({ ...prev, currency }));
  };

  // 🔹 Handle adding socials (Google, Facebook, etc.)
  const handleSocialAdd = (social: string) => {
    if (!formData.socials.includes(social)) {
      setFormData((prev) => ({ ...prev, socials: [...prev.socials, social] }));
    }
  };

  // 🔹 Handle custom URL save
  const handleSaveCustomUrl = () => {
    if (formData.customUrl && !formData.socials.includes(formData.customUrl)) {
      setFormData((prev) => ({
        ...prev,
        socials: [...prev.socials, formData.customUrl],
        customUrl: "",
      }));
    }
    setShowModal(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Final Data:", formData);
    navigate(route.registerStepThree);
  };

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div
          className="login-content d-flex align-items-center justify-content-center min-vh-100"
          style={{
            background: "linear-gradient(to right, #feeef0, #f6cbccff)",
          }}
        >
          <div
            className="login-wrapper w-100 rounded-4"
            style={{ maxWidth: 540, padding: "1rem", background: "white" }}
          >
            <div className="loginbox">
              <div className="w-100">
                {/* Header */}
                <div className="d-flex align-items-center justify-content-between login-header mb-3">
                  <ImageWithBasePath
                    src="assets/img/logo-virtual.png"
                    className="img-fluid"
                    alt="Logo"
                    height={80}
                    width={80}
                  />
                  <Link to={route.register} className="link-1">
                    Back to Step 1
                  </Link>
                </div>

                <h1 className="fs-26 fw-semibold topic">Setup your business</h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mb-1 mt-3 pb-3">
                  {/* Business Name */}
                  <div className="mb-3">
                    <label className="form-label">Business Name (if any)</label>
                    <div className="position-relative">
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="form-control form-control-md"
                        placeholder="Enter your business name"
                      />
                      <span>
                        <i className="isax isax-user input-icon text-gray-7 fs-14" />
                      </span>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="mb-3 mt-4">
                    <label className="form-label d-block mb-1">
                      Link your socials
                    </label>
                    <small className="text-muted d-block mb-2">
                      Add at least 1 to get started
                    </small>

                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        variant="light"
                        onClick={() => handleSocialAdd("Google")}
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/google.svg"
                          alt="img"
                          className="me-2"
                        />
                        Google
                      </Button>
                      <Button
                        variant="light"
                        onClick={() => handleSocialAdd("Facebook")}
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/facebook.svg"
                          alt="img"
                          className="me-2"
                        />
                        Facebook
                      </Button>
                      <Button
                        variant="light"
                        onClick={() => handleSocialAdd("LinkedIn")}
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/linkedin.svg"
                          alt="img"
                          className="me-2"
                        />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowModal(true)}
                      >
                        <i className="isax isax-add me-1"></i> More
                      </Button>
                    </div>

                    {/* Show selected socials */}
                    {formData.socials.length > 0 && (
                      <div className="mt-2">
                        <small className="text-muted">Selected:</small>{" "}
                        {formData.socials.join(", ")}
                      </div>
                    )}
                  </div>

                  {/* Business Currency */}
                  <div className="mb-3">
                    <label className="form-label d-block">
                      Business Currency
                    </label>
                    <div className="dropdown w-100">
                      <Link
                        to="#"
                        className="dropdown-toggle text-gray-6 btn rounded border d-inline-flex align-items-center w-100 justify-content-between"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {formData.currency || "Select Currency"}
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3 w-100">
                        {[
                          "USD - US Dollar",
                          "EUR - Euro",
                          "GBP - British Pound",
                          "INR - Indian Rupee",
                          "JPY - Japanese Yen",
                          "AUD - Australian Dollar",
                          "CAD - Canadian Dollar",
                        ].map((currency) => (
                          <li key={currency}>
                            <button
                              type="button"
                              className="dropdown-item rounded-1 w-100 text-start"
                              onClick={() => handleCurrencySelect(currency)}
                            >
                              {currency}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="d-grid">
                    <button className="btn btn-secondary btn-md" type="submit">
                      Create My Business{" "}
                      <i className="isax isax-arrow-right-3 ms-1" />
                    </button>
                  </div>
                </form>

                {/* Already have account */}
                <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
                  Already you have an account?
                  <Link to={route.login} className="link-2 ms-1">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for custom social URL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Social Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Enter URL</Form.Label>
            <Form.Control
              type="url"
              name="customUrl"
              placeholder="https://example.com/yourprofile"
              value={formData.customUrl}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveCustomUrl}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Registerstep2;
