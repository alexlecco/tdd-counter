import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a counter app</h1>
        <button id="increment-btn" onClick={handleIncrement}>
          Increment
        </button>
        <div id="counter-value">{counter}</div>
        <button id="decrement-btn" onClick={handleDecrement}>
          Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
