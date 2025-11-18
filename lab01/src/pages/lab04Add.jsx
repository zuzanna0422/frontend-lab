import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useDispatch from '../hooks/useDispatch'
import {
  formatPhoneFromDigits,
  getPhoneDigits,
  normalizePhoneInput,
  sanitizeNameInput,
  validateProfileForm,
  MAX_NAME_LENGTH
} from '../utils/profileValidation'

function Lab04Add() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    imie: '',
    email: '',
    dataUrodzenia: '',
    telefon: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    let nextValue = value

    if (name === 'imie') {
      nextValue = sanitizeNameInput(value)
    } else if (name === 'telefon') {
      nextValue = normalizePhoneInput(value)
    }

    setFormData((prev) => ({ ...prev, [name]: nextValue }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateProfileForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const formattedPhone = formatPhoneFromDigits(getPhoneDigits(formData.telefon))
    const payload = {
      id: Date.now(),
      name: formData.imie,
      email: formData.email,
      birthDate: formData.dataUrodzenia,
      phone: formattedPhone,
      rating: 0,
      check: false
    }

    dispatch({ type: 'ADD_ITEM', payload })
    navigate('/lab3')
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Dodaj profil</h2>
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3">
              <Form.Label>Imię</Form.Label>
              <Form.Control
                name="imie"
                type="text"
                value={formData.imie}
                onChange={handleChange}
                required
                maxLength={MAX_NAME_LENGTH}
                isInvalid={!!errors.imie}
                placeholder="Wpisz imię"
              />
              <Form.Control.Feedback type="invalid">
                {errors.imie}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data urodzenia</Form.Label>
              <Form.Control
                type="date"
                name="dataUrodzenia"
                value={formData.dataUrodzenia}
                onChange={handleChange}
                required
                isInvalid={!!errors.dataUrodzenia}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dataUrodzenia}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefon</Form.Label>
              <Form.Control
                type="tel"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                required
                inputMode="numeric"
                isInvalid={!!errors.telefon}
                placeholder="123-456-789"
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefon}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={() => navigate('/lab3')}>Anuluj</Button>
              <Button variant="primary" type="submit">Dodaj</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Lab04Add
