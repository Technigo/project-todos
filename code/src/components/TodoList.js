import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'

import todos from '../reducers/todos'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);

    const dispatch = useDispatch();

    const ab = moment().format('LLLL');
    console.log(ab)

    //console.log(items.length)

    return (
        <div>
            {items.map((todo, index) => (
          
                <div key={todo.id} className="todo-items">

                    <p>{todo.description}</p>
                    <input 
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))} // Vi gör på detta sätt för att det finns en state eller actions i vår toggleComplete, vi tillkallar action delen
                    />
                    <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}> 
                        Delete
                    </button>
                    <p>{moment(todo.date).format('Do MMMM YYYY h:mm')}</p>
                    
                </div>


            ))}
        </div>
    )
}

export default TodoList