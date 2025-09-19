import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import { all_routes } from "../../../router/all_routes";

const HomePageTestimonial = () => {
  const route = all_routes;

  const testimonials = [
    {
      title: "Flexible Learning",
      text: "Working with this team has been a game-changer for my business. Their professionalism and attention to helped me streamline operations and expand my reach.",
      name: "Johnathan Smith",
      role: "Entrepreneur",
      img: "./assets/img/user/user-04.jpg",
    },
    {
      title: "Design Concept",
      text: "I was blown away by the results! The strategies they implemented helped my brand gain significant visibility. The team is knowledgeable, friendly, and dedicated.",
      name: "Emily Jackson",
      role: "Marketing Specialist",
      img: "./assets/img/user/user-53.jpg",
    },
    {
      title: "AI Learning",
      text: "I’ve worked with many agencies, but the team’s ability to understand the unique needs of educators was outstanding.",
      name: "Adriana Hrit",
      role: "Digital Marketing User",
      img: "./assets/img/user/user-54.jpg",
    },
    {
      title: "Certification",
      text: "This team offered innovative solutions that made my course materials more accessible and interactive. I saw an immediate increase in student engagement.",
      name: "Michael Andrews",
      role: "Software Engineering",
      img: "./assets/img/user/user-55.jpg",
    },
    {
      title: "New Onboarding",
      text: "They offered insights and strategies that helped me refine my curriculum, making it more relevant and impactful for my diverse group of students.",
      name: "Sarah Wilson",
      role: "Global Business Leadership",
      img: "./assets/img/user/user-56.jpg",
    },
  ];

  return (
    <section className="testimonial-sec py-5">
      <div className="container">
        <div className="section-header text-center mb-4">
          <span className="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">
            Testimonials
          </span>
          <h2>What Our Students Say</h2>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="testimonial-item flex-fill p-3 rounded shadow-sm bg-white h-100">
                <div className="d-flex justify-content-between mb-1">
                  <h6>{t.title}</h6>
                  <i className="isax isax-quote-up5 fs-24 text-primary text-opacity-50" />
                </div>
                <p className="mb-3">{t.text}</p>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link
                      to={route.studentsDetails}
                      className="avatar avatar-lg rounded-circle"
                    >
                      <ImageWithBasePath
                        className="img-fluid rounded-circle"
                        src={t.img}
                        alt={t.name}
                      />
                    </Link>
                    <div className="ms-2">
                      <Link to={route.studentsDetails}>{t.name}</Link>
                      <p className="fs-12">{t.role}</p>
                    </div>
                  </div>
                  <div>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <i
                        key={idx}
                        className="fa-solid fa-star text-warning fs-12"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageTestimonial;
