import React from 'react'
import { Row, Col } from 'react-bootstrap'

function MyContainer({ element, data = [], columns = 3, colClass = '' }) {
  const colSize = Math.max(1, Math.floor(12 / columns))

  return (
    <Row className="gy-3">
      {data.map((item) => (
        <Col key={item.id} md={colSize} className={colClass}>
          <div className="h-100">
            {React.createElement(element, { ...item })}
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default MyContainer
