import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
`

const DeleteBtn = styled.button`
width: 25px;
height: 30px;
`

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();
  const onCheckedToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }
  const onDeleteTaskBtn = (taskIndex) => {
    dispatch(tasks.actions.deleteTask(taskIndex));
  }

  return (
    <section>
      {taskList.map((singleTask, index) => {
        return (
          <InnerWrapper>
            <label htmlFor={singleTask}>
              <input
                key={singleTask.id}
                type="checkbox"
                id={singleTask.id}
                checked={singleTask.isChecked}
                onChange={() => onCheckedToggle(singleTask.id)} />
            </label>
            <DeleteBtn onClick={() => onDeleteTaskBtn(index)} type="button" />
          </InnerWrapper>
        )
      })}
    </section>
  )
}

export default TaskList;