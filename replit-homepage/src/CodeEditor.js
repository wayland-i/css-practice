import React from 'react';
import styled from 'styled-components';

const Editor = styled.div`
    display: flex;
    justify-content: space-around;
`

const Main = styled.div`
    
    
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2%;
`

function CodeEditor() {
  return (
    <Main>

        <Buttons>
            
            <select value='pick a compiler'>
                <option value="">Pick a compiler...</option>
                <option value="Node.js">Node.js</option>
                <option value="Python">Python</option>
                <option value="C++">C++</option>
            </select>

            <button style={{ 'backgroundColor': 'green', 'width': '12rem', 'height': '10rem'}}>Run</button>

            <button>Share</button>
        
        </Buttons>
        
        <Editor>
            <textarea rows="100" cols="180"></textarea>
            <textarea rows="100" cols="180"></textarea>
        </Editor>

    </Main>
  );
}

export default CodeEditor;