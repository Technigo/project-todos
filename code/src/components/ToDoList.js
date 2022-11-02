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
  width: auto;
  margin: 15px;
  padding: 20px;
   border: solid rgb(108, 106, 106) 2px;
  background-color: rgb(255, 255, 255);
  box-shadow:  5px 10px #272727;
  // display: rows;
  `

const Label = styled.div`
border: solid red 2px;
`
const Icon = styled.img`
border: solid yellow 2px;
width: 20px;
height: 20px;
`
