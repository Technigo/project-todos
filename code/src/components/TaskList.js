import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro'
import tasks from 'reducers/tasks';

const TaskList = () => {
  const taskList = useSelector((backpack) => backpack.tasks.items);

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };

  return (
    <ListWrapper>
      {taskList.map((singleTask) => {
        return (
          <TaskWrapper key={singleTask.id}>

            <StyledTask>{singleTask.text}</StyledTask>

            <input
              type="checkbox"
              checked={singleTask
                .isComplete}
              onChange={() => onIsCompleteToggle(singleTask.id)} />

            <button
              type="button"
              onClick={() => onDeleteTask(singleTask.id)}>
              X
            </button>

            <p>{singleTask.postedTime}</p>

          </TaskWrapper>
        );
      })}

    </ListWrapper>
  )
}

const ListWrapper = styled.section`
  // flex-direction: column;
`

const TaskWrapper = styled.article`
  flex-direction: row;
`

const StyledTask = styled.h3`
  font-family: var(--font-main);
  font-weight: 600;
  text-align: left;
  font-size: 20px;
  padding-bottom: 2vh;
  color: var(--color-accent);
`

export default TaskList;

/* return (
  <section>
    {taskList.map((singleTask) => {
      return (
        <article>
          <h2>{singleTask.name}</h2>
          <label>Is this pokemon caught?
            <input
              type="checkbox"
              checked={singleTask
                .isComplete}
              onChange={() => onisCompleteToggle(singleTask.id)} />
          </label>
          <button type="button">X</button>
        </article>
      );
    })}

  </section>
) */