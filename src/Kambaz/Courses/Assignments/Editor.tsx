import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as db from "../../Database";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 初始化作业状态
  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    description: "",
    points: 100,
    type: "Multiple Modules",
    course: cid,
    dueDate: new Date().toISOString().slice(0, 16),
    availableDate: new Date().toISOString().slice(0, 16),
    availableUntilDate: new Date().toISOString().slice(0, 16)
  });

  // 加载现有作业数据（如果是编辑模式）
  useEffect(() => {
    if (aid && aid !== "new") {
      const existingAssignment = db.assignments.find(a => a._id === aid && a.course === cid);
      if (existingAssignment) {
        // 格式化日期以适应datetime-local输入
        const formatDate = (dateString) => dateString ? dateString.slice(0, 16) : "";

        setAssignment({
          ...existingAssignment,
          dueDate: formatDate(existingAssignment.dueDate),
          availableDate: formatDate(existingAssignment.availableDate),
          availableUntilDate: formatDate(existingAssignment.dueDate) // 使用dueDate作为默认值
        });
      }
    }
  }, [cid, aid]);

  // 处理表单值变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 保存按钮处理
  const handleSave = () => {
    const assignmentToSave = {
      ...assignment,
      // 确保日期格式正确
      dueDate: `${assignment.dueDate}:00`,
      availableDate: `${assignment.availableDate}:00`,
      availableUntilDate: `${assignment.availableUntilDate}:00`
    };

    if (aid === "new") {
      // 创建新作业
      dispatch(addAssignment({
        ...assignmentToSave,
        _id: `A${uuidv4().substring(0, 6)}`
      }));
    } else {
      // 更新现有作业
      dispatch(updateAssignment(assignmentToSave));
    }

    // 导航回作业列表
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  // 取消按钮处理
  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Assignment Name */}
          <Form.Group className="mb-3">
            <Form.Label><b>Assignment Name</b></Form.Label>
            <Form.Control
              name="title"
              value={assignment.title}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Editable Assignment Description */}
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={12}
              name="description"
              value={assignment.description}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Points */}
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={3} className="text-muted">
              Points
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                name="points"
                value={assignment.points}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          {/* Assignment Group */}
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={3} className="text-muted">
              Assignment Group
            </Form.Label>
            <Col sm={9}>
              <Form.Select
                name="type"
                value={assignment.type}
                onChange={handleChange}
              >
                <option value="Multiple Modules">Multiple Modules</option>
                <option value="QUIZ">Quiz</option>
                <option value="PROJECT">Project</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* 其他表单元素保持不变 */}
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={3} className="text-muted">
              Display Grade as
            </Form.Label>
            <Col sm={9}>
              <Form.Select defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Submission Type */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-muted">
              Submission Type
            </Form.Label>

            <Col sm={9}>
              <Card className="p-3">
                {/* Submission Type 下拉框 */}
                <Form.Select defaultValue="Online">
                  <option value="Online">Online</option>
                  <option value="In-Person">In-Person</option>
                  <option value="External Tool">External Tool</option>
                </Form.Select>

                {/* Online Entry Options 复选框组 */}
                <div className="mt-3">
                  <strong>Online Entry Options</strong>
                  <Form.Check type="checkbox" label="Text Entry" />
                  <Form.Check type="checkbox" label="Website URL" defaultChecked />
                  <Form.Check type="checkbox" label="Media Recordings" />
                  <Form.Check type="checkbox" label="Student Annotation" />
                  <Form.Check type="checkbox" label="File Uploads" />
                </div>
              </Card>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-muted">
              Assign
            </Form.Label>

            <Col sm={9}>
              <Card className="p-3">
                <Form.Label><strong>Assign to</strong></Form.Label>
                <Form.Control as="select" defaultValue="Everyone">
                  <option>Everyone</option>
                  <option>Group 1</option>
                  <option>Group 2</option>
                </Form.Control>

                <Form.Label className="mt-3"><strong>Due</strong></Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="dueDate"
                  value={assignment.dueDate}
                  onChange={handleChange}
                />

                <Row className="mt-3">
                  <Col sm={6}>
                    <Form.Label><strong>Available From</strong></Form.Label>
                    <Form.Control
                      type="datetime-local"
                      name="availableDate"
                      value={assignment.availableDate}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Label><strong>Until</strong></Form.Label>
                    <Form.Control
                      type="datetime-local"
                      name="availableUntilDate"
                      value={assignment.availableUntilDate}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Form.Group>

          {/* Save & Cancel Buttons */}
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
            <Button variant="danger" onClick={handleSave}>Save</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}