import React from 'react'

import styled from 'styled-components'
import { Container } from '../shared/Container'

const Text = styled.text`
  color:white;
  font-size:40px;
  padding: 20px 0px;
`


export const Header = () => {
    return (
        <Container background ='#14274e'>
            <Text> Todo App!</Text>
        </Container>
    )
}