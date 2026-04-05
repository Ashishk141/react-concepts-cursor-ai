import { useState } from "react";

function EventHandlingExample() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Type your name, then click the button.");

  const handleClick = () => {
    setMessage(name ? `Hello, ${name}!` : "Please enter your name first.");
  };

  return (
    <div>
      <h3>9) Handling Events (onClick, onChange)</h3>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleClick}>Greet</button>
      <p>{message}</p>
      <p className="output">Example output: Hello, your-name!</p>
    </div>
  );
}

export default EventHandlingExample;
