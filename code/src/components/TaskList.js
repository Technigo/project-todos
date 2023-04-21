import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
margin-top: 20px;
`
const TaskText = styled.div`
font-size: 23px;
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
      {taskList.map((singleTask, index) => {
        return (
          <InnerWrapper>
            <label htmlFor={singleTask.id}>
              <input
                key={singleTask.id}
                type="checkbox"
                id={singleTask.id}
                checked={singleTask.isChecked}
                onChange={() => onCheckedToggle(singleTask.id)} />
            </label>
            <TaskText>{singleTask.text}</TaskText>
            <DeleteBtn
              type="button"
              onClick={() => onDeleteTaskBtn(index)}>-
            </DeleteBtn>
          </InnerWrapper>
        )
      })}
    </section>
  )
}

export default TaskList;