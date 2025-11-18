import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../data/useFetch'

function Lab5PostComments() {
  const { id } = useParams()
  const [post, postLoading, postError] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const [postComments, commentsLoading, commentsError] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

  const postLoaded = !!post && Object.keys(post).length > 0
  const commentsLoaded = Array.isArray(postComments) && postComments.length > 0

  return (
    <Container className="mt-4">
      {postLoading && <p>Loading post...</p>}
      {postError && !postLoading && <p className="text-danger">Nie udało się pobrać posta.</p>}

      {postLoaded && (
        <Card className="mb-3">
          <Card.Header>{post.title}</Card.Header>
          <Card.Body>
            <p>{post.body}</p>
            <Link to="/lab5">Back to posts</Link>
          </Card.Body>
        </Card>
      )}

      {!postLoading && !postLoaded && !postError && (
        <Card className="mb-3">
          <Card.Body>Nie znaleziono posta.</Card.Body>
        </Card>
      )}

      <Card>
        <Card.Header>
          Comments (
          {commentsLoading ? '...' : commentsLoaded ? postComments.length : 0}
          )
        </Card.Header>
        <ListGroup variant="flush">
          {commentsLoading && <ListGroup.Item>Loading comments...</ListGroup.Item>}
          {commentsError && !commentsLoading && (
            <ListGroup.Item className="text-danger">Nie udało się pobrać komentarzy.</ListGroup.Item>
          )}
          {!commentsLoading && !commentsError && commentsLoaded && (
            postComments.map((comment) => (
              <ListGroup.Item key={comment.id}>
                <strong>{comment.name}</strong> - <a href={`mailto:${comment.email}`}>{comment.email}</a>
                <p className="mb-0">{comment.body}</p>
              </ListGroup.Item>
            ))
          )}
          {!commentsLoading && !commentsError && !commentsLoaded && (
            <ListGroup.Item>No comments available.</ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </Container>
  )
}

export default Lab5PostComments
