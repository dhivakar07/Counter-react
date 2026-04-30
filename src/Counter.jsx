import { useState } from "react";
function Counter() {
  const [count, setcount] = useState(0);

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
  return (
    <>
      <section className="Counter-section">
        <div className="count-box">
          <h3>CURRENT COUNT</h3>
          <h1>{count}</h1>
        </div>
        <div className="count-limit">
          {count === 20 ? (
            <p style={{ color: "red" }}>Maximum limit reached!</p>
          ) : (
            <p style={{ color: "green" }}>Maximum limit 20 Count</p>
          )}
        </div>
        <div className="count-btn">
          <button onClick={handleInc}>+ Increment</button>
          <button onClick={handleDec}>- Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </section>
    </>
  );
}
export default Counter;
