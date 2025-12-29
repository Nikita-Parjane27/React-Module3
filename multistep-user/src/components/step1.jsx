const step1 = ({ state, dispatch }) => {
  const { name, email } = state.values;

  return (
    <>
      <h2>Step 1: Personal Details</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })
        }
      />

      <button
        disabled={!name || !email}
        onClick={() => dispatch({ type: "NEXT_STEP" })}
      >
        Next
      </button>
    </>
  );
};

export default step1;
