import './App.css';
import styled from "styled-components";
import NavBar from './NavBar';
import Header from './Header';
import CodeEditor from './CodeEditor';

const Main = styled.div`

  & > * {
    margin-bottom: 4%;
  }

`

function App() {
  return (
    <Main>
      <NavBar></NavBar>
      <Header></Header>
      <CodeEditor></CodeEditor>
    </Main>
  );
}

export default App;
