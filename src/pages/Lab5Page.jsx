import React, { useEffect, useMemo, useReducer } from 'react'
import { Accordion, Container, Dropdown, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useFetch from '../data/useFetch'
import TableDataReducer, { initialState } from '../data/TableDataReducer'

const SortableHeader = ({ label, column, onSort }) => {
  const handleSelect = (eventKey) => {
    onSort(column, eventKey)
  }

  return (
    <th scope="col">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success">{label}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="asc">Ascending order</Dropdown.Item>
          <Dropdown.Item eventKey="desc">Descending order</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="natural">Natural order</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </th>
  )
}

function Lab5Page() {
  const [posts, postsLoading, postsError] = useFetch('https://jsonplaceholder.typicode.com/posts')
  const [users, usersLoading, usersError] = useFetch('https://jsonplaceholder.typicode.com/users')
  const [comments, commentsLoading, commentsError] = useFetch('https://jsonplaceholder.typicode.com/comments')

  const tableData = useMemo(() => {
    const safePosts = Array.isArray(posts) ? posts : []
    const safeUsers = Array.isArray(users) ? users : []
    const safeComments = Array.isArray(comments) ? comments : []

    if (!safePosts.length || !safeUsers.length || !safeComments.length) {
      return []
    }

    return safePosts.map((post) => ({
      user: safeUsers.find((user) => user.id === post.userId),
      post,
      comments: safeComments.filter((comment) => comment.postId === post.id)
    }))
  }, [posts, users, comments])

  const [state, tableDispatch] = useReducer(TableDataReducer, initialState)

  useEffect(() => {
    tableDispatch({ type: 'SET_DATA', payload: tableData })
  }, [tableData])

  const handleSort = (column, order) => {
    tableDispatch({ type: 'SORT', payload: { column, order } })
  }

  const loading = postsLoading || usersLoading || commentsLoading
  const hasError = postsError || usersError || commentsError
  const ready = !loading && tableData.length > 0 && state.data.length > 0

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Lab 5 - Posts overview</h2>
      {loading && <p>Loading posts...</p>}
      {hasError && !loading && <p className="text-danger">Nie udało się pobrać danych. Spróbuj ponownie.</p>}

      {!loading && !hasError && !ready && <p>Brak danych do wyświetlenia.</p>}

      {ready && !loading && (
        <Table striped bordered hover responsive className="posts-table">
          <thead>
            <tr>
              <SortableHeader label="User" column="user" onSort={handleSort} />
              <SortableHeader label="Post title" column="title" onSort={handleSort} />
              <SortableHeader label="Comments count" column="comments" onSort={handleSort} />
            </tr>
          </thead>
          <tbody>
            {state.data.map((entry) => (
              <tr key={entry.post.id}>
                <td>
                  {entry.user ? (
                    <Link to={`/lab5/users/${entry.user.id}`}>
                      {entry.user.username || entry.user.name}
                    </Link>
                  ) : (
                    'Unknown user'
                  )}
                </td>
                <td>
                  <Accordion flush>
                    <Accordion.Item eventKey={`post-${entry.post.id}`}>
                      <Accordion.Header>{entry.post.title}</Accordion.Header>
                      <Accordion.Body>{entry.post.body}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
                <td className="text-center">
                  <Link to={`/lab5/posts/${entry.post.id}/comments`} className="btn btn-link p-0">
                    {entry.comments.length}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default Lab5Page
