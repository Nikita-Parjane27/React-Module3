import { useReducer } from "react";
import { formReducer, initialState } from "./components/formreducer";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div className="container">
      <h1>Multi-Step Registration Form</h1>
      <p>Step {state.step} / 3</p>

      {!state.isSubmitted && state.step === 1 && (
        <Step1 state={state} dispatch={dispatch} />
      )}

      {!state.isSubmitted && state.step === 2 && (
        <Step2 state={state} dispatch={dispatch} />
      )}

      {!state.isSubmitted && state.step === 3 && (
        <Step3 state={state} dispatch={dispatch} />
      )}

      {state.isSubmitted && (
        <>
          <h2>Form Submitted Successfully ✅</h2>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset Form
          </button>
        </>
      )}
    </div>
  );
}

export default App;
