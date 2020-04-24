import styled from 'styled-components'

export const Button = styled.button`
padding: 0px 10px;
margin: 0 0 0 5px;
background: ${(props) => props.background || 'gray'};
color: ${(props) => props.color || 'black'};
font-size: 14px;
font-weight: normal;
border: 1px solid #888;
border-radius: 5px;
height: 24px;
width: auto;
text-align: center;

&:hover {
  background: blue;
  color: white;
}
`
