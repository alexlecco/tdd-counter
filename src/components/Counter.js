import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);

  return (
    <>
      <h1>This is a counter app</h1>
      <button id="increment-btn" onClick={handleIncrement}>
        Increment
      </button>
      <div id="counter-value">{counter}</div>
      <button id="decrement-btn" onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
