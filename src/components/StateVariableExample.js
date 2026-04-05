import { useState } from "react";

function StateVariableExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>10) State Variables</h3>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p className="output">Example output: Count updates from 0 to 1, 2, 3...</p>
    </div>
  );
}

export default StateVariableExample;
