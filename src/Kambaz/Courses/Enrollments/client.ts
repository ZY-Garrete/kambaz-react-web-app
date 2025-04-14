// src/Kambaz/Courses/Enrollments/client.ts
import axios from "axios";

export const REMOTE_SERVER = process.env.VITE_REMOTE_SERVER_A6 || process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollCourseServer = async (userId: string, courseId: string) => {
    const { data } = await axios.post(ENROLLMENTS_API, { userId, courseId });
    return data;
};

export const unenrollCourseServer = async (userId: string, courseId: string) => {
    await axios.delete(`${ENROLLMENTS_API}/user/${userId}/course/${courseId}`);
};

export const getUserEnrollments = async (userId: string) => {
    const { data } = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
    return data;
};
