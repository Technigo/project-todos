import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos';

//kolla upp useSelector
const TodoList = () => {

    //todos items from initalState
    const items = useSelector((store) => store.todos.items);
    //todos addLabael from initialState
    const addLabel = useSelector((store) => store.todos.addLabel);
    
    const dispatch = useDispatch();

    return (
        <div>
            <h1>To do</h1>
            <input
                placeholder="Add to do here "
                id="todoLabel"
                onChange={(e) => dispatch(todos.actions.setAddLabel(e.target.value))}
                value={addLabel}

            />
            <input 
                type="button"
                value="add to do"
                onClick={() => {
                    dispatch(todos.actions.addToDo()) 
                }
                }
            />

            {items.map(todo =>  (
                <div key={todo.id}>
                    <p>{todo.description}</p>
                    <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    />
                </div>
            ))}
        </div>
    )
};

export default TodoList;