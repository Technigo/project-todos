import styled from 'styled-components'

export const Button = styled.button`
padding: 7px;
margin: 5px;
background: ${(props) => props.background || 'gray'}
color: ${(props) => props.color || 'black'}
font-size: 18px;
border: 2px solid #888;
border-radius: 8px;

&:hover {
  background: black;
  color: white;
}
`
