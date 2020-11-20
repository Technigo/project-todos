//component that takes care of marking a task as done or not
import React from 'react'
import { useSelector, useDispatch } from '@reduxjs/toolkit'

import { todos } from '../Reducers/todos'

//use itemIndex to let the store know what to remove in the todo-list

export const RemoveItem = () => {
    //function that removes todo
    return(
        <div>Remove</div>
    )
}