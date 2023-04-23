import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import CheckedIcon from '../assets/checkmark.png'
import { DeleteTaskButton } from './styled_components/buttons'

export const Tasklist = () => {
  const toDoList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

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
              <DeleteTaskButton type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask.id))}>X</DeleteTaskButton>
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

  @media (min-width: 668px) {
    min-height: 20%;
  }

  @media (min-width: 668px) {
    min-height: 15%;
  }

  [type="checkbox"]{
    opacity:0;
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
    outline: 2px solid #b6cdbd;;
    background: white;
    border-radius: 50%;
  }

  [type="checkbox"]:checked + label::before{
    content:"";
    position:absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    outline: 2px solid #5c715e;
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
    transition: all .3s ease;
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
  }

  [type="checkbox"]:checked + label {
    text-decoration: line-through 2px;
  }
`