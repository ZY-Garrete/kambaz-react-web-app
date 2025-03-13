import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentsReducer from "./Courses/Enrollments/reducer";
const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentsReducer,
        enrollmentsReducer
    },
});

// ✅ 这里导出 RootState 类型，其他组件就可以使用它
export type RootState = ReturnType<typeof store.getState>;

// ✅ 这里导出 AppDispatch 类型，以后 dispatch 也能有类型检查
export type AppDispatch = typeof store.dispatch;

export default store;