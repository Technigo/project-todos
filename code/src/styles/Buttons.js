import styled from 'styled-components'

export const Button = styled.button`
position: absolute;
border: none;
background-color: transparent;
right: 4px;
align-item: center;
`

export const Icon = styled.img`
display: flex;
align-item: center;
height:20px;
&:hover {
  transform: scale(1.2);
  cursor: pointer;
}
`