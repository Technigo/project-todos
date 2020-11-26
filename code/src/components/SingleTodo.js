import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { todoTasks } from "../reducer/todoTasks"

export const SingleTodo = ({ id, text, complete }) => {

  // TODO:
  //styled component for done and undone state

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoTasks.actions.toggleComplete(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todoTasks.actions.removeTask(id))
  }

  return (

    <TaskContainer>
      <TextContainer>
        <label>
          <input
            type="checkbox"
            checked={complete}
            onChange={handleCheckboxClick}
          />
        </label>
        <Text>
          {text}
        </Text>
      </TextContainer>
      <div>
        <button
          type="button"
          onClick={handleRemoveButtonClick}>
          Remove
        </button>
      </div>
    </TaskContainer>
  )
}

// --- STYLED COMPONENTS ---
const TaskContainer = styled.li`
  display: flex;
  justify-content: space-between;
  /* completed: background: #CCE8FF; */
  /* darker blue: background: #0F3593; */
  background:#DFE1E5;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  list-style-type: none;
  border: 1px solid #808080;
  padding: 3px;
  margin-bottom: 5px;

`
const TextContainer = styled.div`
display: flex;
flex-direction: row;
`

const Text = styled.p`
  margin: 0;
  padding-left: 5px;

`