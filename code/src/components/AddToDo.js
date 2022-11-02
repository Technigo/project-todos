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
// border: solid black 2px;
// background-color:#E0DDCD;
width: 90%;
margin: 10px 0 10px 0;
div{
  display: flex;
  flex-direction: rows;
}

h2{
  text-align: center;
  // border: solid red 2px;
}

button{
background: none;
border: none;
height: 70px;
margin: 0 10px 0 0 ;

}
@media (min-width: 668px) {
  width: 50%;
}
@media (min-width: 1024px) {
  width: 40%;
`
const Text = styled.textarea` 
border: solid red 2px;
  width: 100%;
  margin: 10px;
  height: 15px;
  padding: 10px;
  border: solid rgb(108, 106, 106) 2px;
  background-color: rgb(235, 232, 232);
  box-shadow:  5px 10px #272727;
  @media (min-width: 668px) {
    margin: 15px;
    height: 20px;
  }
`
const Icon = styled.img`
width: 30px;
height: 30px;
margin 15px 0 0 0;
// border: solid red 2px;
// background-color: pink;
`
