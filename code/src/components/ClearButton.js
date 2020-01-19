import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from '../reducers/fridge'

import './clearbutton.css'

export const ClearButton = () => {

const dispatch = useDispatch()

    return (
        <div class="clear-all">
<button type="button" className="slide-top" onClick={() => dispatch(fridge.actions.removeAll())}>
    Clear all
</button>
</div>

)

}