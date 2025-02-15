// src/Kambaz/Courses/Navigation/index.tsx
import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const links = [
    { to: "Home", label: "Home", id: "home" },
    { to: "Modules", label: "Modules", id: "modules" },
    { to: "Piazza", label: "Piazza", id: "piazza" },
    { to: "Zoom", label: "Zoom", id: "zoom" },
    { to: "Assignments", label: "Assignments", id: "assignments" },
    { to: "Quizzes", label: "Quizzes", id: "quizzes" },
    { to: "People", label: "People", id: "people" }
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.id}
          to={`/Kambaz/Courses/${cid}/${link.to}`}
          id={`wd-course-${link.id}-link`}
          className={`list-group-item border border-0 ${pathname.includes(link.to)
              ? "active"
              : "text-danger"
            }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}