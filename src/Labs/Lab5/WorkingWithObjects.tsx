import { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const [module, setModule] = useState({
        id: "m101",
        name: "Web Development",
        description: "Learn React and Node.js",
        course: "CS5610"
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div>
            <h3 id="wd-working-with-objects">Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />

            <div className="mb-2">
                <label htmlFor="wd-assignment-score" className="me-2">Score:</label>
                <input type="number" id="wd-assignment-score" className="me-2"
                    value={assignment.score}
                    onChange={(e) => setAssignment({
                        ...assignment,
                        score: parseInt(e.target.value)
                    })} />
                <a id="wd-update-assignment-score"
                    className="btn btn-success me-2"
                    href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                    Update Score
                </a>
            </div>

            <div className="mb-2">
                <label htmlFor="wd-assignment-completed" className="me-2">Completed:</label>
                <input type="checkbox" id="wd-assignment-completed" className="me-2"
                    checked={assignment.completed}
                    onChange={(e) => setAssignment({
                        ...assignment,
                        completed: e.target.checked
                    })} />
                <a id="wd-update-assignment-completed"
                    className="btn btn-warning me-2"
                    href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                    Update Completed
                </a>
            </div>

            <hr />

            {/* Module相关UI */}
            <h4>Module Operations</h4>

            {/* 获取Module */}
            <div className="mb-2">
                <a id="wd-retrieve-module" className="btn btn-primary me-2"
                    href={`${MODULE_API_URL}`}>
                    Get Module
                </a>

                <a id="wd-retrieve-module-name" className="btn btn-info me-2"
                    href={`${MODULE_API_URL}/name`}>
                    Get Module Name
                </a>
            </div>

            {/* 修改Module Name */}
            <div className="mb-2">
                <label htmlFor="wd-module-name" className="me-2">Module Name:</label>
                <input id="wd-module-name" className="me-2"
                    value={module.name}
                    onChange={(e) => setModule({
                        ...module,
                        name: e.target.value
                    })} />
                <a id="wd-update-module-name"
                    className="btn btn-success me-2"
                    href={`${MODULE_API_URL}/name/${module.name}`}>
                    Update Module Name
                </a>
            </div>

            {/* 修改Module Description */}
            <div className="mb-2">
                <label htmlFor="wd-module-description" className="me-2">Module Description:</label>
                <input id="wd-module-description" className="me-2"
                    value={module.description}
                    onChange={(e) => setModule({
                        ...module,
                        description: e.target.value
                    })} />
                <a id="wd-update-module-description"
                    className="btn btn-success me-2"
                    href={`${MODULE_API_URL}/description/${module.description}`}>
                    Update Module Description
                </a>
            </div>

            <hr />

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />

        </div>
    );
}
