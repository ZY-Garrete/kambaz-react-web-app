import { FaPlus, FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { InputGroup, Form } from "react-bootstrap";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="d-flex justify-content-between align-items-center mb-3">

            <InputGroup className="w-50">
                <InputGroup.Text>
                    <FaSearch />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Search for Assignment" />
            </InputGroup>
            {/* ✅ Add Group 按钮 */}
            <div className="d-flex gap-2">
                <Button variant="secondary" size="lg" id="wd-add-group-btn">
                    <FaPlus className="me-2 position-relative" style={{ bottom: "1px" }} />
                    Group
                </Button>

                {/* ✅ Add Assignment 按钮 */}
                <Button variant="danger" size="lg" id="wd-add-assignment-btn">
                    <FaPlus className="me-2 position-relative" style={{ bottom: "1px" }} />
                    Assignment
                </Button>
            </div>
        </div>
    );
}
