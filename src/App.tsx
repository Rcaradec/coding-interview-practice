import { useRef, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState<number>(0);
  const [increment, setIncrement] = useState<number>(1);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => setCount(count + increment);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    if (!isNaN(inputValue)) {
      setIncrement(inputValue);
    }
  };

  return (
    <Counter
      inputRef={inputRef}
      handleInputChange={handleInputChange}
      count={count}
      increment={increment}
      handleClick={handleClick}
    />
  );
}

export default App;
