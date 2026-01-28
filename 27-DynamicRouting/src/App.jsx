import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
