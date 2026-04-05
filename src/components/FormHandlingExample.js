import { useState } from "react";

function FormHandlingExample() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3>16) Form Handling (Controlled Input)</h3>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email"
      />
      <p>Typed value: {email || "No value yet"}</p>
      <p className="output">Example output: Input value mirrors state.</p>
    </div>
  );
}

export default FormHandlingExample;
