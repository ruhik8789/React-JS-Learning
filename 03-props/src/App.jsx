import React from 'react'
import Card from './components/Card.jsx';

const App = () => {
  return (
    <div className='parent'>
      <Card user="Raghav" img="https://media.istockphoto.com/id/1416050620/photo/silhouette-of-professional-male-cyclist-pushing-his-bike-on-top-of-the-hill-at-sunset.webp?a=1&s=612x612&w=0&k=20&c=HF1NC9bXtfmXS5fASgiNg0uiKM7Ygd4miTozaHVw59g="/>
      <Card user="Bharadwaj" img="https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"/>
    </div>
  )
}

export default App
