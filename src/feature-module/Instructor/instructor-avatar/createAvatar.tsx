import React, { useState } from "react";
import UploadStep from "../common/uploadSteps";
import { Link } from "react-router-dom";

const CreateAvatar: React.FC = () => {
  const [step, setStep] = useState(0);

  // Define steps in correct sequence
  const steps = [
    { key: "instructions", label: "Instructions" },
    { key: "upload", label: "Upload" },
    { key: "consent", label: "Consent" },
  ];

  const renderStepContent = () => {
    const current = steps[step].key;

    switch (current) {
      case "instructions":
        return (
          <div className="container-fluid  d-flex flex-column justify-content-center overflow-hidden">
            <div className="mb-3 text-center">
              <img
                src="https://media.istockphoto.com/id/2182750801/photo/virtual-reality-concept-businessman-interacting-with-virtual-reality-technology-on-virtual.jpg?s=2048x2048&w=is&k=20&c=2KDj5icdYqVy8rPasZsVMOXITMC0T-0GcCYxi3RZbaM="
                alt="Instructions preview"
                className="img-fluid rounded"
                style={{ maxHeight: "180px", objectFit: "cover" }}
              />
            </div>

            <div className="row flex-grow-1">
              {/* Recommended */}
              <div className="col-md-6 mb-3">
                <div className="p-3 border rounded bg-light  overflow-auto">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <hr className="flex-grow-1 me-2" />
                    <h6 className="text-success fw-bold mb-0">
                      <i className="bi bi-check-circle-fill me-1"></i>{" "}
                      Recommended
                    </h6>
                    <hr className="flex-grow-1 ms-2" />
                  </div>
                  <ul className="mb-0 small">
                    <li>
                      At least <strong>2 minutes</strong> of footage
                    </li>
                    <li>
                      Follow sequence:
                      <ul>
                        <li>15 seconds of listening</li>
                        <li>Speak for 90 seconds</li>
                        <li>Idle for 15 seconds</li>
                      </ul>
                    </li>
                    <li>High resolution camera</li>
                    <li>Well-lit quiet environment</li>
                  </ul>
                </div>
              </div>

              {/* Things to avoid */}
              <div className="col-md-6 mb-3">
                <div className="p-3 border rounded bg-light overflow-auto">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <hr className="flex-grow-1 me-2" />
                    <h6 className="text-danger fw-bold mb-0">
                      <i className="bi bi-x-circle-fill me-1"></i> Things to
                      avoid
                    </h6>
                    <hr className="flex-grow-1 ms-2" />
                  </div>
                  <ul className="mb-0 small">
                    <li>Stitches or cuts in footage</li>
                    <li>Talking without pauses</li>
                    <li>Excessive movement</li>
                    <li>Loud background noise</li>
                    <li>Shadows/overexposure on face</li>
                    <li>Diverting gaze or looking around</li>
                    <li>Hand gestures above chest</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "upload":
        return <UploadStep />;

      case "consent":
        return (
          <div>
            {/* Your full consent content here */}
            <h5>Consent Section</h5>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column bg-light">
      {/* Header */}
      <header className="d-flex align-items-center px-4 py-3 border-bottom bg-white shadow-sm justify-content-between">
        <Link
          className="btn btn-link text-dark text-decoration-none fw-semibold"
          to={"/instructor/instructor-dashboard"}
        >
          ← Create Interactive Avatar
        </Link>
        <div className="d-flex gap-2">
          {step > 0 && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
          )}
          {step < steps.length - 1 && (
            <button
              className="btn btn-primary"
              onClick={() => setStep(step + 1)}
            >
              Next
            </button>
          )}
        </div>
      </header>

      {/* Progress Steps */}
      {/* <div className="d-flex justify-content-center align-items-center gap-4 py-2 flex-wrap">
        {steps.map(({ key, label }, index) => (
          <div key={key} className="d-flex align-items-center gap-2">
            <div
              className={`rounded-circle fw-bold d-flex justify-content-center align-items-center 
                ${
                  step === index
                    ? "bg-primary text-white"
                    : "bg-light text-secondary"
                }`}
              style={{ width: "32px", height: "32px" }}
            >
              {index + 1}
            </div>
            <span
              className={`fw-semibold ${
                step === index ? "text-primary" : "text-secondary"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div> */}

      <div className="d-flex justify-content-center align-items-center gap-3 py-1 flex-wrap">
        {steps.map(({ key, label }, index) => (
          <div key={key} className="d-flex align-items-center gap-1">
            <div
              className={`rounded-circle fw-bold d-flex justify-content-center align-items-center 
          ${
            step === index ? "bg-primary text-white" : "bg-light text-secondary"
          }`}
              style={{ width: "24px", height: "24px", fontSize: "0.75rem" }}
            >
              {index + 1}
            </div>
            <span
              className={`fw-semibold ${
                step === index ? "text-primary" : "text-secondary"
              }`}
              style={{ fontSize: "0.8rem" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <main className="flex-grow-1 d-flex flex-column align-items-center px-4">
        <div
          className="bg-white rounded shadow-sm p-4"
          // style={{ maxWidth: "900px", width: "100%", minHeight: "700px" }}
          style={{
            maxWidth: "700px", // smaller than before
            width: "100%",
            maxHeight: "80vh", // fit within viewport
            overflowY: "auto", // scrolls inside if content is too much
          }}
        >
          {renderStepContent()}
        </div>
      </main>

      {/* Footer */}
      {steps[step].key !== "upload" && (
        <footer className="d-flex justify-content-center py-2  bg-light">
          {step < steps.length - 1 ? (
            <button
              className="btn btn-primary  px-4 py-2 fw-semibold"
              onClick={() => setStep(step + 1)}
            >
              Next step
            </button>
          ) : (
            <button className="btn btn-success px-4 py-2 fw-semibold">
              Finish
            </button>
          )}
        </footer>
      )}
    </div>
  );
};

export default CreateAvatar;
