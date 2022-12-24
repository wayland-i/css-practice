import { useState } from 'react';
import './App.css';
import Container from './Container';

function App() {

  const [containerCount, setContainerCount] = useState(1)

  const handleAddContainer = () => {
    // const containers = document.getElementsByClassName('Containers')
    setContainerCount(containerCount => containerCount + 1);
  }

  const containers = [];
  for (let i = 0; i < containerCount; i++) {
    containers.push(<Container />)
  }
  

  return (
    <div className="App">
      <button onClick={handleAddContainer}>Add Container</button>
      {/* <ul className='Containers'>
        {containers}
      </ul> */}
        {containers}
    </div>
  );
}

export default App;
