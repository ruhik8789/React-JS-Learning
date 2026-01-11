import React from "react";
import { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {

  const [name, setName] = useLocalStorage("name", "");
  const [id, setId] = useLocalStorage("id", "");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h2>Hello, {name}</h2>
      <input
        type="text"
        placeholder="Enter Your Id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <h2>Your Id: {id}</h2>
    </>
  );
};

export default App;
