import './App.css';
import Container from './Container';

function App() {

  const handleAddContainer = () => {
    const containers = document.getElementsByClassName('Containers')
    containers.append(<li>hello</li>)
  }

  return (
    <div className="App">
      <button onClick={handleAddContainer}>Add Container</button>
      <ul className='Containers'>

      </ul>
    </div>
  );
}

export default App;
