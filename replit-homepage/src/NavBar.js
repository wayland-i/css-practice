import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const Bar = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 10%;
    }
`


function NavBar() {
  return (
    <Wrapper>
        <Bar>
            <h1>replit</h1>
            <p>Features</p>
            <p>Blog</p>
            <p>Pricing</p>
            <p>Teams Pro</p>
            <p>Teams for Education</p>
            <p>Careers</p>
        </Bar>

        <Bar>
            <button>Sign Up</button>
            <button>Log In</button>
        </Bar>
    </Wrapper>
  );
}

export default NavBar;