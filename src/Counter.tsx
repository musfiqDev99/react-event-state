import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>Current value: {counter}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
