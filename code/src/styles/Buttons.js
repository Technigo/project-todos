import styled from 'styled-components'

export const Button = styled.button`
position: absolute;
margin-left: 80%;
border: none;
background-color: transparent;
@media (min-width: 800px) {
  margin-left: 65%;
}
`

export const Icon = styled.img`
height:20px;
&:hover {
  transform: scale(1.2);
  cursor: pointer;
}
`