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
        <Label>
          <Input
            type="checkbox"
            checked={complete}
            onChange={handleCheckboxClick}
          />
          <span></span>
        </Label>
        {complete ? (<TextCompleted>{text}</TextCompleted>) : (<Text>{text}</Text>)}
      </TextContainer>
      <div>
        <Button
          type="button"
          onClick={handleRemoveButtonClick}>
          <Emoji>
            <span
              role="img"
              aria-label="red-cross">
              ✖️
            </span>
          </Emoji>
        </Button>
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
  background: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  color: #323E40;
  list-style-type: none;
  border: 1px solid #808080;
  padding: 10px;
  margin-bottom: 5px;
  width: 100%;
`

const Emoji = styled.span`
  font-size: 12px;
  cursor: pointer;
`

const Button = styled.button`
  background: white;
  border: none;
`

const Label = styled.label`
  
`

const Input = styled.input`
  cursor: pointer;
  //removes the default checkbox style 
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  border: 3px solid #5D732D;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  outline: none;
  margin: 0;

  &:checked {
    border: 2px solid #898C1C;
    background: #5D732D;
    transition-duration: 0.7s;
  }

`

const TextContainer = styled.div`
display: flex;
flex-direction: row;
`

const Text = styled.p`
  margin: 0;
  padding-left: 5px;
`

const TextCompleted = styled.p`
  margin: 0;
  padding-left: 5px;
  text-decoration: line-through;
`