// Components can import other components to aggregate the code snippets
// of the components into larger, more complex HTML content. Here the
// Labs component imports the Lab1 component as the first of a
// set of exercises that will be implemented in later chapters.
// The Lab1 function is invoked with the HTML syntax <Lab1/>
// which is replaced by HTML the function returns implemented in the Lab1 function

import { Route, Routes, Navigate } from "react-router-dom";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import store from "./store";
import { Provider } from "react-redux";
export default function Labs() {
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <h1 id="wd-fullname">Zuyu Guo's Labs</h1>
                <TOC />
                <Routes>
                    <Route path="/" element={<Navigate to="Lab1" />} />
                    <Route path="Lab1" element={<Lab1 />} />
                    <Route path="Lab2/*" element={<Lab2 />} />
                    <Route path="Lab3/*" element={<Lab3 />} />
                    <Route path="Lab4/*" element={<Lab4 />} />
                    <Route path="Lab5" element={<Lab5 />} />
                </Routes>
            </div>
        </Provider>
    );
}
