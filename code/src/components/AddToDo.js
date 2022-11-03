/* eslint-disable max-len */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import ToDo from 'reducers/todo';
import uniqid from 'uniqid';
import Pencil from 'components/Images/icons8-pencil-64.png'

export const AddToDo = () => {
  const dispatch = useDispatch()
  const [newToDo, setNewToDo] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    const postNewToDo = { id: uniqid(),
      name: newToDo,
      complete: false }

    dispatch(ToDo.actions.addToDo(postNewToDo))
    setNewToDo('')
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <div>
        <img
          className="icon"
          src={Pencil}
          alt="Icon" />
        <Text
          className="TextArea"
          placeholder="add task here.."
          value={newToDo}
          onChange={(event) => setNewToDo(event.target.value)} />
        <button className="Submit" type="submit"><Add>+</Add>
        </button>
      </div>
    </Form>
  )
}
const Form = styled.form`
width: 90%;
margin: 20px 0 15px 0;
div{
  display: flex;
  flex-direction: rows;
  align-items: center;
justify-content: center;
}

h2{
text-align: center;
}

img{
width: 20px;
height: 20px;
margin: 0 0 0 15px;


@media (min-width: 668px) {
  width: 30px;
  height: 30px;
}
}

button{
background: none;
border: none;
height: 70px;
margin: 0 10px 0 0 ;
}
@media (min-width: 668px) {
  width: 80%;
}
@media (min-width: 1024px) {
  width: 80%;
`
const Text = styled.textarea` 
  border: none;
  border-bottom: 1px solid #504E55;
  background-color: transparent;
  height: 15px;
  width: 100%;
  font-size: 15px;
  color:#504E55;
  padding: 10px;
  margin: 15px 15px 15px 0;

  @media (min-width: 668px) {
    height: 20px;
    font-size: 24px;
    height: 30px;
    padding: 12px;
  }
`
const Add = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: #F3B6D2;
  color: 99627B;
  font-size: 20px;
  box-shadow: 4px 4px 12px -9px rgba(0,0,0,0.68);
  -webkit-box-shadow: 4px 4px 12px -9px rgba(0,0,0,0.68);
  -moz-box-shadow: 4px 4px 12px -9px rgba(0,0,0,0.68);
&:hover {
  background-color:  #E089A9;
}
@media (min-width: 668px) {
  height: 50px;
  width: 50px;
  font-size: 25px;
}
  `