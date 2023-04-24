import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import CheckedIcon from '../assets/checkmark.png'
import { DeleteTaskButton } from './styled_components/buttons'

export const Tasklist = () => {
  const toDoList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('TodoList'));
    if (tasksFromLocalStorage) {
      dispatch(tasks.actions.setUpStore(tasksFromLocalStorage))
    }
  }, [dispatch])

  return (
    <ListWrapper>
      <List>
        {toDoList.map((singleTask) => {
          return (
            <StyledListItem key={singleTask.id}>
              <ListItemWrapper>
                <input id={`taskText-${singleTask.id}`} type="checkbox" checked={singleTask.checked} onChange={() => dispatch(tasks.actions.toggleChecked(singleTask))} />
                <label htmlFor={`taskText-${singleTask.id}`}>{singleTask.name}</label>
              </ListItemWrapper>
              <DeleteTaskButton type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask.id))}>✘</DeleteTaskButton>
            </StyledListItem>)
        })}
      </List>
    </ListWrapper>
  )
}

const ListWrapper = styled.section`
  width: 80%;
  height:80%;
  overflow-y: scroll;
`
const ListItemWrapper = styled.div`
  display: flex;
  width: 90%;
`

const List = styled.ul`
  height: 100%;
  list-style-type: none;
`
const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  min-height: 15%;
  background: #f7faf7;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow-wrap: break-word;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  animation-name: slicing;
  animation-duration 0.2s;
  animation-timing-function: ease-in;

  @keyframes slicing {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

  @media (min-width: 668px) {
    min-height: 20%;
  }

  @media (min-width: 668px) {
    min-height: 15%;
  }

  [type="checkbox"]{
    opacity:0;
    -webkit-appearance: none;
    appearance: none;
  }

  [type="checkbox"] + label{
    font-size: 1.1rem;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    display: inline-block;
    color: #5c715e;
    font-weight: bold;
    line-height: 25px;
  }

  [type="checkbox"] + label::before{
    content:"";
    position: absolute;
    left: 0;
    top: 3px;
    width: 18px;
    height: 18px;
    outline: 2px solid #b6cdbd;
    background: white;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    clip-path: circle(50% at 50% 50%);
    box-shadow: inset 0 0 3px #5c715e;
  }

  [type="checkbox"]:checked + label::before{
    content:"";
    position:absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    outline: 2px solid #5c715e;
    -webkit-border-radius: 50%;
  }

  [type="checkbox"]:checked + label::after{
    content:"";
    position:absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    background-image: url(${CheckedIcon});
    background-size: cover;
    transform: scale(1.5);
    opacity: 1;
    transition: all .3s ease-in-out;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }

  [type="checkbox"]:not(checked) + label::after{
    content:"";
    position:absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    background-image: url(${CheckedIcon});
    background-size: cover;
    transform: scale(0);
    opacity: 0;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }

  [type="checkbox"]:checked + label {
    text-decoration: line-through 2px #5c715e;
    -webkit-text-decoration: line-through;
    text-decoration-color: #5c715e;
    -webkit-text-decoration-color: #5c715e;
    text-decoration-thickness: 1px;
    -webkit-text-decoration-thickness: 1px;
  }
`