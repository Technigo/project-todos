import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch, useSelector } from 'react-redux'

import todos from '../reducers/todos'

const TopSection = () => {

    const summary = useSelector((store) => store.todos.items.length)

    const isCompleted = useSelector((store) => store.todos.items)

    console.log(summary)

    console.log(isCompleted)


    return(
        <section>
        <div>
            <h4>Todo</h4>
            <h6>Placeholder Date</h6>
        </div>
        <div>
            <p>Total Todos: {summary}<span> {(summary === 2) ? "tasks" : "task"}</span></p>


          {isCompleted.map(y => (
                    <p>{y.isComplete ? "not completed": "completed"}</p>
                ))}

        



            <button>CLEAR ALL</button>
        </div>
        </section>
    )
}

export default TopSection