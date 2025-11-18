import React from 'react'
import RootLayout from './layouts/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Lab01 from './pages/lab01'
import Lab02 from './pages/lab02'
import Lab3Page from './pages/Lab3Page'
import Lab04 from './pages/lab04'
import Lab04Add from './pages/lab04Add'
import Lab04Edit from './pages/lab04Edit'
import Lab5Page from './pages/Lab5Page'
import Lab5UserDetails from './pages/Lab5UserDetails'
import Lab5PostComments from './pages/Lab5PostComments'
import NotFound from './pages/notfound'
import AppProvider from './data/AppProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="lab01" element={<Lab01 />} />
          <Route path="lab02/:id" element={<Lab02 />} />
          <Route path="lab3" element={<Lab3Page />} />
          <Route path="lab04" element={<Lab04 />} />
          <Route path="lab04/add" element={<Lab04Add />} />
          <Route path="lab04/edit/:id" element={<Lab04Edit />} />
          <Route path="lab5" element={<Lab5Page />} />
          <Route path="lab5/users/:id" element={<Lab5UserDetails />} />
          <Route path="lab5/posts/:id/comments" element={<Lab5PostComments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}

export default App
