import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from "styled-components";



export const HandleTasks = () => {

  const allTasks = useSelector(store => store.tasks.taskArray)
  const dispatch = useDispatch()

  const displayLenght = () => {
    return allTasks.filter((item) => item.complete).length
  }

  return (
    <Wrapper>
      Completed: {displayLenght()}/{allTasks.length}
      <div>
        <Button type="button" onClick={() => {
          dispatch(
            tasks.actions.filterTasks("un-complete"))
        }}>Filter To do</Button>
        <Button type="button" onClick={() => {
          dispatch(
            tasks.actions.filterTasks("complete"))
        }}>Filter completed</Button>
        <Button type="button" onClick={() => {
          dispatch(
            tasks.actions.filterTasks(""))
        }}>Show All</Button>
      </div>
      <div>
        <Button type="button" onClick={() => {
          dispatch(
            tasks.actions.removeComplete())
        }}>Remove Complete</Button>
        <Button type="button" onClick={() => {
          dispatch(
            tasks.actions.removeAllTasks())
        }}>Remove All</Button>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Button = styled.button`
  margin: 10px 10px 0 0;
`;
