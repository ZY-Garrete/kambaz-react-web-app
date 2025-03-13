import { useState } from "react";
import "./Counter.css";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div className="counter-container">
            <h2>Counter: {count}</h2>
            <button className="counter-button up"
                onClick={() => setCount(count + 1)}
                id="wd-counter-up-click">Up</button>
            <button className="counter-button down"
                onClick={() => setCount(count - 1)}
                id="wd-counter-down-click">Down</button>
            <hr /></div>);
}
