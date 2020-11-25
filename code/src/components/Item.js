import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.p`
align-self: flex-start;
padding:8px;
margin:8px;
font-size:32px;
color:#F7AF9D;
width: 50%;
background-color:#F7E3AF; 
`;

export const Item = ({item}) => {
return (
<ItemContainer>{item.text}</ItemContainer>
)
}