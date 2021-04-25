import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import tasks from '../reducers/tasks';

import TaskCard from './TaskCard';

const Container = styled.div`
width: 100%;
display; flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 768px){
  width: 680px;
}
`;
const ToDoList = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  return (
    <Container>{
      items.map((task) => 
        <TaskCard 
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          createdAt={task.createdAt}
          onChangeAction={() => dispatch(tasks.actions.toggleComplete(task.id))}
          onClickAction={() => dispatch(tasks.actions.removeTask(task.id))}
        />
      )}
    </Container>
  )
};

export default ToDoList;

