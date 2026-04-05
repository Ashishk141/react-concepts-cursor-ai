import { useState } from "react";

function DynamicClassExample() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div>
      <h3>8) Conditional Classes Dynamically</h3>
      <p className={isOnline ? "status-online" : "status-offline"}>
        Status: {isOnline ? "Online" : "Offline"}
      </p>
      <button onClick={() => setIsOnline((prev) => !prev)}>Toggle Status</button>
      <p className="output">Example output: Text color changes by class.</p>
    </div>
  );
}

export default DynamicClassExample;
