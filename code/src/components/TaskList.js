import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import tasks from "reducers/tasks";

const TaskList = () => {
    const items = useSelector ((store) => store.tasks.items);

    const dispatch = useDispatch();

    const onToggleTasks = (id) => {
        dispatch(tasks.actions.toggleTasks(id))
    };

    const onDeleteTodo = (id) => {
dispatch(tasks.actions.deleteTodo(id))
    }

    const TasksContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
    height: auto;
    border: 2px solid green;
    align-items: center;
`

  return (
      <TasksContainer>
          {items.map((item) => (
          <div key={item.id}>
              <p>{item.text}</p>
              <input 
                    type="checkbox" 
                    checked={item.isComplete} 
                    onChange={() => onToggleTasks(item.id)}
                    />
                    <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
                  </div>
          ))}  
      </TasksContainer>
  );
};

export default TaskList;