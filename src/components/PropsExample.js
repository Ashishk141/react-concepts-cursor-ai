function WelcomeMessage(props) {
  return <p>Hello, {props.name}! Welcome to React props.</p>;
}

function PropsExample() {
  return (
    <div>
      <h3>3) Props (Passing Data)</h3>
      {/* Parent sends data to child through props */}
      <WelcomeMessage name="Akuni" />
      <p className="output">Example output: Hello, Akuni! Welcome to React props.</p>
    </div>
  );
}

export default PropsExample;
