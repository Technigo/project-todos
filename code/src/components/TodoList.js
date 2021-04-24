import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import todos from '../reducers/todos';

const Timestamp = styled.p`
  margin: 3px 0 0 30px;
  font-size: 10px;
  color: #767676;
`

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);
   
    const dispatch = useDispatch();

    return(
        <div className="list-container">
              {items.map((todo, index) => (
                  <div key={todo.id} className="todo-item">
                     <p>{todo.description}</p>
                     <input
                     type="checkbox"
                     checked={todo.isComplete}
                     onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                   />
                <span className={todo.isComplete === true ? 'todo-description-done' : 'todo-description'} key={todo.id}>{todo.description}</span>
                <Timestamp>added {moment(todo.createdAt).startOf('hour').fromNow()}</Timestamp>
                <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                Delete
                </button>
        </div>
        ))}
    </div>
  
    )
}

export default TodoList;