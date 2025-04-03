// React function components implement algorithms that compute an HTML code 
// snippet and return the result of the computation. Other functions can aggregate 
// various snippets from different components into a larger, single HTML content 
// that browsers can then render on the screen. Here the component is just returning
// a hard coded, static HTML code snippet. Later chapters will
// introduce far more interesting algorithms to compute complex HTML
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";
import ParentStateComponent from "./ParentStateComponent";
import CounterRedux from "./ReduxExamples/CounterReducer";
import AddRedux from "./ReduxExamples/AddRedux";
import TodoList from "./ReduxExamples/todos/TodoList";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div id="wd-lab4">
            <h2>Lab4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
            <CounterRedux />
            <AddRedux />
            <TodoList />
        </div>
    );
}

