import React from 'react'
import MyContainer from '../components/MyContainer'
import PersonProfile from '../components/PersonProfile'
import useData from '../hooks/useData'

function Lab3Page() {
  const items = useData()

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista profili:</h1>
      <MyContainer element={PersonProfile} data={items} columns={4} />
    </div>
  )
}

export default Lab3Page
