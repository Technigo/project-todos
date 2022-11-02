/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import ToDo from 'reducers/todo';
import moment from 'moment';
import GarbageBin from 'components/Images/icons8-garbage-bin-64.png'

const ToDoList = () => {
  const todoList = useSelector((store) => store.ToDo.items)
  const dispatch = useDispatch()

  const onIsCaughtToggle = (id) => {
    dispatch(ToDo.actions.toggleItem(id))
  }

  const date = new Date();
  return (
    <section>
      {todoList.map((singleToDo) => {
        return (
          <ToDos>
            <p>Posted: {moment(date.createdAt).fromNow()}</p>

            <Label>
              <input
                type="checkbox"
                checked={singleToDo.isCaught}
                onChange={() => onIsCaughtToggle(singleToDo.id)} />
              <h2>{singleToDo.name}</h2>
            </Label>
            <button onClick={() => dispatch(ToDo.actions.deleteItem(singleToDo.id))} type="button">
              <Icon
                className="icon1"
                src={GarbageBin}
                alt="Icon" />
            </button>
          </ToDos>
        )
      })}
    </section>
  )
}
export default ToDoList

const ToDos = styled.article`
border: solid black 2px;
width: 90%;
margin: 10px 0 10px 0;
   border: solid rgb(108, 106, 106) 2px;
  background-color: rgb(255, 255, 255);
  box-shadow:  5px 10px #272727;
  position: relative;
p{
  text-align: center;
}

  `

const Label = styled.div`
border: solid red 2px;
margin: 0px 10px 0 10px;
display: flex;
flex-direction: row;
h2{
  border: solid black 2px;
  padding: 0 0 0 5px;
}
input{
  border: solid blue 2px;
}
`
const Icon = styled.img`
border: solid yellow 2px;
width: 30px;
height: 30px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
right: 2%; 
bottom: 4%;
position: absolute;
`
