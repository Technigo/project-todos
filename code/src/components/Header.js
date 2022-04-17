import React from 'react'
import styled from 'styled-components'

const Title = styled.h1 `
display:flex;
justify-content: center;
align-text: center;
`

export const Header = () => {
    return (
        <div>
            <Title>Todo list<span role='img' aria-label='list'>✍</span></Title>
        </div>
    )
}