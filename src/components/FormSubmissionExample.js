import { useState } from "react";

function FormSubmissionExample() {
  const [username, setUsername] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on submit.
    setSubmittedValue(username);
  };

  return (
    <div>
      <h3>17) Form Submission Handling</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted: {submittedValue || "Nothing submitted yet"}</p>
      <p className="output">Example output: Submitted value shown below form.</p>
    </div>
  );
}

export default FormSubmissionExample;
