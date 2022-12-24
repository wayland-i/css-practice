import { useState } from 'react';
import './App.css';
import Container from './Container';

function App() {

  const [containerCount, setContainerCount] = useState(0)

  const handleAddContainer = () => {
    setContainerCount(containerCount => containerCount + 1);
  }

  const containers = [];
  for (let i = 0; i < containerCount; i++) {
    containers.push(<Container />)
  }
  

  return (
    <div className="App">
      <button onClick={handleAddContainer}>Add Container</button>
      <div className='containers'>
        {containers}
      </div>
    </div>
  );
}

export default App;
