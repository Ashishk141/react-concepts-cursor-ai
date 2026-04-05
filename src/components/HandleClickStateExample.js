import { useState } from "react";

function HandleClickStateExample() {
  const [likes, setLikes] = useState(0);

  // A named handler function makes code readable and reusable.
  const handleClick = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div>
      <h3>15) handleClick Function to Modify State</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleClick}>Like</button>
      <p className="output">Example output: Likes increase on each click.</p>
    </div>
  );
}

export default HandleClickStateExample;
