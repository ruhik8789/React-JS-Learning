// import React from 'react'

// function Panel({ title, children }) {
//   const [isActive, setIsActive] = React.useState(false);
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? ( <p>{children}</p> ) : ( <button onClick={() => setIsActive(true)}>Show</button>)}
//     </section>
//   )
// }
// const App = () => {
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel title="About">
//         With a population of about 2 million, Almaty is Kazakhstan's largest
//         city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel title="Etymology">
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
//         "apple" and is often translated as "full of apples". In fact, the region
//         surrounding Almaty is thought to be the ancestral home of the apple, and
//         the wild <i lang="la">Malus sieversii</i> is considered a likely
//         candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }
// export default App




import React from 'react'

export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="about" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => {setActiveIndex(1)}}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  )
}

function Panel({title, children, isActive, onShow}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? ( <p>{children}</p>) : ( <button onClick={onShow}>Show</button>)}
    </section>
  )
}