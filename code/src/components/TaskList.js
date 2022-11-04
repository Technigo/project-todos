/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import { Button } from 'components/GlobalStyles'

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onDeleteItemClick = (todoIndex) => {
    dispatch(tasks.actions.deleteItem(todoIndex));
  };

  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  };

  return (
    <TaskListWrapper>
      {taskList.map((singleTask, index) => {
        return (
          <TaskWrapper key={singleTask.id}>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onCompleteToggle(singleTask.id)} />
            </label>
            <h4>{singleTask.text}</h4>
            <Button type="button" onClick={() => onDeleteItemClick(index)}>X</Button>
          </TaskWrapper>
        )
      })}
    </TaskListWrapper>
  )
}

export default TaskList

const TaskListWrapper = styled.section`
/* display: flex;
flex-direction: row; */
`

const TaskWrapper = styled.article`
display: flex;
flex-direction: row;
align-items: center;
border: solid 2px pink;
`