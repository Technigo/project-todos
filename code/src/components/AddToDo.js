import React, { useState } from 'react'
import uniqid from 'uniqid'
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux'
import { TaskReducer, IdeaReducer } from 'reducers/reducers';

export const AddTask = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTask = (event) => {
    event.preventDefault();
    dispatch(TaskReducer.actions.addTask(input))
    setInput('')
  }

  return (
    <Wrapper>
      <div>
        <div>
          <Text>Add a new task</Text>
        </div>
      </div>
      <InputAndBtn>
        <input
          type="text"
          id={uniqid()}
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="button"
          onClick={onAddTask}> ➕
        </button>
      </InputAndBtn>
    </Wrapper>
  )
}

export const AddIdea = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddIdea = () => {
    dispatch(IdeaReducer.actions.addIdea(input))
    setInput('')
  }

  return (
    <Wrapper>
      <div>
        <Text>Add a new idea</Text>
      </div>
      <InputAndBtn>
        <input
          type="text"
          id={uniqid()}
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="button"
          onClick={onAddIdea}> ➕
        </button>
      </InputAndBtn>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
margin: 10px;
padding: 5px;
width: 90%;
border-radius: 10px;
align-items: center;
justify-content: space-around;
background-color: #303030;
`

const Text = styled.h2`
color: #ff999b;
`
const InputAndBtn = styled.div`
display: flex;

[type="text"] {
  margin: 5px;
  background-color: #424242;
}

[type="button"] {
  background-color: #424242;
}
`