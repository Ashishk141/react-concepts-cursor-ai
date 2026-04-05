import { useState } from "react";

function ConditionalRenderingExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>6) Conditional Rendering</h3>
      <p>{isLoggedIn ? "Welcome back, user!" : "Please log in to continue."}</p>
      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        Toggle Login State
      </button>
      <p className="output">Example output changes based on login state.</p>
    </div>
  );
}

export default ConditionalRenderingExample;
