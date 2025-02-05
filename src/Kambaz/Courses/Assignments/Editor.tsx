import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>

          {/* Assignment Name */}
          <Form.Group className="mb-3">
            <Form.Label><b>Assignment Name</b></Form.Label>
            <Form.Control defaultValue="A1" />
          </Form.Group>

          {/* Editable Assignment Description */}
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={12}
              defaultValue={`The assignment is available online. 
              Submit a link to the landing page of your Web application running on Netlify.
              The landing page should include
              - Your full name and section
              - Links to each of the lab assignments
              - Link to the Kanbas application
              - Links to all relevant source code repositories.
              
              The Kanbas application should include a link to navigate back to the landing page.`}
            />
          </Form.Group>

          {/* Points */}
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={2} className="text-muted">
              Points
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" defaultValue={100} />
            </Col>
          </Form.Group>

          {/* Assignment Group */}
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={2} className="text-muted">
              Assignment Group
            </Form.Label>
            <Col sm={10}>
              <Form.Select defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZ">Quiz</option>
                <option value="PROJECT">Project</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Display Grade As */}
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={2} className="text-muted">
              Display Grade as
            </Form.Label>
            <Col sm={10}>
              <Form.Select defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Submission Type */}
          <Form.Group as={Row} className="mb-3">
            {/* ✅ 左侧 - Submission Type Label */}
            <Form.Label column sm={3} className="text-muted">
              Submission Type
            </Form.Label>

            {/* ✅ 右侧 - 需要一个大框包裹所有内容 */}
            <Col sm={9}>
              <Card className="p-3">
                {/* 🔽 Submission Type 下拉框 */}
                <Form.Select defaultValue="Online">
                  <option value="Online">Online</option>
                  <option value="In-Person">In-Person</option>
                  <option value="External Tool">External Tool</option>
                </Form.Select>

                {/* ✅ Online Entry Options 复选框组 */}
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
            {/* ✅ 左侧 - Assign Label */}
            <Form.Label column sm={3} className="text-muted">
              Assign
            </Form.Label>

            {/* ✅ 右侧 - 需要一个大框包裹所有内容 */}
            <Col sm={9}>
              <Card className="p-3">
                {/* 🔽 Assign To 选择框 */}
                <Form.Label><strong>Assign to</strong></Form.Label>
                <Form.Control as="select" defaultValue="Everyone">
                  <option>Everyone</option>
                  <option>Group 1</option>
                  <option>Group 2</option>
                </Form.Control>

                {/* ✅ Due 日期输入框 */}
                <Form.Label className="mt-3"><strong>Due</strong></Form.Label>
                <Form.Control type="date" defaultValue="2024-05-13" />

                {/* ✅ Available From & Until 日期输入框 */}
                <Row className="mt-3">
                  <Col sm={6}>
                    <Form.Label><strong>Available From</strong></Form.Label>
                    <Form.Control type="date" defaultValue="2024-05-06" />
                  </Col>
                  <Col sm={6}>
                    <Form.Label><strong>Until</strong></Form.Label>
                    <Form.Control type="date" defaultValue="2024-05-20" />
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
      </Row >
    </Container >
  );
}
