import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.li`
align-self: flex-start;
padding:8px;
margin:8px;
font-size:32px;
color:#fff;
background-color:#000;
`;

export const Item = ({item}) => {
return <ItemContainer>{item.text}</ItemContainer>
}