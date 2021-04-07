import { useState } from 'react';
import './App.css';

function App() {
  const [counter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a counter app</h1>
        <div id="counter-value">{counter}</div>
        <button id="increment-btn">Increment</button>
      </header>
    </div>
  );
}

export default App;
