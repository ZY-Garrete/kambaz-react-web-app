import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  // 使用 find 找到当前作业
  const assignment = db.assignments.find(a => a._id === aid && a.course === cid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Assignment Name */}
          <Form.Group className="mb-3">
            <Form.Label><b>Assignment Name</b></Form.Label>
            <Form.Control defaultValue={assignment.title} />
          </Form.Group>

          {/* Editable Assignment Description */}
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={12}
              defaultValue={assignment.description}
            />
          </Form.Group>

          {/* Points */}
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={3} className="text-muted">
              Points
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="number" defaultValue={assignment.points} />
            </Col>
          </Form.Group>

          {/* Assignment Group */}
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={3} className="text-muted">
              Assignment Group
            </Form.Label>
            <Col sm={9}>
              <Form.Select defaultValue={assignment.type}>
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
                  defaultValue={assignment.dueDate.slice(0, 16)}
                />

                <Row className="mt-3">
                  <Col sm={6}>
                    <Form.Label><strong>Available From</strong></Form.Label>
                    <Form.Control
                      type="datetime-local"
                      defaultValue={assignment.availableDate.slice(0, 16)}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Label><strong>Until</strong></Form.Label>
                    <Form.Control
                      type="datetime-local"
                      defaultValue={assignment.dueDate.slice(0, 16)}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Form.Group>

          {/* Save & Cancel Buttons */}
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button variant="danger">Save</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}