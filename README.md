# Beginner React Playground (CRA)

This project is a beginner-friendly React practice app built with Create React App.
Each React concept is implemented in a separate component so you can learn and debug
one topic at a time.

## Run the project

In the project directory, run:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Concept to file mapping

1. Functional Components -> `src/components/FunctionalComponentExample.js`
2. JSX usage -> `src/components/JSXExample.js`
3. Props (passing data) -> `src/components/PropsExample.js`
4. Props Destructuring -> `src/components/PropsDestructuringExample.js`
5. React Fragments -> `src/components/FragmentExample.js`
6. Conditional Rendering -> `src/components/ConditionalRenderingExample.js`
7. List Rendering (map) -> `src/components/ListRenderingExample.js`
8. Conditional Classes -> `src/components/DynamicClassExample.js`
9. Event Handling -> `src/components/EventHandlingExample.js`
10. State Variables -> `src/components/StateVariableExample.js`
11. useState Hook -> `src/components/UseStateHookExample.js`
12. Re-rendering with state updates -> `src/components/RerenderExample.js`
13. Multiple state values -> `src/components/MultipleStateExample.js`
14. Previous state updates -> `src/components/PrevStateUpdateExample.js`
15. handleClick state change -> `src/components/HandleClickStateExample.js`
16. Form handling (controlled input) -> `src/components/FormHandlingExample.js`
17. Form submission handling -> `src/components/FormSubmissionExample.js`
18. JS methods (map, filter, find) -> `src/components/JsMethodsExample.js`

## Suggested learning routine

1. Start with one file from `src/components`.
2. Read the comments and run the app.
3. Change a value (text, number, state) and observe output.
4. Add `console.log` inside handlers to understand event flow.
5. Break and fix one component at a time to practice debugging.

## Project structure

- `src/App.js` -> imports and displays all concept examples
- `src/App.css` -> card layout and shared styles
- `src/components/*` -> one file per concept

## Practice ideas

- Add your own example card using a new concept.
- Convert one component UI into your own mini feature.
- Combine two concepts (for example, list rendering + filtering).
