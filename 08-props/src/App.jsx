import { useState } from "react";

export default function App() {
  // const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "John",
    age: 30,
  });

  return (
    <>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase the count</button> */}

      <h1>User Name: {user.name}</h1>
      <h1>User Age: {user.age}</h1>

      <button
        onClick={() => {
          setUser({ ...user, name: "Raghav" });
        }}
      >
        Change the user name to Raghav. Click Me!!
      </button>
    </>
  );
}
