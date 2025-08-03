import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert('Hello Members!');
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (event) => {
    alert('I was clicked');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>React Event Handling Example</h2>

      <h3>Counter: {counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>
      <button onClick={handleClick}>Click on me</button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
