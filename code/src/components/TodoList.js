import React from 'react';
import styled from 'styled-components'

const TodoList = () => {
  return (
    <BigStyle>
      <TextP>Task list</TextP>
      <input type="checkbox" />
    </BigStyle>
  )
}

const BigStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: row;
  max-width: 14em;
  min-width: 330px;
  min-height: 330px;
  height: fit-content;
  margin: auto;
  background-color: #ffda8f;
  margin-top: 3em;
  margin-bottom: 3em;
  transform: rotate(1.2deg);
  box-shadow: 3px 5px 6px 0px rgba(0,0,0,0.5);
  padding: 0.7em;
  padding-bottom: 1.1em;
`
const TextP = styled.p`
font-family: 'Gaegu';
font-weight: bold;
font-size: 30px;
`

export default TodoList;