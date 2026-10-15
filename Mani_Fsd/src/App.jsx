import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((currentCount) => currentCount + 1);
  const decrement = () => setCount((currentCount) => currentCount - 1);
  const reset = () => setCount(0);

  return (
    <main className="page">
      <section className="counter-card" aria-labelledby="counter-title">
        

        <h1 id="counter-title">Interactive Counter</h1>
        <p className="description">
          A little state goes a long way. Give it a try.
        </p>

        <div
          className={`count-display${count < 0 ? " count-display--negative" : ""}`}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Counter value: ${count}`}
        >
          {count}
        </div>
        <p className="count-caption">CURRENT COUNT</p>

        <div className="controls" aria-label="Counter controls">
          <button
            className="control-button control-button--secondary"
            type="button"
            onClick={decrement}
            aria-label="Decrease count"
          >
            <span aria-hidden="true">−</span>
            <span className="button-label">Decrease</span>
          </button>
          <button
            className="control-button control-button--primary"
            type="button"
            onClick={increment}
            aria-label="Increase count"
          >
            <span aria-hidden="true">+</span>
            <span className="button-label">Increase</span>
          </button>
        </div>

        <button className="reset-button" type="button" onClick={reset}>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.333 10a6.667 6.667 0 1 0 1.953-4.714L3.333 7.24M3.333 3.333V7.24h3.906"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Reset counter
        </button>

        <div className="card-footer">
          <span>Click a button to update the count</span>
          <span className="footer-mark" aria-hidden="true">
            01 / 01
          </span>
        </div>
      </section>

      <p className="page-note">
        Built with <span>React</span> and the <code>useState()</code> Hook
      </p>
    </main>
  );
}

export default App;
