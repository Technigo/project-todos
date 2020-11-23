import styled from 'styled-components'

// need to fix the color as a prop?
export const Button = styled.button `
  padding: 2px;
  border-radius: 5px;
  background-color: white;
  border: none;

  &:hover {
    background: black;
    color: white;
  }

  // can add media q here too
`