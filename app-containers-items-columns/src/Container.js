import React, { useState } from 'react'
import Item from './Item';

function Container() {

    const [itemCount, setItemCount] = useState(0);

    const handleaddItem = () => {
        setItemCount(itemCount => itemCount + 1);
    }

    const items = [];
    for (let i = 0; i < itemCount; i++) {
        items.push(<Item />)
    }

  return (
    <div className='container'>
        <h1>container</h1>
        <button onClick={handleaddItem}>Add Item</button>
        {items}
    </div>
  )
}

export default Container;