import { useSelector, useDispatch } from "react-redux";
import * as db from "./Database";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { enrollCourse, unenrollCourse } from "./Courses/Enrollments/reducer";

export default function Dashboard() {
    // Redux相关钩子
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments: reduxEnrollments } = useSelector((state: any) =>
        state.enrollmentsReducer || { enrollments: db.enrollments }
    );

    // 本地状态
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });

    // 使用 Redux 中的 enrollments 或回退到 db.enrollments
    const enrollments = reduxEnrollments || db.enrollments;

    // 课程管理功能
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    const addNewCourse = () => {
        const newCourse = { ...course, _id: uuidv4() };
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    // 选课功能
    const handleEnroll = (courseId: string) => {
        dispatch(enrollCourse({
            user: currentUser._id,
            course: courseId,
            date: new Date().toISOString()
        }));
    };

    // 退课功能
    const handleUnenroll = (courseId: string) => {
        dispatch(unenrollCourse({
            user: currentUser._id,
            course: courseId
        }));
    };

    // 检查是否已选某课程
    const isEnrolled = (courseId: string) => {
        return enrollments.some(
            (e: any) => e.user === currentUser?._id && e.course === courseId
        );
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            {/* 仅对Faculty用户显示课程管理功能 */}
            {currentUser && currentUser.role === "FACULTY" && (
                <>
                    <h5>New Course</h5>
                    <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click" onClick={addNewCourse}>
                        Add
                    </button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>

                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        value={course.description}
                        className="form-control mb-3"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </>
            )}

            <h2 id="wd-dashboard-published" className="mt-3">
                All Courses ({courses.length})
            </h2>
            <hr />

            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 row-cols-lg-4 g-4">
                {courses.map((course) => (
                    <div key={course._id} className="col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <img src={course.image || "/images/reactjs.jpg"} width="100%" height={160} alt={course.name} />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <p>{course.number}</p>
                                <p>Credits: {course.credits || "N/A"}</p>
                                <p className="card-text" style={{ maxHeight: 100, overflowY: "hidden" }}>
                                    {course.description}
                                </p>

                                <div className="d-flex justify-content-between">
                                    {/* 对于Faculty用户或已选课的Student，显示Go按钮 */}
                                    {(currentUser?.role === "FACULTY" || isEnrolled(course._id)) && (
                                        <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
                                            Go
                                        </Link>
                                    )}

                                    {/* 对于Student用户，显示Enroll/Unenroll按钮 */}
                                    {currentUser?.role === "STUDENT" && (
                                        isEnrolled(course._id) ? (
                                            <button
                                                className="btn btn-danger"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleUnenroll(course._id);
                                                }}
                                            >
                                                Unenroll
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-success"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleEnroll(course._id);
                                                }}
                                            >
                                                Enroll
                                            </button>
                                        )
                                    )}

                                    {/* 仅对Faculty用户显示Delete和Edit按钮 */}
                                    {currentUser?.role === "FACULTY" && (
                                        <div>
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

{/*     <div id="wd-dashboard-courses">


               ✅ 使用 Bootstrap Grid 
                <Row xs={1} md={5} className="g-4">

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS5610 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5100/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/cs5100.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS5100 Foundations of AI</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        AI model developer
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5010/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/pdp.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS5010 Program Design Paradigm</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Software Solution developer
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5340/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/HCI.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS5340 HCI</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        HCI
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5330/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/cv.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS5330 Pattern Recogn & CV</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        CV model developer
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>


                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5800/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/Algo.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS5800 Algorithm</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Algorithm developer
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/7150/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/DL.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS7150 Deep Learning</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        DL model developer
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                </Row>
               
            </div>
        </div>
    );
} */}
