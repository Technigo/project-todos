/* eslint-disable max-len */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import ToDo from 'reducers/todo';
import uniqid from 'uniqid';
import CheckList from 'components/Images/icons8-add-new-50.png'

export const AddToDo = () => {
  const dispatch = useDispatch()
  const [newToDo, setNewToDo] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    const postNewToDo = { id: uniqid(),
      name: newToDo,
      complete: false }

    dispatch(ToDo.actions.addToDo(postNewToDo))
    setNewToDo(' ')
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <h2>Add ToDo</h2>
      <div>
        <Text
          className="TextArea"
          placeholder="add task here.."
          value={newToDo}
          onChange={(event) => setNewToDo(event.target.value)} />
        <button className="Submit" type="submit">
          <Icon
            className="icon"
            src={CheckList}
            alt="Icon" />
        </button>
      </div>
    </Form>
  )
}
const Form = styled.form`
border: solid black 2px;
div{
  display: flex;
  flex-direction: rows;
}

h2{
  text-align:center;
  border: solid red 2px;
}

button{
background: none;
height: 30px;
}
`
const Text = styled.textarea` 
  width: auto;
  margin: 15px;
  height: 10px;
  padding: 10px;
  // border: solid rgb(108, 106, 106) 2px;
  // background-color: rgb(235, 232, 232);
  // box-shadow:  5px 10px #272727;
`
const Icon = styled.img`
width: 30px;
height: 30px;
background-color: pink;
`
