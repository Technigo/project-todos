import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import todos from '../reducers/todos'

const TopSection = () => {

    const dispatch = useDispatch()

    const dateToday = moment().format('LL');
    const summary = useSelector((store) => store.todos.items.length)
    const isCompleted = useSelector((store) => store.todos.items)
    const amountOfNotCompleted = isCompleted.filter(x =>  x.isComplete === false).length 

    return(
        <section className="header-section">
            <div className="left-box-container">
                <div className="left-box">
                    <h4 className="todo-header">Todo</h4>
                    <p className="header-text">{dateToday}</p>
                </div>
            </div>
            <div className="right-box-container">
                <div className="right-box">
                    {(summary === 0) ? "" : <p className="total-todos">Total Todos: {summary}<span> {(summary === 2) ? "tasks" : "task"}</span></p>}
                    {(summary === 0) ? "" : <p className="total-completed">{(amountOfNotCompleted === 0) ? "All Todos completed" :<p className="total-uncompleted"> {amountOfNotCompleted}/{summary} uncompleted </p> }</p>}
                    {(summary === 0) ? "" : <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => dispatch(todos.actions.clearAll())}>Delete all</Button>}  
                </div>
            </div>
        </section>
    )
}

export default TopSection