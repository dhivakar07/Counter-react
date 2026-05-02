import { useState } from "react";
function Counter() {
  const [count, setcount] = useState(0);
  const [mode, setmode] = useState(true);

  const handleInc = (event) => {
    event.preventDefault();
    if (count < 20) {
      setcount(count + 1);
    }
  };
  const handleDec = (event) => {
    event.preventDefault();
    if (count > 0) {
      setcount(count - 1);
    }
  };
  const handleReset = (event) => {
    event.preventDefault();
    setcount(0);
  };
  const handleMode = (event) => {
    event.preventDefault();
    setmode(!mode);
  };
  return (
    <>
      <section className={`Counter-section ${mode ? "light" : "dark"}`}>
        <div className={`count-box ${mode ? "light" : "dark"}`}>
          <h3>CURRENT COUNT</h3>
          <h1>{count}</h1>
        </div>
        <div className="count-limit">
          {count === 20 ? (
            <p style={{ color: "red" }}>Maximum limit reached!</p>
          ) : count === 0 ? (
            <p style={{ color: "green" }}>Minimum limit reached Max(20)</p>
          ) : (
            <p style={{ color: "orange" }}>Count is active</p>
          )}
        </div>
        <div className="count-btn">
          <button onClick={handleInc}>+ Increment</button>
          <button onClick={handleDec}>- Decrement</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleMode}>{mode ? "Light" : "Dark"}mode</button>
        </div>
      </section>
    </>
  );
}
export default Counter;
