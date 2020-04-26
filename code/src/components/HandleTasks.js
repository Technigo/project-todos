import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from "styled-components";
import { Button, ButtonBracket } from 'elements/Buttons';


export const HandleTasks = ({ completed, remove, show }) => {
  const allTasks = useSelector(store => store.tasks.taskArray)
  const dispatch = useDispatch()

  const displayLenght = () => {
    return allTasks.filter((item) => item.complete).length
  }

  /* Array includes hidden -> show all */
  const showAll = allTasks.some(item => item.display === false)

  /* Array includes completed and visible -> show uncompleted */
  const showUncompleted = allTasks.some(item => item.display === true && item.complete === true)

  /* Array includes uncompleted and visible -> show completed */
  const showCompleted = allTasks.some(item => item.display === true && item.complete === false)


  return (

    <Wrapper>

      {/* returning show buttons if show prop */}
      {show && (
        <Div>
          {showUncompleted && (
            <Button type="button" onClick={() => {
              dispatch(
                tasks.actions.filterTasks("un-complete"))
            }}>To do</Button>)}
          {showCompleted && (
            <Button type="button" onClick={() => {
              dispatch(
                tasks.actions.filterTasks("complete"))
            }}>Completed</Button>)}
          {showAll && (
            <Button
              type="button" onClick={() => {
                dispatch(
                  tasks.actions.filterTasks(""))
              }}>Show All</Button>)}
        </Div>
      )}

      {/* returning remove buttons if remove prop */}
      {remove && (
        <Div>
          <ButtonBracket type="button" onClick={() => {
            dispatch(
              tasks.actions.removeComplete())
          }}>Remove Complete</ButtonBracket>
          <ButtonBracket type="button" onClick={() => {
            dispatch(
              tasks.actions.removeAllTasks())
          }}>Remove All</ButtonBracket>
        </Div>
      )}
      {/* returning completed if completed prop */}
      {completed && (
        <Div>
          Completed {displayLenght()}/{allTasks.length}
        </Div>
      )}


    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 0px;
`;

const Div = styled.div`
  margin: 20px 0;
`;

// const Button = styled.button`
//   margin: 10px 10px 0 0;
// `;

