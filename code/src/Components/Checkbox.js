import React from 'react'
import { useSelector, useDispatch } from '@reduxjs/toolkit'

import { todos } from '../Reducers/todos'

export const Checkbox = () => {
    
    //function that marks todo as done
    return(
        <input type='checkbox'/>
    )
}