import { useState } from "react";

export default function App() {
  const [car, setCar] = useState({
    brand: "Porsche",
    model: "911",
    color: "red",
    year: 1964,
  });

  const changeColor = () => {
    setCar({ ...car, color: "blue" });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={changeColor}>Change the color.</button>
    </>
  );
}
