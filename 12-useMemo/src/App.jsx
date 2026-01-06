import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculating...");
    return Math.pow(num, 3);
  }

  // const result = cubeNum(number);
  const result = useMemo(() => {return cubeNum(number)}, [number])
  return (
    <>
      <input type="number" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
      <h1>Cube of the number is: {result}</h1>
      <button onClick={() => {setCounter(counter + 1)}}>Counter++</button>
      <h1>Counter: {counter}</h1>
    </>
  )
}