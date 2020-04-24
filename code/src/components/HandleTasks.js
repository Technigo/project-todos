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
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.removeAllTasks())
      }}>Remove All</button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.removeComplete())
      }}>Remove Complete</button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.filterTasks("complete"))
      }}>Filter completed</button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.filterTasks("un-complete"))
      }}>Filter To do</button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.filterTasks(""))
      }}>Show All</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;