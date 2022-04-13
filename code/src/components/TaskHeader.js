import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import moment from 'moment'
// import styled from 'styled-components'

import tasks from 'reducers/tasks'

const TaskHeader = () => {
    const taskCounter = useSelector((store) => store.tasks.items.length)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Todo</h1>
            {/* <p>moment().format('MMM Do YY')</p> */}
           <p>{taskCounter} tasks </p>
           <button onClick={() => dispatch(tasks.actions.removeAll())}>
               Clear tasklist
           </button>
        </div>
    )
}

export default TaskHeader
