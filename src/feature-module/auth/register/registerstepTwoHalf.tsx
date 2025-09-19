import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const RegisterstepTwoHalf: React.FC = () => {
  const [formData, setFormData] = useState({
    role: "professional",
    selectedFeatures: [] as string[], // ✅ multiple selection
  });

  const route = all_routes;
  const navigate = useNavigate();

  // ✅ Toggle item in/out of selectedFeatures array
  const handleFeatureToggle = (featureTitle: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.selectedFeatures.includes(featureTitle);
      return {
        ...prev,
        selectedFeatures: alreadySelected
          ? prev.selectedFeatures.filter((item) => item !== featureTitle) // remove
          : [...prev.selectedFeatures, featureTitle], // add
      };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Final Data:", formData);
    navigate(route.registerStepTwoFourth);
  };

  const featuresMap = {
    professional: [
      {
        title: "Teacher / Educator",
        desc: "For school or college teachers, professors, and subject matter educators.",
      },
      {
        title: "Trainer / Instructor",
        desc: "For those providing technical, vocational, or skill-based training.",
      },
      {
        title: "Tutor (1-on-1 or Group)",
        desc: "For private tutors offering personalized learning support.",
      },
      {
        title: "Coach / Mentor",
        desc: "For personal development, career coaching, or leadership mentoring.",
      },
      {
        title: "Corporate Trainer",
        desc: "For professionals conducting workshops or employee training in organizations.",
      },
    ],
  };

  return (
    <div className="main-wrapper">
      <div className="login-content register-bg-gredient d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div
                className="login-wrapper w-100 rounded-4 p-4"
                style={{ background: "#fff" }}
              >
                <div className="text-center mb-1">
                  <img
                    src="https://imgs.search.brave.com/THZLw1LLapZTgqgsQJpywsu4IvVwtttq7Wg38dfa-14/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNjU4NC8xNjU4/NDkwOS5wbmc_c2Vt/dD1haXNfd2hpdGVf/bGFiZWw"
                    alt="Centered"
                    style={{ maxWidth: "75px", height: "auto" }}
                  />
                </div>

                <h3 className="text-center mb-1">Choose Your Profession(s)</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    {featuresMap.professional.map((item, index) => {
                      const isSelected = formData.selectedFeatures.includes(
                        item.title
                      );

                      return (
                        <div
                          key={index}
                          className={`faq-card rounded-4 mb-3 p-3 ${
                            isSelected ? "border border-primary" : "border"
                          }`}
                          style={{
                            background: isSelected ? "#e7f1ff" : "#fff",
                            cursor: "pointer",
                          }}
                          onClick={() => handleFeatureToggle(item.title)}
                        >
                          <strong>{item.title}</strong>
                          {/* Optional description */}
                          {/* <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>{item.desc}</p> */}
                        </div>
                      );
                    })}
                  </div>

                  <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-primary btn-md">
                      Save & Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterstepTwoHalf;
