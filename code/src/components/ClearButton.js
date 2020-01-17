import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from '../reducers/fridge'

import './clearbutton.css'

export const ClearButton = () => {

const dispatch = useDispatch()

    return (
<button type="button" className="remove-all" onClick={() => dispatch(fridge.actions.removeAll())}>
    Clear all
</button>

)

}