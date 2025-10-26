import React, { useReducer } from 'react'
import { Row, Col } from 'react-bootstrap'
import AppReducer from '../data/AppReducer'

function MyContainer({ element, data = [], columns = 3, colClass = '' }) {
  const colSize = Math.max(1, Math.floor(12 / columns))

  const [state, dispatch] = useReducer(AppReducer, data)

  return (
    <Row className="gy-3">
      {state.map((item) => (
        <Col key={item.id} md={colSize} className={colClass}>
          <div className="h-100">
            {React.createElement(element, { ...item, dispatch })}
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default MyContainer
