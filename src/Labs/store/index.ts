import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterReducer/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/ReduxExamples/todos/todosReducer";
//import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer,
    },
});
export default store;
