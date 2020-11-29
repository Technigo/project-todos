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
  background: #F2F2EB;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  list-style-type: none;
  border-bottom: 2px solid #819FA6;
  padding: 10px;
  margin: 0 auto 5px auto;
  max-width: 80%;
`

const Emoji = styled.span`
  font-size: 12px;
  cursor: pointer;
`

const Button = styled.button`
  background: #F2F2EB;
  border: none;
`

const Label = styled.label`
  //REMOVE IF NOT STYLED
`

const Input = styled.input`
  cursor: pointer;
  //removes the default checkbox style 
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  border: 3px solid #5D732D;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  outline: none;
  margin: 0;

  &:checked {
    border: 2px solid #5D732D;
    background: #898C1C;
    transition-duration: 0.8s;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  word-wrap: break-word;
  color: #F2F2EB;
`

const Text = styled.p`
  font-size: 14px;
  margin: 0;
  padding-left: 5px;
  color: #323232;
`

const TextCompleted = styled.p`
  margin: 0;
  padding-left: 5px;
  text-decoration: line-through;
  color: #323232;
`