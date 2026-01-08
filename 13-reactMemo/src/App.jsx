import React, { useState, useMemo } from "react"

export default function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <Child count={count} />
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click me to increase the number.</button>
    </>
  )
}

const Child = React.memo(function Child({ count }) {
  console.log("Child rendered!!");
  return (
    <>
      <h1>{count}</h1>
    </>
  );
});