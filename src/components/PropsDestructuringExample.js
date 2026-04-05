function StudentCard({ name, course }) {
  // Destructuring lets us directly pick properties from props.
  return (
    <p>
      {name} is learning {course}.
    </p>
  );
}

function PropsDestructuringExample() {
  return (
    <div>
      <h3>4) Props Destructuring</h3>
      <StudentCard name="Alex" course="React JS" />
      <p className="output">Example output: Alex is learning React JS.</p>
    </div>
  );
}

export default PropsDestructuringExample;
