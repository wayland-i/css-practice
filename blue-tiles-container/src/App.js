import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [tiles, setTiles] = useState(['one', 'two', 'three!'])

  console.log(tiles.values)

  return (
    <div className='whole-container'>
      <header>
        <h1>Blue Tiles App</h1>
      </header>
      <div className='tiles-container'>
        {tiles.map((tile) => <div>{tile}</div>)}
      </div>
    </div>
  );
}

export default App;
