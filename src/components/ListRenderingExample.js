function ListRenderingExample() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      <h3>7) List Rendering (map)</h3>
      <ul>
        {/* map() creates one <li> for each item */}
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <p className="output">Example output: A list of four skills.</p>
    </div>
  );
}
 
export default ListRenderingExample;
