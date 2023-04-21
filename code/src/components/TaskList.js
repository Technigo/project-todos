import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
`

const TaskItem = styled.div`
font-size: 20px;
`

const CheckboxList = styled.div`
font-size: 23px;
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
    <InnerWrapper>
      {taskList.map((singleTask, index) => {
        return (
          <TaskItem key={singleTask.id}>
            <CheckboxList>
              <input
                type="checkbox"
                id={singleTask.id}
                checked={singleTask.isChecked}
                onChange={() => onCheckedToggle(singleTask.id)} />
            </CheckboxList>
            <DeleteBtn onClick={() => onDeleteTaskBtn(index)} type="button" />
          </TaskItem>
        )
      })}
    </InnerWrapper>
  )
}

export default TaskList;