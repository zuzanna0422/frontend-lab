import React from 'react'
import ProfileGrid from '../components/ProfileGrid'
import useData from '../hooks/useData'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function Lab01() {
  const items = useData()

  return (
    <div>
      <h1>Lista profili :</h1>
      <br />
      <ProfileGrid profiles={items} columns={4} />
    </div>
  )
}

export default Lab01
