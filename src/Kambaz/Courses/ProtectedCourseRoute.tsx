import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface ProtectedCourseRouteProps {
    children: React.ReactNode;
}

const ProtectedCourseRoute: React.FC<ProtectedCourseRouteProps> = ({ children }) => {
    const { cid } = useParams(); // 获取当前课程ID

    // 从Redux获取当前用户和选课数据
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    // 如果没有用户登录，重定向到登录页面
    if (!currentUser) {
        return <Navigate to="/Kambaz/Account/Signin" />;
    }

    // 如果是Faculty用户，允许访问所有课程
    if (currentUser.role === "FACULTY") {
        return <>{children}</>;
    }

    // 如果是Student用户，检查是否已选该课程
    const isEnrolled = enrollments.some(
        (e: any) => e.user === currentUser._id && e.course === cid
    );

    // 如果是学生但没有选该课程，重定向到Dashboard
    if (currentUser.role === "STUDENT" && !isEnrolled) {
        return <Navigate to="/Kambaz/Dashboard" />;
    }

    // 通过所有检查，允许访问课程内容
    return <>{children}</>;
};

export default ProtectedCourseRoute;