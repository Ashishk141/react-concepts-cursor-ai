import "./App.css";
import ConditionalRenderingExample from "./components/ConditionalRenderingExample";
import DynamicClassExample from "./components/DynamicClassExample";
import EventHandlingExample from "./components/EventHandlingExample";
import FormHandlingExample from "./components/FormHandlingExample";
import FormSubmissionExample from "./components/FormSubmissionExample";
import FragmentExample from "./components/FragmentExample";
import FunctionalComponentExample from "./components/FunctionalComponentExample";
import HandleClickStateExample from "./components/HandleClickStateExample";
import JsMethodsExample from "./components/JsMethodsExample";
import JSXExample from "./components/JSXExample";
import ListRenderingExample from "./components/ListRenderingExample";
import MultipleStateExample from "./components/MultipleStateExample";
import PrevStateUpdateExample from "./components/PrevStateUpdateExample";
import PropsDestructuringExample from "./components/PropsDestructuringExample";
import PropsExample from "./components/PropsExample";
import RerenderExample from "./components/RerenderExample";
import StateVariableExample from "./components/StateVariableExample";
import UseStateHookExample from "./components/UseStateHookExample";

function ExampleCard({ children }) {
  return <section className="concept-card">{children}</section>;
}

function App() {
  // Keep concept order same as your requested learning sequence.
  const concepts = [
    FunctionalComponentExample,
    JSXExample,
    PropsExample,
    PropsDestructuringExample,
    FragmentExample,
    ConditionalRenderingExample,
    ListRenderingExample,
    DynamicClassExample,
    EventHandlingExample,
    StateVariableExample,
    UseStateHookExample,
    RerenderExample,
    MultipleStateExample,
    PrevStateUpdateExample,
    HandleClickStateExample,
    FormHandlingExample,
    FormSubmissionExample,
    JsMethodsExample,
  ];

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Beginner React Playground (CRA)</h1>
        <p>
          Small independent examples for learning, debugging, and practice.
        </p>
      </header>

      <div className="concept-grid">
        {concepts.map((ConceptComponent, index) => (
          <ExampleCard key={index}>
            <ConceptComponent />
          </ExampleCard>
        ))}
      </div>
    </main>
  );
}

export default App;
