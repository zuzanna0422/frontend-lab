import ProfileCard from './components/ProfileCard'
import {people} from './module-data.js'
import ProfileGrid from './components/ProfileGrid'
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
      <h1>Lista profili :</h1><br />
      <ProfileGrid profiles={people} columns={4} />
      </div>
    </>
  );
}

export default App
