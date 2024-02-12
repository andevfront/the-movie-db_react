import { useState } from "react";

export const useCounter = (initial = 0, limit) => {
  const [counter, setCounter] = useState(initial);

  const onIncrement = (value = 1) => {
    if (counter >= limit) return;
    setCounter(counter + value);
  };

  const onDecrement = (value = 1) => {
    if (counter <= 0) return;
    setCounter(counter - value);
  };

  const onReset = () => setCounter(initial);

  return { counter, onIncrement, onDecrement, onReset };
};
