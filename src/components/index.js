import React from "react";
import ReactDOM from "react-dom";

// I personally like to name my component files lower-case with hyphens.
// Some prefer capital first letter. To each her/his own.
import ClassForm from "./components/class-form";
import FunctionForm from "./components/function-form";

import "./styles.css";

// Ordinarily, I would have app contain state and input change handlers. The updated state
// would then be passed down to the different (dumb) components as props.

// However, this is an example of both a class-based component and a function component, so state/handlers
// are in the components themselves.
function App() {
  return (
    <div className="App">
      <h1>React State</h1>
      <p>
        These are examples of how to work with state in both class-based
        components, and function components.
      </p>
      <hr />
      <h2>Class-Based Component with State</h2>
      <ClassForm title="Mr./Mrs." />
      <hr />
      <h2>Functional Component with State</h2>
      <FunctionForm title="Mr./Mrs." />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
