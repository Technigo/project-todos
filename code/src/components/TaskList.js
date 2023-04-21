import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
margin-top: 20px;
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
    <section>
      <ul>
      {taskList.map((singleTask) => {
        return (
          <li key={singleTask.id}>
          <p>
            <span>{singleTask}</span>
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