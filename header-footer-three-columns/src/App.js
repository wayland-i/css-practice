import './App.css';

function App() {
  return (
    <>
      <div className='header'>Header</div>

      <div className='container'>
        <div className='container-left'>left
          <ul className='ul-left'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div className='container-center'>center
          <ul className='ul-center'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
        </div>
        <div className='container-right'>right
          <ul className='ul-right'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>

      <div className='footer'>Footer</div>
    </>
  );
}

export default App;
