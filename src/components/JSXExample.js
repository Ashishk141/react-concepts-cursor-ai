function JSXExample() {
  const topic = "JSX";
  const year = new Date().getFullYear();

  return (
    <div>
      <h3>2) JSX Usage</h3>
      {/* JSX lets us write HTML-like syntax inside JavaScript */}
      <p>
        Learning <strong>{topic}</strong> in {year}.
      </p>
      <p className="output">Example output: Learning JSX in current year.</p>
    </div>
  );
}

export default JSXExample;
