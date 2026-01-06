import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);

    return () => clearTimeout(id);
  }, [count, name]);

  return (
    <>
      <h1>I've rendered {count} times!</h1>
    </>
  );
}
