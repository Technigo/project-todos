import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'components/reducers/tasks.js';
import styled from 'styled-components';
import { Button } from './styles/global';

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    margin: 0 20px;
`

const TaskText = styled.p`
    font-family: 'Dongle', sans-serif;
    font-size: 2em;
    line-height: 0.5em;
    width: 100%;
`

const TaskList = () => { // Function.
  const taskList = useSelector((store) => store.tasks.items) // useSelector
  // to select the list/slice of tasks from Redux store and from that map over
  // them/select an item. We go to our store and grab the items from our task.
  const dispatch = useDispatch();
  const onDeleteSingleTaskBtnCLick = (id) => { // Function. Parameter = Id.
    dispatch(tasks.actions.deleteSingleTask(id)); // Dispatch the action
  }
  const onIsCompletedCheckboxToggle = (id) => { // To establish, we need the id.
    dispatch(tasks.actions.toggleIfTaskIsCompleted(id)); // Since id we need to dispatch an action.
  }
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <InnerWrapper>
              <label htmlFor={`task_with_id${singleTask.id}`}>
                <input
                  id={`task_with_id${singleTask.id}`}
                  type="checkbox"
                  value={singleTask.isCompleted}
                  className="checkBox"
                  onChange={() => onIsCompletedCheckboxToggle(singleTask.id)}
                  checked={singleTask.isCompleted} />
              </label>
              <TaskText>
                {singleTask.name}
              </TaskText>
              <Button
                type="button"
                onClick={() => onDeleteSingleTaskBtnCLick(singleTask.id)}>
                Delete this task
              </Button>
            </InnerWrapper>
          )
        })}
      </ul>
    </section>
  )
}

// id as key and singleTask.name in list = printed out value.
// store = backpack
export default TaskList;