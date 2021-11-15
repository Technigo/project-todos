import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components"

import todos from "reducers/todos";
import moment from "moment";

const Header = () => {

  const dispatch = useDispatch()
  const onCompleteAll = () => {
    dispatch(todos.actions.completeAll())
  }
  const tasks = useSelector((store) => store.todos.items)
  // const completedTasks = tasks.filter((singleTask) => singleTask.isComplete)
  
  return(
    <>
    <header>
      <h1>Todo</h1>
      <p>{moment().format('MMMM Do')}</p>
      <div><p>{tasks.length} tasks</p>
      {/* <div>Completed Tasks: {completedTasks.id}/{tasks.length}</div> */}
      <button onClick={onCompleteAll}>Complete All</button>
      </div>
    </header>
    </>
  )
}

export default Header
