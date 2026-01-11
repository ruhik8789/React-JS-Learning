import React, {useEffect, useLayoutEffect} from 'react'

const App = () => {

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return (
    <>
      <h1>useEffect vs useLayoutEffect</h1>
      {Array(40000).fill().map((item, index) => (
        <li key={index}>{Math.random() * 10}</li>
      ))}
    </>
  )
}

export default App
