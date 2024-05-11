import React from 'react'

export default function RestaurentCard(item) {
  return (
    <div key={item.id}>
        <h1>{item.name}</h1>
    </div>
  )
}
