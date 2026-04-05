function JsMethodsExample() {
  const numbers = [5, 10, 15, 20];

  const mapped = numbers.map((num) => num * 2);
  const filtered = numbers.filter((num) => num > 10);
  const found = numbers.find((num) => num === 15);

  return (
    <div>
      <h3>18) JavaScript Methods (map, filter, find)</h3>
      <p>Original: {numbers.join(", ")}</p>
      <p>map (*2): {mapped.join(", ")}</p>
      <p>filter (&gt;10): {filtered.join(", ")}</p>
      <p>find (15): {found}</p>
      <p className="output">Example output: Transformed arrays and found value.</p>
    </div>
  );
}

export default JsMethodsExample;
