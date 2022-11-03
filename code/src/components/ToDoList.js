/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import ToDo from 'reducers/todo';
import moment from 'moment';
import GarbageBin from 'components/Images/icons8-garbage-bin-64.png';

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
width: 90%;
margin: 10px 0 10px 0;
border: solid rgb(108, 106, 106) 2px;
background-color: rgb(255, 255, 255);
 box-shadow: 2px -1px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 2px -1px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px -1px 5px 0px rgba(0,0,0,0.75);
position: relative;
p{
  text-align: center;
  color: grey;
}

button{
background: none;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
right: 2%; 
bottom: 5%;
position: absolute;
border: none;

}
@media (min-width: 668px) {
  width: 50%;
}
@media (min-width: 1024px) {
  width: 40%;
  `

const Label = styled.div`
margin: 0px 10px 0 10px;
display: flex;
flex-direction: row;
align-items: center;
h2{
  padding: 0 0 0 5px;
}
input{
  border: solid blue 2px;

}
`
const Icon = styled.img`
width: 20px;
height: 20px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
right: 2%; 
bottom: 5%;
position: absolute;
@media (min-width: 668px) {
  width: 30px;
  height: 30px;
}
`