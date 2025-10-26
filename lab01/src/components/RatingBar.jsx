import React from 'react'

function RatingBar({ rate = 0 }) {
  const stars = Array.from({ length: 10 }, (_, i) => i < rate)
  return (
    <div aria-hidden="true" style={{ color: '#f5c518' }}>
      {stars.map((filled, i) => (
        <span key={i} style={{ fontSize: '1rem', marginRight: 2 }}>
          {filled ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

export default RatingBar
