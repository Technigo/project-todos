import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TaskCount = styled.p`
 font-size: 1rem;
 font-family:  'Oswald', sans-serif;
 color: #EEEEEE;
 position: absolute; 
 left: 55%;


`;

const TodoCount = () => {
  const allTodos = useSelector((store) => store.todos.items);
  const completedTodo= allTodos.filter((todo) => todo.isComplete);

return (
    <TaskCount>
        <p>Completed items: {completedTodo.length} / {allTodos.length}</p>
    </TaskCount>
)
};

export default TodoCount;




