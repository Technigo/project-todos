import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'

import todos from '../reducers/todos'
import EmptyPage from './EmptyPage'

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);

    const dispatch = useDispatch();

    console.log(items.length)

    //console.log(items.length)

    return (
        <>
        {(items.length === 0) ? <EmptyPage /> : 

        <div >
            {items.map((todo, index) => (
                <div className="todo-container">

                <div key={todo.id} className="todo-items">
                    

                    <p className="input">{todo.description}</p>

                    
                    {/*<p>{moment(todo.date).format('Do MMMM YYYY h:mm')}</p>*/}
                    {/*<p>{todo.fromNow}</p>*/}
                    
                </div>
                <div className="date">
                {(moment().calendar() === todo.fromNow) ? <p className="deadline-passed"> Created: {moment(todo.date).format('Do MMMM YYYY')}</p> : <p className="within-deadline"> Created: {moment(todo.date).format('Do MMMM YYYY')}</p>}
                </div>
                <div className="list-bottom">
                <div className="checkbox">
                <input
                    
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))} // Vi gör på detta sätt för att det finns en state eller actions i vår toggleComplete, vi tillkallar action delen
                        //minLength="5"
                    />{todo.isComplete ? <p className="completed-task">Completed</p> : <p className="not-completed-task">Mark as Completed</p>}
                </div>
                
                <div className="remove-todo">
                <IconButton onClick={() => dispatch(todos.actions.removeTodo(todo.id))} color="secondary">
                <DeleteIcon />
                </IconButton>
                </div>
                </div>
              
                {/*}
                <button 
                    onClick={() => dispatch(todos.actions.removeTodo(todo.id))}
                    > 
                        Delete
            </button> */}

                </div>


            ))}
        </div> }
        </>
    )
}

export default TodoList