import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

import './clearbutton.css'

export const ClearButton = () => {

    const dispatch = useDispatch()

    return (
        <div class="clear-all">
            <button type="button" className="slide-top" onClick={() => dispatch(tasks.actions.removeAll())}>
                Clear all
</button>
        </div>

    )
}