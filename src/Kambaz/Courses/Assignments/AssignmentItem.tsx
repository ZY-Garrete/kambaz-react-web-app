import { ListGroup } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

interface AssignmentItemProps {
    title: string;
    dueDate: string;
    availability: string;
    points: string;
}

export default function AssignmentItem({ title, dueDate, availability, points }: AssignmentItemProps) {
    return (
        <ListGroup.Item
            className="wd-assignment p-3 ps-3 d-flex justify-content-between align-items-center border-start border-4 border-success"
        >
            <div>
                <span className="fw-bold">{title}</span> <br />
                <span className="text-danger">Multiple Modules</span> |
                <span className="text-muted"> {availability} </span> <br />
                <small className="text-muted">{dueDate} | {points}</small>
            </div>
            <div>
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
            </div>
        </ListGroup.Item>
    );
}
