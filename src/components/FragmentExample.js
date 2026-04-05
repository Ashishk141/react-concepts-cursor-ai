import React from "react";

function FragmentExample() {
  return (
    <React.Fragment>
      <h3>5) React Fragments</h3>
      {/* Fragment groups elements without adding extra DOM nodes */}
      <p>Fragments avoid unnecessary wrapper divs.</p>
      <p className="output">Example output: Two sibling paragraphs rendered cleanly.</p>
    </React.Fragment>
  );
}

export default FragmentExample;
