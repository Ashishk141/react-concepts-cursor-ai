import { useState } from "react";

function RerenderExample() {
  const [text, setText] = useState("Initial text");

  return (
    <div>
      <h3>12) Re-rendering via State Updates</h3>
      <p>{text}</p>
      <button onClick={() => setText("Component re-rendered with new state!")}>
        Update Text
      </button>
      <p className="output">Example output: Paragraph changes after click.</p>
    </div>
  );
}

export default RerenderExample;
