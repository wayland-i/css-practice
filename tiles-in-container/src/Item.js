import React from 'react'

function Item({ title, id }) {

  return (
    <div>
      <h2>{id}</h2>
      <h1>{title}</h1>
    </div>
  )
}

export default Item;