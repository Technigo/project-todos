import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { DeleteButton, Icon } from 'styles/Buttons';
import Trash from '../icons/trash.svg'
import { Section, Wrapper, TaskText, Date, CheckBoxWrapper } from '../styles/styledComponents';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const deleteToDo = (id) => {
    dispatch(tasks.actions.deleteToDo(id));
  };

  // payload
  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }
  return (
    <Section>
      {taskList.map((singleTask) => {
        return (
          <Wrapper>
            <CheckBoxWrapper htmlFor={singleTask} id={singleTask}>
              <span className="checkMark">done</span>
              <input
                className="checkBox"
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onCompleteToggle(singleTask.id)} />
            </CheckBoxWrapper>
            <TaskText>{singleTask.text}</TaskText>
            <Date>{singleTask.time}</Date>
            <DeleteButton type="button" onClick={() => deleteToDo(singleTask.id)}><Icon src={Trash} alt="Delete" /></DeleteButton>
          </Wrapper>
        );
      })}
    </Section>
  )
}

export default TaskList;