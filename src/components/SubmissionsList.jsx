import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';

function SubmissionsList() {
  const items = useData();

  return (
    <Container className="mt-4">
      <h3>Lista profili</h3>
      <ListGroup>
        {items.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-start">
            <div>
              <h5>{item.imie || item.name}</h5>
              <p className="mb-1"><strong>Email:</strong> {item.email}</p>
              <p className="mb-0"><strong>Data urodzenia:</strong> {item.dataUrodzenia || item.birthDate || ''}</p>
              <p className="mb-0"><strong>Telefon:</strong> {item.telefon || ''}</p>
            </div>
            <div className="ms-3">
              <Button as={Link} to={`/lab04/edit/${item.id}`} variant="outline-primary" size="sm">Edytuj</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default SubmissionsList;
