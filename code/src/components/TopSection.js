import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import todos from '../reducers/todos'
/* */
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';


/* */

const TopSection = () => {

    const dispatch = useDispatch()

const dateToday = moment().format('LL');


    const summary = useSelector((store) => store.todos.items.length)

    const isCompleted = useSelector((store) => store.todos.items)

    console.log(summary)

    console.log(isCompleted)
    // https://stackoverflow.com/questions/38305454/how-to-get-the-count-of-boolean-value-if-it-is-true-in-array-of-objects
    //const isCompleteTamam = isCompleted.filter(isComplete => isComplete === true).length
    //console.log(isCompleteTamam)

    // https://dev.to/michellekaplan7/let-s-count-some-sheep-60i


    console.log(isCompleted.filter((x,i) => { return x.isComplete; }).length)
    const amountOfNotCompleted = isCompleted.filter((x) => { return x.isComplete === false; }).length // delete return 


    const today = new Date()
    const MyTest = today.toLocaleString('default', { month: 'long' })
    console.log(MyTest)

    

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
            
            {(summary === 0) ? "" : <p className="total-uncompleted">{amountOfNotCompleted}/{summary} uncompleted</p>}

            {(summary === 0) ? "" : <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => dispatch(todos.actions.clearAll())}>Delete all</Button>}
            
            </div>
            
        </div>
        </section>
    )
}

export default TopSection