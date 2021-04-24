import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'
import EmptyPage from './EmptyPage';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import todos from '../reducers/todos'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);
    const dispatch = useDispatch();

    return (
        <>
            {(items.length === 0) ? <EmptyPage /> : 
                <div>
                    {items.map((todo, index) => (
                        <div className="todo-container">

                            <div key={todo.id} className="todo-items">
                                <p className="input">{todo.description}</p>
                            </div>
                            <div className="date">
                                {(moment().calendar() === todo.fromNow) ? <p className="deadline-passed"> Created: {moment(todo.date).format('Do MMMM YYYY')}</p> : <p className="within-deadline"> Created: {moment(todo.date).format('Do MMMM YYYY')}</p>}
                            </div>
                            <div className="list-bottom">
                                <div className="checkbox">
                                    <FormControlLabel
                                        control={<Checkbox checked={todo.isComplete} onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}  />}
                                        label={todo.isComplete ? <p className="completed-task">Completed</p> : <p className="not-completed-task">Mark as Completed</p>}
                                    />
                                </div>
                                <div className="remove-todo">
                                    <IconButton onClick={() => dispatch(todos.actions.removeTodo(todo.id))} color="secondary">
                                    <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 
            }
        </>
    )
}

export default TodoList