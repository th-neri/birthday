import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import MainPage from './components/MainPage.jsx'
import FirstPart from './components/FirstPart.jsx'
import SecondPart from './components/SecondPart.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/firstpart' element={<FirstPart />} />
        <Route path='/secondpart' element={<SecondPart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
