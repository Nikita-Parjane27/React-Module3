import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");

  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid black" }}>
      <h3>Heavy Component</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
