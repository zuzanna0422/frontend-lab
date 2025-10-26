import React from 'react'
import RootLayout from './layouts/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Lab01 from './pages/lab01'
import Lab02 from './pages/lab02'
import Lab3Page from './pages/Lab3Page'
import NotFound from './pages/notfound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}> 
        <Route path="/" element={<Home />} />
        <Route path="lab01" element={<Lab01 />} />
        <Route path="lab02/:id" element={<Lab02 />} />
        <Route path="lab3" element={<Lab3Page />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
