import React from 'react';
import styled from 'styled-components';

const Text = styled.text`
    color: red;
    font-size: 50px;
`

const Header = () => {
    return (

        <Container>
            <Text>Stuff 2 do</Text>
             <button>Calender</button>
                <ul>Category
                    <li>Work</li>
                    <li>Home</li>
                    <li>Fun</li>
                </ul>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px
`



export default Header;
