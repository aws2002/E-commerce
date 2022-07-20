import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="main">
      <h1 className={`${counter < 0 && "negative"}`}>{counter}</h1>
      <div className="btn">
        <button id="decrease" onClick={() => setCounter(prev => prev - 1)}>Decrease</button>
        <button id="reset" onClick={() => setCounter(0)}>Reset</button>
        <button id="increase" onClick={() => setCounter(prev => prev + 1)}>Increase</button>
      </div>
    </div>
  );
}
