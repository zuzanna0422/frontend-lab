import React from 'react'
import MyContainer from '../components/MyContainer'
import PersonProfile from '../components/PersonProfile'
import { people } from '../module-data.js'

function Lab3Page() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Lista profili:</h1>
      <MyContainer element={PersonProfile} data={people} columns={4} />
    </div>
  )
}

export default Lab3Page
