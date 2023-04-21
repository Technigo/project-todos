import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const List = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
margin-top: 20px;
`
const TaskName = styled.div`
font-size: 20px;
`

const DeleteBtn = styled.button`
width: 30px;
height: 30px;
`

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  const onCheckedToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }
  const onDeleteTaskBtn = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  }

  return (
    <List>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <TaskName isChecked={singleTask.isChecked}>
                {singleTask.taskName}
              </TaskName>
              <label htmlFor={singleTask.id}>
                <input
                  key={singleTask.id}
                  type="checkbox"
                  id={singleTask.id}
                  value={singleTask.isChecked}
                  onChange={() => onCheckedToggle(singleTask.id)} />
              </label>
              <DeleteBtn onClick={() => onDeleteTaskBtn(index)} type="button" />
            </li>
          )
        })}
      </ul>
    </List>
  )
}

export default TaskList;