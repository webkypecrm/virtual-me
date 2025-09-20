import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { Divider } from "antd";

const InstructorSidebarAccordion = () => {
  const location = useLocation();

  const menuGroups = [
    {
      id: "dashboardGroup",
      name: "Dashboard",
      items: [
        {
          title: "Dashboard",
          icon: "isax isax-grid-35",
          route: all_routes.instructorDashboard,
        },
        {
          title: "My Profile",
          route: all_routes.instructorProfile,
          icon: "fa-solid fa-user",
        },

        {
          title: "Students",
          route: all_routes.studentsList,
          icon: "isax isax-profile-2user5",
        },
        {
          title: "Announcements",
          route: all_routes.instructorAnnouncements,
          icon: "isax isax-volume-high5",
        },
        {
          title: "Settings",
          route: all_routes.instructorsettings,
          icon: "isax isax-setting-25",
        },
        { title: "Logout", route: all_routes.login, icon: "isax isax-logout5" },
      ],
    },
    {
      id: "coursesGroup",
      name: "Courses",
      items: [
        {
          title: "Courses",
          route: all_routes.instructorCourse,
          icon: "isax isax-teacher5",
        },
        {
          title: "Assignments",
          route: all_routes.instructorAssignment,
          icon: "isax isax-clipboard-text5",
        },
        {
          title: "Quiz",
          route: all_routes.instructorQuiz,
          icon: "isax isax-award5",
        },
        {
          title: "Quiz Results",
          route: all_routes.instructorQuizResult,
          icon: "isax isax-medal-star5",
        },
        {
          title: "Certificates",
          route: all_routes.instructorCertificate,
          icon: "isax isax-note-215",
        },
      ],
    },
    {
      id: "payoutGroup",
      name: "Payout",
      items: [
        {
          title: "Payout",
          route: all_routes.instructorPayout,
          icon: "isax isax-coin-15",
        },
        {
          title: "Statements",
          route: all_routes.instructorStatements,
          icon: "isax isax-shopping-cart5",
        },
        {
          title: "Earnings",
          route: all_routes.instructorEarning,
          icon: "isax isax-wallet-add5",
        },
      ],
    },
    {
      id: "notificationsGroup",
      name: "Notifications",
      items: [
        {
          title: "Messages",
          route: all_routes.instructorMessage,
          icon: "isax isax-messages-35",
        },
        {
          title: "Support Tickets",
          route: all_routes.instructorTickets,
          icon: "isax isax-ticket5",
        },
      ],
    },
  ];

  return (
    <div className="col-lg-3">
      <div
        className="accordion accordion-customicon1 accordions-items-seperate p-0"
        id="instructorSidebarAccordion"
      >
        {menuGroups.map((group) => (
          <div className="accordion-item" key={group.id}>
            <h2 className="accordion-header" id={`heading${group.id}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${group.id}`}
                aria-expanded="false"
                aria-controls={`collapse${group.id}`}
              >
                {group.name}
                {/* <i className="fa-solid fa-chevron-down ms-auto" /> */}
              </button>
            </h2>
            <div
              id={`collapse${group.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${group.id}`}
              data-bs-parent="#instructorSidebarAccordion"
            >
              <div className="accordion-body p-0">
                <ul className="list-unstyled">
                  {group.items.map((item) => (
                    <li key={item.title} className="pt-3 px-3">
                      <Link
                        to={item.route}
                        className={`d-inline-flex align-items-center w-100 ${
                          location.pathname === item.route ? "active" : ""
                        }`}
                      >
                        <i className={`${item.icon} me-2`} />
                        {item.title}
                      </Link>
                      <Divider className="m-1" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorSidebarAccordion;
