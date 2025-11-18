import React from 'react'
import { useParams } from 'react-router-dom'
import useData from '../hooks/useData'

function Lab02() {
	const { id } = useParams()
	const items = useData()

	if (!id) {
		return <p>brak identyfikatora osoby.</p>
	}

	const personId = parseInt(id, 10)
	if (Number.isNaN(personId)) {
		return <p>niepoprawny identyfikator osoby.</p>
	}

	const person = items.find((p) => p.id === personId)

	if (!person) {
		return <p>nie znaleziono osoby o tym identyfikatorze.</p>
	}

	return (
		<div style={{ padding: '20px' }}>
			<h1>Profil osoby</h1>
			<p><strong>Imię i nazwisko:</strong> {person.name}</p>
			<p><strong>Email:</strong> {person.email}</p>
			<p><strong>Data urodzenia:</strong> {person.birthDate}</p>
			<p><strong>Telefon:</strong> {person.phone}</p>
		</div>
	)
}

export default Lab02
