import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const API = `${REMOTE_SERVER}/api`;

// 获取特定课程的所有作业
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${API}/courses/${courseId}/assignments`);
    return response.data;
};

// 获取特定作业
export const findAssignmentById = async (assignmentId: string) => {
    const response = await axios.get(`${API}/assignments/${assignmentId}`);
    return response.data;
};

// 创建新作业
export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${API}/courses/${courseId}/assignments`, assignment);
    return response.data;
};

// 更新作业
export const updateAssignment = async (assignmentId: string, assignment: any) => {
    const response = await axios.put(`${API}/assignments/${assignmentId}`, assignment);
    return response.data;
};

// 删除作业
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${API}/assignments/${assignmentId}`);
    return response.data;
};