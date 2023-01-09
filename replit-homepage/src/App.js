// import './App.css';
import styled from 'styled-components';

const Red = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`
const Blue = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`
const Purple = styled.div`
  background-color: purple;
  width: 100px;
  height: 100px;
`
const Green = styled.div`
  background-color: green;
  width: 100px;
  height: 100px;
`

const MiniWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 50% 0 0;
`

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

`


function App() {
  return (
    <Wrap>

      <MiniWrap>
        <Red className='red' />
        <Blue className='red' />
      </MiniWrap>

      <MiniWrap>
        <Purple className='red' />
        <Green className='red' />
      </MiniWrap>

    </Wrap>
  );
}

export default App;
