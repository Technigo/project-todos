import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    color: red;
    font-size: 50px;
`

const Header = () => {
    return (

        <Container>
            <Text>Stuff 2 Do</Text>
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
