/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import AddTask from './AddTask';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onTaskCompleted = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }

  return (
    <section>
      {taskList.map((singelTask) => {
        return (
          <PostIT>
            <PostItList>
              <PostItTitle>{singelTask.text}</PostItTitle>
              <PostItText>is task completed
                <input
                  type="checkbox"
                  checked={singelTask.complete}
                  onChange={() => onTaskCompleted(singelTask.id)} />
              </PostItText>
              <button type="button">X</button>
            </PostItList>
          </PostIT>
        );
      })}
      <AddTask />
    </section>
  )
}

const PostIT = styled.ul`
  list-style:none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin:1em;
`;

const PostItList = styled.li`
  list-style:none;
  text-decoration:none;
  color:#000;
  background:#ffc;
  display:block;
  height:10em;
  width:10em;
  padding:1em;
  margin:1em;
`;

const PostItTitle = styled.h2`
font-weight: bold;
font-size: 2rem;
`;

const PostItText = styled.p`
  font-size: 1rem;
  font-weight: normal;
`;

export default TaskList

// onChange={() => onTaskCompleted(singleTask.id) } ****use this?