import React, { useState } from "react";
import { ArrowLeft } from "lucide-react"; // For back arrow icon
import { Modal, Button, Row, Col, Card } from "react-bootstrap";

const UploadStep: React.FC = () => {
  const [currentDiv, setCurrentDiv] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const options = [
    { title: "Freestyle", icon: "💡" },
    { title: "Tell us about yourself", icon: "🎤" },
    { title: "Tell us about your hometown", icon: "🏠" },
    { title: "Deliver a product update", icon: "🚀" },
    { title: "Introduce your business", icon: "💼" },
    { title: "Give a training lesson", icon: "👩‍🏫" },
  ];

  const divContents = [
    <div key="1">
      <div className=" p-2 mx-auto" style={{ maxWidth: "700px" }}>
        {/* Instruction Box */}
        <h6 className="my-3">Upload your footage</h6>
        <div className="alert alert-warning small mb-4">
          <p className="fw-semibold mb-2">
            For optimal, most realistic results, we recommend recording a
            continuous 2-minute video recorded with clear voice capture. Please
            make sure to include segments in the order below:
          </p>
          <ol className="mb-0 ps-3">
            <li>
              15s listening state: imagine you are listening to the camera, as
              if it is talking to you.
            </li>
            <li>
              90s talking state: talk to the camera about anything, like having
              a conversation with it.
            </li>
            <li>
              15s idling state: just look at the camera, smile and breathe.
            </li>
          </ol>
        </div>
        {/* Upload Options */}
        <div className="row g-4">
          {" "}
          {/* Upload Footage */}
          <div className="col-md-6">
            <div className="position-relative border border-1 border-primary rounded-3 text-center p-4 h-100 hover-bg-light">
              {/* Recommended Badge */}
              <span className="badge bg-light text-primary border border-primary position-absolute top-0 end-0 m-2">
                Recommended
              </span>

              {/* Icon */}
              <div className="mb-3 fs-1 text-primary">
                <i className="bi bi-cloud-arrow-up"></i>
              </div>

              {/* Title */}
              <h5 className="fw-semibold">Upload Footage</h5>
              <p className="text-success small mb-0">Best quality</p>
            </div>
          </div>
          {/* Record via Webcam */}
          <div className="col-md-6">
            <div className="border border-1 border-secondary rounded-3 text-center p-4 h-100 hover-bg-light">
              <div className="mb-3 fs-1 text-secondary">
                <i className="bi bi-camera-video"></i>
              </div>
              <h5 className="fw-semibold">Record via webcam</h5>
              <p className="text-warning small mb-0">Quick try</p>
            </div>
          </div>
        </div>

        {/* Example Footage */}
        <div className="text-center mt-5">
          <p className="text-muted small mb-3">Checkout our example footage</p>
          <div className="mx-auto" style={{ maxWidth: "200px" }}>
            <img
              src="https://images.unsplash.com/photo-1756992293716-b843700b5ab0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
              className="img-fluid rounded shadow"
              alt="Example footage"
            />
          </div>
        </div>
      </div>
    </div>,
    <div key="2">
      <div className=" p-4 mx-auto" style={{ maxWidth: "650px" }}>
        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setShowModal(true)}
          >
            Upload footage
          </button>{" "}
          <button
            className="btn btn-outline-secondary"
            onClick={() => "turn-mic-on"}
          >
            Record via webcam
          </button>
        </div>
        {/* Instructions */}
        <div className="alert alert-warning small">
          <p className="mb-1">
            For optimal, most realistic results, we recommend recording a
            continuous 2-minute video recorded with clear voice capture. Please
            make sure to include segments in the order below:
          </p>
          <ol className="mb-0 ps-3">
            <li>
              <strong>15s listening state:</strong> imagine you are listening to
              the camera, as if it is talking to you.
            </li>
            <li>
              <strong>90s talking state:</strong> talk to the camera about
              anything, like having a conversation with it.
            </li>
            <li>
              <strong>15s idling state:</strong> just look at the camera, smile
              and breathe.
            </li>
          </ol>
        </div>
        {/* Upload Section */}
        <div className="border rounded p-4 text-center mb-3">
          <p className="fw-bold mb-2">Upload via Google Drive</p>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-google"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Paste video URL here (up to 50GB)"
            />
          </div>

          <p className="text-muted mb-1">Or drag and drop your footage here</p>
          <small className="text-muted d-block mb-2">
            landscape or portrait video, mp4/mov/webm format <br />
            2min recommended, max 10min,
            <br />
            360p–4K resolution, &lt; 10GB
          </small>
          <a href="#" className="text-decoration-none">
            Browse local files
          </a>
        </div>
        {/* Next Button */}
        {/* <div className="text-center">
              <button className="btn btn-primary px-4">Next</button>
            </div> */}
      </div>
    </div>,
    <div key="3">
      <div className="p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setShowModal(true)}
          >
            Upload footage
          </button>

          <button
            className="btn btn-outline-secondary"
            onClick={() => "turn-mic-on"}
          >
            Record via webcam
          </button>
        </div>
        {/* Instructions */}
        <div className="alert alert-warning small">
          <p className="mb-1">
            For optimal, most realistic results, we recommend recording a
            continuous 2-minute video recorded with clear voice capture. Please
            make sure to include segments in the order below:
          </p>
          <ol className="mb-0 ps-3">
            <li>
              <strong>15s listening state:</strong> imagine you are listening to
              the camera, as if it is talking to you.
            </li>
            <li>
              <strong>90s talking state:</strong> talk to the camera about
              anything, like having a conversation with it.
            </li>
            <li>
              <strong>15s idling state:</strong> just look at the camera, smile
              and breathe.
            </li>
          </ol>
        </div>
        {/* Camera & Mic Section */}
        <div className="border rounded d-flex flex-column align-items-center justify-content-center p-5 text-muted mb-3">
          <button className="btn btn-primary mb-2">Turn on Cam & Mic</button>
          <small>
            Your browser may ask for permission to use your camera and
            microphone.
          </small>
        </div>
      </div>
    </div>,
    <div key="4">
      <div className="p-4 mx-auto" style={{ maxWidth: "650px" }}>
        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setShowModal(true)}
          >
            Upload footage
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => "turn-mic-on"}
          >
            Record via webcam
          </button>
        </div>
        {/* Instructions */}
        <div className="alert alert-warning small">
          <p className="mb-1">
            For optimal, most realistic results, we recommend recording a
            continuous 2-minute video recorded with clear voice capture. Please
            make sure to include segments in the order below:
          </p>
          <ol className="mb-0 ps-3">
            <li>
              <strong>15s listening state:</strong> imagine you are listening to
              the camera, as if it is talking to you.
            </li>
            <li>
              <strong>90s talking state:</strong> talk to the camera about
              anything, like having a conversation with it.
            </li>
            <li>
              <strong>15s idling state:</strong> just look at the camera, smile
              and breathe.
            </li>
          </ol>
        </div>
        {/* Video Preview */}
        <div className="position-relative mb-3">
          <video
            className="w-100 rounded"
            controls
            autoPlay
            muted
            style={{ maxHeight: "300px", objectFit: "cover" }}
          >
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support video preview.
          </video>
          <span className="badge bg-danger position-absolute top-0 end-0 m-2">
            Preview
          </span>
        </div>
        {/* Device Selectors */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          <select className="form-select w-auto">
            <option>Landscape</option>
            <option>Portrait</option>
          </select>
          <select className="form-select w-auto">
            <option>FaceTime HD Camera</option>
            <option>External Camera</option>
          </select>
          <select className="form-select w-auto">
            <option>MacBook Air Microphone</option>
            <option>External Microphone</option>
          </select>
        </div>
        {/* Next Button */}
      </div>
    </div>,
    // <div key="5">
    //   <h5>Step 4: Drag & Drop</h5>
    //   <p>Drag and drop files or rearrange them here.</p>
    //   <Button variant="primary" onClick={() => setShowModal(true)}>
    //     Open Modal
    //   </Button>
    // </div>,
  ];

  const nextDiv = () => {
    setCurrentDiv((prev) => Math.min(prev + 1, divContents.length - 1));
  };

  const prevDiv = () => {
    setCurrentDiv((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Top header with back arrow */}
      <div className="d-flex align-items-center p-1 border-bottom">
        <ArrowLeft
          size={24}
          className="me-3 cursor-pointer"
          onClick={prevDiv}
          style={{
            cursor: currentDiv === 0 ? "not-allowed" : "pointer",
            opacity: currentDiv === 0 ? 0.5 : 1,
          }}
        />
      </div>

      {/* Content */}
      <div className=" p-1">{divContents[currentDiv]}</div>

      {/* Next button at bottom center */}
      <div className="p-3 text-center border-top">
        <Button
          onClick={nextDiv}
          disabled={currentDiv === divContents.length - 1}
        >
          Next
        </Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Record video footage</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {" "}
          <p className="text-muted">
            We encourage you to talk without script so that you look more
            natural and confident. Please make sure to follow the structure of
            15s listening, 90s talking and 15s idling.
          </p>
          <Row className="g-3">
            {options.map((opt, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <Card
                  className={`h-100 text-center p-3 border ${
                    idx === 0 ? "border-primary" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body>
                    <div style={{ fontSize: "1.5rem" }}>{opt.icon}</div>
                    <Card.Text className="mt-2">{opt.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Start a Recording
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadStep;
