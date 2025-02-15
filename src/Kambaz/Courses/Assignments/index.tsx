import { ListGroup, Button } from "react-bootstrap"
import LessonControlButtons from "../Modules/LessonControlButtons"
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { BsThreeDotsVertical, BsPlus } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";
import * as db from "../../Database";

export default function Assignments() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { cid } = useParams();

  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray" id="wd-Assignment">
          <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Button
                variant="light"
                className="p-0 me-2 border-0"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? <BsFillCaretDownFill /> : <BsFillCaretRightFill />}
              </Button>
              <BsGripVertical className="me-2 fs-5 text-secondary" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>

            <div className="d-flex align-items-center">
              <Button variant="outline-secondary" size="lg" className="rounded-pill px-3 me-2">
                40% of Total
              </Button>
              <Button variant="light" size="lg" className="me-2">
                <BsPlus />
              </Button>
              <Button variant="light" size="lg">
                <BsThreeDotsVertical />
              </Button>
            </div>
          </div>

          {isExpanded && (
            <>
              {db.assignments
                .filter(a => a.course === cid)
                .map((assignment) => (
                  <ListGroup.Item
                    key={assignment._id}
                    className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <PiNotePencilDuotone className="me-2 fs-3" />
                    </div>

                    <div className="flex-grow-1">
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="fw-bold text-decoration-none text-dark"
                      >
                        {assignment.title}
                      </Link>
                      <br />
                      <span className="text-danger">{assignment.type}</span> |
                      <span className="text-muted"> Not available until {new Date(assignment.availableDate).toLocaleString()} </span> |
                      <span className="fw-bold">Due</span>
                      <small className="text-muted"> {new Date(assignment.dueDate).toLocaleString()} | {assignment.points} pts</small>
                    </div>

                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
            </>
          )}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}