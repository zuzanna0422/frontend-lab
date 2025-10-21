import React from 'react'
import RootLayout from './layouts/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Lab01 from './pages/lab01'
import Lab02 from './pages/lab02'
import NotFound from './pages/notfound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
      <RootLayout>
        <Routes>
              <Route path="lab01" element={<Lab01 />}></Route>
              <Route path="lab02" element={<Lab02 />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </RootLayout>
  )
}

export default App
