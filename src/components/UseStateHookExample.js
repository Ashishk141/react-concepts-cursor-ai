import { useState } from "react";

function UseStateHookExample() {
  // useState returns a value and a function to update that value.
  const [city, setCity] = useState("Delhi");

  return (
    <div>
      <h3>11) useState Hook</h3>
      <p>Selected city: {city}</p>
      <button onClick={() => setCity("Mumbai")}>Set Mumbai</button>
      <button onClick={() => setCity("Bengaluru")}>Set Bengaluru</button>
      <p className="output">Example output: City changes when button is clicked.</p>
    </div>
  );
}

export default UseStateHookExample;
