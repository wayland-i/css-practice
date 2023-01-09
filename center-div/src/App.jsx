import { useState } from 'react'
import styled from "styled-components";
// import './App.css'

const MyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyDiv>
        hello
      </MyDiv>
    </div>
  )
}

export default App
