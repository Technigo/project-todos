import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { DeleteButton } from 'styles/Buttons';
import { Section, Wrapper, TaskInput } from '../styles/styledComponents';

const TaskList = () => {
  const [deleteToDo, setDeleteToDo] = useState('')
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const deleteTask = (e) => {
    e.preventDefault();
    dispatch(tasks.actions.deleteTodo(deleteToDo));
    setDeleteToDo('');
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
              <DeleteButton type="button" onClick={deleteTask}>delete</DeleteButton>
            </Wrapper>
          </article>
        );
      })}
    </Section>
  )
}

export default TaskList;