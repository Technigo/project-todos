import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { Button, Icon } from 'styles/Buttons';
import Trash from '../icons/trash.svg'
import { Section, Wrapper, TaskText, Date, CheckBoxWrapper } from '../styles/Global';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items); // grabs our items in reducer
  const dispatch = useDispatch();

  // Delete button
  const onDeleteItemBtnClick = (todoIndex) => {
    dispatch(tasks.actions.deleteItem(todoIndex));
  };

  // Toggle checkbox
  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  return (
    <Section>
      {taskList.map((singleTask, index) => {
        return (
          <Wrapper>
            <CheckBoxWrapper>
              <label htmlFor={singleTask} id={index}>
                <input
                  className="checkBox"
                  type="checkbox"
                  checked={singleTask.complete}
                  onChange={() => onCompleteToggle(singleTask.id)}
                  id={singleTask.id} />
              </label>
            </CheckBoxWrapper>
            <TaskText>{singleTask.text}</TaskText>
            <Date>{singleTask.time}</Date>
            <Button type="button" onClick={() => onDeleteItemBtnClick(index)}><Icon src={Trash} alt="Delete" /></Button>
          </Wrapper>
        );
      })}
    </Section>
  )
}

export default TaskList;