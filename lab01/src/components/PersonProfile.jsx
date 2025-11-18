import React from 'react'
import ProfileParagraph from './ProfileParagraph'
import { Button, Form } from 'react-bootstrap'
import RatingBar from './RatingBar'
import { useNavigate } from 'react-router-dom'
import useDispatch from '../hooks/useDispatch'

function PersonProfile({ id, name, email, birthDate, phone, rating = 0, check = false }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleEdit = () => {
    if (id != null) navigate(`/lab04/edit/${id}`)
  }

  const handleCheck = () => {
    dispatch({ type: 'check', id })
  }

  const handleDelete = () => {
    dispatch({ type: 'delete', id })
  }

  const handleRate = () => {
    dispatch({ type: 'rate', id })
  }

  return (
    <div className="card shadow-sm p-3 h-100 person-card d-flex flex-column position-relative">
      <div className="person-card-header text-center mb-2 position-relative">
        <div className="person-check-wrapper">
          <Form.Check
            type="checkbox"
            checked={!!check}
            onChange={handleCheck}
            aria-label={`select-${id}`}
          />
        </div>

        <h5 className="person-name mb-0">{name}</h5>
      </div>

      <div className="person-card-body text-center flex-grow-1">
        {email && (
          <div className="mb-2">
            <ProfileParagraph label="Email" title={email} />
          </div>
        )}

        {birthDate && (
          <div className="mb-2">
            <ProfileParagraph label="Data urodzenia" title={birthDate} />
          </div>
        )}

        {phone && (
          <div className="mb-2">
            <ProfileParagraph label="Telefon" title={phone} />
          </div>
        )}

        <div className="rating-row mt-2 d-flex align-items-center justify-content-between">
          <div className="rating-left">
            <RatingBar rate={rating} />
          </div>
          <div className="rating-right ms-2">
            <Button variant="outline-success" size="sm" onClick={handleRate}>Oceń</Button>
          </div>
        </div>
      </div>

      <div className="person-card-actions mt-3 d-flex justify-content-between align-items-center">
        <div className="left-action">
          <Button variant="outline-primary" size="sm" onClick={handleEdit}>Edytuj</Button>
        </div>
        <div className="right-action">
          <Button variant="outline-danger" size="sm" onClick={handleDelete}>Usuń</Button>
        </div>
      </div>
    </div>
  )
}

export default PersonProfile
