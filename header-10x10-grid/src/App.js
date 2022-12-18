import React, {useState} from 'react';

import './App.css';

function App() {

  const [items, setItems] = useState([1, 2, 3])

  const handleClick = () => {
    const newNum = items[items.length - 1] + 1
    setItems([...items, newNum]);
  }

  return (
    <>
      <div className='header'>
        <h1 id='title'>Ian's Website</h1>
      </div>

      <button className='btn' onClick={handleClick}>Click Me</button>

      <div className='container'>
        {items.map(item => <li>{item}</li>)}
        
      </div>

    </>
  );
}

export default App;
