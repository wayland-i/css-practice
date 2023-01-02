import './App.css';
import { useState, useEffect } from 'react';
import Container from './Container';

function App() {

const [products, setProducts] = useState([]);

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(data => setProducts(data))

useEffect(() => {
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => setProducts(data))
}, [])


  return (
    <div className="App">
      <Container products={products}/>
    </div>
  );
}

export default App;
