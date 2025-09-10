import React, { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react"; // For back arrow icon
import { Modal, Button, Row, Col, Card } from "react-bootstrap";

const UploadStep: React.FC = () => {
  const [currentDiv, setCurrentDiv] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCamOn, setIsCamOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true, // set to false if you don’t need mic
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCamOn(true);
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCamOn(false);
  };
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
      <div className="p-1 mx-auto">
        {/* Instruction Box */}
        <h6 className="my-2">Upload your footage</h6>
        <div className="alert alert-warning mb-3 py-3 px-3">
          <p className="fw-semibold mb-2">
            For optimal, most realistic results, we recommend recording a
            continuous 2-minute video recorded with clear voice capture. Please
            make sure to include segments in the order below:
          </p>
          <ol className="mb-0 ps-3">
            <li>
              15s listening state: imagine you are listening to the camera.
            </li>
            <li>90s talking state: talk to the camera like a conversation.</li>
            <li>15s idling state: look at the camera, smile and breathe.</li>
          </ol>
        </div>

        {/* Upload Options */}
        <div className="row g-3">
          {/* Upload Footage */}
          <div className="col-md-6">
            <div className="position-relative border border-1 border-primary rounded-2 text-center p-4 h-100 hover-bg-light">
              <span className="badge bg-light text-primary border border-primary position-absolute top-0 end-0 m-2">
                Recommended
              </span>
              <div className="mb-1 fs-3 text-primary">
                <i className="bi bi-cloud-arrow-up"></i>
              </div>
              <h6 className="fw-semibold mb-2">Upload Footage</h6>
              <p className="text-success mb-0">Best quality</p>
            </div>
          </div>

          {/* Record via Webcam */}
          <div className="col-md-6">
            <div className="border border-1 border-secondary rounded-2 text-center p-4 h-100 hover-bg-light">
              <div className="mb-3 text-secondary"></div>
              <h6 className="fw-semibold mb-2">Record via webcam</h6>
              <p className="text-warning mb-0">Quick try</p>
            </div>
          </div>
        </div>

        {/* Example Footage */}
        <div className="text-center mt-4">
          <p className="text-muted mb-3">Checkout our example footage</p>
          <div className="mx-auto" style={{ maxWidth: "200px" }}>
            <img
              src="https://images.unsplash.com/photo-1756992293716-b843700b5ab0?w=600&auto=format&fit=crop&q=60"
              className="img-fluid rounded shadow-sm"
              alt="Example footage"
            />
          </div>
        </div>
      </div>
    </div>,
    <div key="2">
      <div className="p-3 mx-auto" style={{ maxWidth: "500px" }}>
        {/* Buttons */}
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
        <div className="alert alert-warning py-3 px-3 mb-3">
          <p className="mb-2">
            For optimal, most realistic results, we recommend recording a
            continuous 2-minute video with clear voice capture. Please include
            segments in the order below:
          </p>
          <ol className="mb-0 ps-3">
            <li>
              <strong>15s listening state:</strong> imagine you are listening to
              the camera.
            </li>
            <li>
              <strong>90s talking state:</strong> talk to the camera like a
              conversation.
            </li>
            <li>
              <strong>15s idling state:</strong> look at the camera, smile and
              breathe.
            </li>
          </ol>
        </div>

        {/* Upload Section */}
        <div className="rounded p-3 text-center mb-3 border">
          <p className="fw-bold mb-3">Upload via Google Drive</p>
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

          <p className="text-muted mb-2">Or drag and drop your footage here</p>
          <p className="text-muted mb-3">
            Landscape or portrait video, mp4/mov/webm format <br />
            2min recommended, max 10min <br />
            360p–4K resolution, &lt; 10GB
          </p>
          <a href="#" className="text-decoration-none fw-semibold">
            Browse local files
          </a>
        </div>
      </div>
    </div>,
    <div key="3">
      <div className="p-3 mx-auto" style={{ maxWidth: "450px" }}>
        {/* Buttons */}
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
        <div className="alert alert-warning py-3 px-3 mb-3">
          <p className="mb-2">
            For optimal, most realistic results, we recommend recording a
            continuous 2-minute video with clear voice capture. Please include
            segments in the order below:
          </p>
          <ol className="mb-0 ps-3">
            <li>
              <strong>15s listening state:</strong> imagine you are listening to
              the camera.
            </li>
            <li>
              <strong>90s talking state:</strong> talk to the camera like a
              conversation.
            </li>
            <li>
              <strong>15s idling state:</strong> just look at the camera, smile
              and breathe.
            </li>
          </ol>
        </div>

        {/* Camera & Mic Section */}
        <div
          className="border rounded d-flex flex-column align-items-center justify-content-center p-4 text-muted mb-3"
          style={{ height: "180px" }}
        >
          <button className="btn btn-primary mb-3">Turn on Cam & Mic</button>
          <p className="text-center mb-0">
            Your browser may ask for permission to use your camera and
            microphone.
          </p>
        </div>
      </div>
    </div>,
    <div key="4">
      <div className="p-3 mx-auto" style={{ maxWidth: "500px" }}>
        {/* Buttons */}
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
        <div className="alert alert-warning py-3 px-3 mb-3">
          <p className="mb-2">
            For optimal, most realistic results, we recommend recording a
            continuous 2-minute video recorded with clear voice capture. Please
            make sure to include segments in the order below:
          </p>
          <ol className="mb-0 ps-3">
            <li>
              <strong>15s listening state:</strong> imagine you are listening to
              the camera.
            </li>
            <li>
              <strong>90s talking state:</strong> talk to the camera like a
              conversation.
            </li>
            <li>
              <strong>15s idling state:</strong> just look at the camera, smile
              and breathe.
            </li>
          </ol>
        </div>

        {/* Video Preview */}
        {/* <div className="position-relative mb-3">
          <video
            className="w-100 rounded shadow-sm"
            controls
            autoPlay
            muted
            style={{ maxHeight: "240px", objectFit: "cover" }}
          >
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support video preview.
          </video>
          <span className="badge bg-danger position-absolute top-0 end-0 m-2">
            Preview
          </span>
        </div> */}
        <div className="border rounded p-3 text-center">
          {!isCamOn ? (
            <button className="btn btn-primary btn-sm" onClick={startCamera}>
              Turn on Cam & Mic
            </button>
          ) : (
            <button className="btn btn-danger btn-sm" onClick={stopCamera}>
              Turn off Cam & Mic
            </button>
          )}

          <div className="mt-3">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{ width: "100%", maxWidth: "300px", borderRadius: "10px" }}
            />
          </div>
        </div>

        {/* Device Selectors */}
        <div className="d-flex align-items-center gap-2 mb-3 flex-nowrap">
          <select className="form-select" style={{ minWidth: "120px" }}>
            <option>Landscape</option>
            <option>Portrait</option>
          </select>

          <select className="form-select" style={{ minWidth: "130px" }}>
            <option>FaceTime HD Camera</option>
            <option>External Camera</option>
          </select>

          <select className="form-select" style={{ minWidth: "180px" }}>
            <option>MacBook Air Microphone</option>
            <option>External Microphone</option>
          </select>
        </div>
      </div>
    </div>,
  ];

  const nextDiv = () => {
    setCurrentDiv((prev) => Math.min(prev + 1, divContents.length - 1));
  };

  const prevDiv = () => {
    setCurrentDiv((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="d-flex flex-column">
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
      <div className="">{divContents[currentDiv]}</div>

      {/* Next button at bottom center */}
      <div className=" text-center ">
        <Button
          onClick={nextDiv}
          disabled={currentDiv === divContents.length - 1}
        >
          Next
        </Button>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        className="p-4"
      >
        <Modal.Header closeButton>
          <Modal.Title>Record video footage</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="text-muted ">
            We encourage you to talk without script so that you look more
            natural and confident. Please make sure to follow the structure of
            15s listening, 90s talking and 15s idling.
          </p>
          <Row className="g-2">
            {options.map((opt, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <Card
                  className={`h-100 text-center p-4 border ${
                    idx === 0 ? "border-primary" : ""
                  }`}
                  style={{ cursor: "pointer", fontSize: "1rem" }}
                >
                  <Card.Body className="p-2">
                    <div style={{ fontSize: "1.2rem" }}>{opt.icon}</div>
                    <Card.Text className="mt-1">{opt.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowModal(false)}
          >
            Start a Recording
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadStep;
