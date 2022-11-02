import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { DeleteButton, Icon } from 'styles/Buttons';
import Trash from '../icons/trash.svg'
import { Section, Wrapper, TaskInput } from '../styles/styledComponents';

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
          <article>
            <Wrapper>
              <input
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onCompleteToggle(singleTask.id)} />
              <TaskInput>{singleTask.text}</TaskInput>
              <DeleteButton type="button" onClick={() => deleteToDo(singleTask.id)}><Icon src={Trash} alt="Delete" /></DeleteButton>
            </Wrapper>
          </article>
        );
      })}
    </Section>
  )
}

export default TaskList;