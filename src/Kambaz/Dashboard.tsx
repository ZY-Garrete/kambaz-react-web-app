import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { enrollCourse, unenrollCourse } from "./Courses/Enrollments/reducer";
import * as enrollmentClient from "./Courses/Enrollments/client";

export default function Dashboard({
    courses,
    deleteCourse,
    addNewCourse,
    updateCourse,
    course,
    setCourse,
}: any) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer || {});
    const [showOnlyEnrolled, setShowOnlyEnrolled] = useState(false);

    useEffect(() => {
        const fetchEnrollments = async () => {
            if (currentUser?.role === "STUDENT") {
                const data = await enrollmentClient.getUserEnrollments(currentUser._id);
                data.forEach((e: any) => dispatch(enrollCourse(e)));
            }
        };
        fetchEnrollments();
    }, [currentUser]);

    const handleEnroll = async (courseId: string) => {
        const data = await enrollmentClient.enrollCourseServer(currentUser._id, courseId);
        dispatch(enrollCourse(data));
    };

    const handleUnenroll = async (courseId: string) => {
        await enrollmentClient.unenrollCourseServer(currentUser._id, courseId);
        dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
    };

    const isEnrolled = (courseId: string) => {
        return (enrollments || []).some(
            (e: any) => e.user === currentUser?._id && e.course === courseId
        );
    };

    const displayedCourses =
        currentUser?.role === "STUDENT" && showOnlyEnrolled
            ? courses.filter((c: any) => isEnrolled(c._id))
            : courses;

    return (
        <div id="wd-dashboard">
            <div className="d-flex justify-content-between align-items-center">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                {currentUser?.role === "STUDENT" && (
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowOnlyEnrolled(!showOnlyEnrolled)}
                    >
                        {showOnlyEnrolled ? "Show All Courses" : "Enrollments"}
                    </button>
                )}
            </div>

            <hr />

            {currentUser?.role === "FACULTY" && (
                <>
                    <h5>New Course</h5>
                    <button
                        className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}
                    >
                        Add
                    </button>
                    <button
                        className="btn btn-warning float-end me-2"
                        onClick={updateCourse}
                        id="wd-update-course-click"
                    >
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
                        onChange={(e) =>
                            setCourse({ ...course, description: e.target.value })
                        }
                    />
                </>
            )}

            <h2 id="wd-dashboard-published" className="mt-3">
                {showOnlyEnrolled && currentUser?.role === "STUDENT"
                    ? `My Enrollments (${displayedCourses.length})`
                    : `All Courses (${displayedCourses.length})`}
            </h2>
            <hr />

            <div
                id="wd-dashboard-courses"
                className="row row-cols-1 row-cols-md-5 row-cols-lg-4 g-4"
            >
                {displayedCourses.map((course: any) => (
                    <div key={course._id} className="col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <img
                                src={course.image || "/images/reactjs.jpg"}
                                width="100%"
                                height={160}
                                alt={course.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <p>{course.number}</p>
                                <p>Credits: {course.credits || "N/A"}</p>
                                <p
                                    className="card-text"
                                    style={{ maxHeight: 100, overflowY: "hidden" }}
                                >
                                    {course.description}
                                </p>

                                <div className="d-flex justify-content-between">
                                    {(currentUser?.role === "FACULTY" ||
                                        isEnrolled(course._id)) && (
                                            <Link
                                                to={`/Kambaz/Courses/${course._id}/Home`}
                                                className="btn btn-primary"
                                            >
                                                Go
                                            </Link>
                                        )}

                                    {currentUser?.role === "STUDENT" &&
                                        (isEnrolled(course._id) ? (
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
                                        ))}

                                    {currentUser?.role === "FACULTY" && (
                                        <div>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(e) => {
                                                    e.preventDefault();
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
