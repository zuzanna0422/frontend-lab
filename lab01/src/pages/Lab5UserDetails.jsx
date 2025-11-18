import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../data/useFetch'

function Lab5UserDetails() {
  const { id } = useParams()
  const [user, loading, error] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const isLoaded = user && Object.keys(user).length > 0

  return (
    <Container className="mt-4">
      {loading && <p>Loading user data...</p>}
      {error && !loading && <p className="text-danger">Nie udało się pobrać danych użytkownika.</p>}
      {!loading && !error && !isLoaded && <p>Nie znaleziono użytkownika.</p>}

      {isLoaded && (
        <Card>
          <Card.Header>
            <strong>{user.name}</strong> ({user.username})
          </Card.Header>
          <Card.Body>
            <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
            {user.company && (
              <p>Company: {user.company.name} - {user.company.catchPhrase}</p>
            )}
            {user.address && (
              <p>Address: {user.address.street} {user.address.suite}, {user.address.city}</p>
            )}
            <Link to="/lab5">Back to posts</Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  )
}

export default Lab5UserDetails
