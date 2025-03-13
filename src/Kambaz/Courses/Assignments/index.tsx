import { ListGroup, Button, Modal, InputGroup, Form } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { BsThreeDotsVertical, BsPlus } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import { RootState } from "../../store";

// 定义 Assignment 接口
interface Assignment {
  _id: string;
  title: string;
  course: string;
  type: string;
  points: number;
  availableDate: string;
  dueDate: string;
}

export default function Assignments() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 可以选择使用Redux的assignments或直接使用db.assignments
  const { assignments } = useSelector((state: RootState) =>
    state.assignmentsReducer || { assignments: db.assignments }
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<Assignment | null>(null);

  // 使用正确的类型定义
  const handleDeleteClick = (assignment: Assignment) => {
    setAssignmentToDelete(assignment);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (!assignmentToDelete) return;
    dispatch(deleteAssignment(assignmentToDelete._id));
    setShowDeleteModal(false);
  };

  return (
    <div id="wd-assignments">
      {/* 搜索栏和按钮组 */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* 搜索栏 */}
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search for Assignments"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>

        {/* 按钮组 - 添加回Group按钮 */}
        <div>
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => console.log("Group功能待实现")}
          >
            <BsPlus className="me-1" /> Group
          </Button>
          <Button
            variant="danger"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
          >
            <BsPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

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
              <Button variant="light" size="lg">
                <BsThreeDotsVertical />
              </Button>
            </div>
          </div>

          {isExpanded && (
            <>
              {(assignments || db.assignments)
                .filter((a: Assignment) => a.course === cid &&
                  (searchQuery ? a.title.toLowerCase().includes(searchQuery.toLowerCase()) : true))
                .map((assignment: Assignment) => (
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

                    <div>
                      <Button
                        variant="warning"
                        className="me-2"
                        onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteClick(assignment)}
                      >
                        Delete
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
            </>
          )}
        </ListGroup.Item>
      </ListGroup>

      {/* 删除确认模态框 */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}