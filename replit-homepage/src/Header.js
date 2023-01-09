import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
    margin-left: 5%;
`

function Header() {
  return (
    <Head>
        <h1>Node.js online editor, IDE, compliler, interpreter, and REPL</h1>
        <p>Online JavaScript compliler, REPL, IDE, and Editor</p>
        <button>Sign Up for the full experience</button>
    </Head>
    
  );
}

export default Header;