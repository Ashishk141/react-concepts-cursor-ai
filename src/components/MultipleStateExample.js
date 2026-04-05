import { useState } from "react";

function MultipleStateExample() {
  const [name, setName] = useState("Learner");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h3>13) Multiple Pieces of State</h3>
      <p>
        Name: {name}, Age: {age}
      </p>
      <button onClick={() => setName("React Student")}>Change Name</button>
      <button onClick={() => setAge((prev) => prev + 1)}>Increase Age</button>
      <p className="output">Example output: Name and age can update independently.</p>
    </div>
  );
}

export default MultipleStateExample;
