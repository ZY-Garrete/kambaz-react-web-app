// src/Kambaz/Courses/Enrollments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";


const initialState = {
    enrollments: db.enrollments || [],
    showAll: false  // 控制是否显示所有课程
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        // 添加新的选课记录
        enrollCourse: (state, { payload }) => {
            // 检查是否已经选过该课程
            const existing = state.enrollments.find(
                e => e.user === payload.user && e.course === payload.course
            );

            if (!existing) {
                state.enrollments.push(payload);
            }
        },

        // 取消选课
        unenrollCourse: (state, { payload }) => {
            state.enrollments = state.enrollments.filter(
                e => !(e.user === payload.user && e.course === payload.course)
            );
        },

        // 切换显示所有课程/仅已选课程
        toggleShowAll: (state) => {
            state.showAll = !state.showAll;
        }
    }
});

export const { enrollCourse, unenrollCourse, toggleShowAll } =
    enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;