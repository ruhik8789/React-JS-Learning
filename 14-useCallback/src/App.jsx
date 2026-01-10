import { useState, useCallback } from "react";
import Header from "./components/Header";

export default function App() {
  const [count, setCount] = useState(0);
  // const fn = () => {};
  // const fn = useCallback(() => {}, []);
  const fn = useCallback(() => {}, [count]);
  return (
    <>
      <Header newFn={fn} />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click Here!
      </button>
    </>
  );
}
