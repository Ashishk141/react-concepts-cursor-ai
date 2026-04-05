import { useState } from "react";

function PrevStateUpdateExample() {
  const [count, setCount] = useState(0);

  const increaseByTwo = () => {
    // Using prev state ensures updates are based on latest value.
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h3>14) Updating State from Previous State</h3>
      <p>Count: {count}</p>
      <button onClick={increaseByTwo}>Increase by 2</button>
      <p className="output">Example output: 0, 2, 4, 6...</p>
    </div>
  );
}

export default PrevStateUpdateExample;
