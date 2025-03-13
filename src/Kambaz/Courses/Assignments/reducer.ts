import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: `A${uuidv4().substring(0, 6)}`, // 使用A前缀的ID
                title: assignment.title,
                description: assignment.description,
                course: assignment.course,
                points: assignment.points,
                dueDate: assignment.dueDate,
                availableDate: assignment.availableDate,
                type: assignment.type || "Multiple Modules"
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },

        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },

        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        }
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    editAssignment
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;