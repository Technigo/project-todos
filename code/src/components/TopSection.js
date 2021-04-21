import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch, useSelector } from 'react-redux'

import todos from '../reducers/todos'

const TopSection = () => {
    // Good site https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
    // Date 
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const myMonth = new Date().getMonth();
const myDay = new Date().getDate()




    const summary = useSelector((store) => store.todos.items.length)

    const isCompleted = useSelector((store) => store.todos.items)

    console.log(summary)

    console.log(isCompleted)
    // https://stackoverflow.com/questions/38305454/how-to-get-the-count-of-boolean-value-if-it-is-true-in-array-of-objects
    //const isCompleteTamam = isCompleted.filter(isComplete => isComplete === true).length
    //console.log(isCompleteTamam)

    // https://dev.to/michellekaplan7/let-s-count-some-sheep-60i


    console.log(isCompleted.filter((x,i) => { return x.isComplete; }).length)
    const amountOfNotCompleted = isCompleted.filter((x) => { return x.isComplete === false; }).length


    const today = new Date()
    const MyTest = today.toLocaleString('default', { month: 'long' })
    console.log(MyTest)
    

    return(
        <section>
        <div>
            <h4>Todo</h4>
            <h6>{monthNames[myMonth]} {myDay}</h6>
        </div>
        <div>
            <p>Total Todos: {summary}<span> {(summary === 2) ? "tasks" : "task"}</span></p>


            <p>Total uncompleted tasks: {amountOfNotCompleted}</p>

        



            <button>CLEAR ALL</button>
        </div>
        </section>
    )
}

export default TopSection