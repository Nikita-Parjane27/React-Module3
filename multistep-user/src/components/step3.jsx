const step3 = ({ state, dispatch }) => {
  const { values } = state;

  return (
    <>
      <h2>Step 3: Review & Submit</h2>

      <p><b>Name:</b> {values.name}</p>
      <p><b>Email:</b> {values.email}</p>
      <p><b>Username:</b> {values.username}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>

      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
        Submit
      </button>
    </>
  );
};

export default step3;
