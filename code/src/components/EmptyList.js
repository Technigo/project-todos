import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const NothingToDo = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 90px;

  h2 {
    font-family: 'Ubuntu', sans-serif;
    color: white;
    background-color: #FFD580;
    border-radius: 20px;
    padding: 10px;
  }
`
const EmptyField = () => {
  const items = useSelector((store) => store.todos.items)
  const activeTodos = items.length
  const emptyField = activeTodos === 0

  return (
    <NothingToDo>
    { emptyField === true &&
    <div className="empty-field">
      <h2>Nothing to do?</h2>
      <p>Let's add some todos</p>
      </div>}
    </NothingToDo>
  )
}

export default EmptyField