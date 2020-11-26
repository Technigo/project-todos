
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import moment from 'moment'
import '../index.css'

export const Item = (props) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState('')
    // const handleCheckboxClick = () => {
    //     dispatch(todos.actions.toggleNeedsMore(props.item.id))
    // }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addItem({ category }))
        setCategory('')
    }

    const handleRemoveButtonClick = () => {
        dispatch(todos.actions.removeItem(props.item.id))
    }

    return (
        <>

            {/* <form onSubmit={handleSubmit}>
                <div className="form-select">
                    <lable>
                        Show by category :
                <select
                            value={category}
                            onChange={(event) => setCategory(event.target.value)
                            }>
                            <option value=''>All</option>
                            <option value='🧃'>Drinks</option>
                            <option value='🥕'>Veggies</option>
                            <option value='🍌'>Fruits</option>
                            <option value='🍬'>Candy</option>
                            <option value='🥩'>Meats</option>
                            <option value='🧀'>Dairy</option>
                        </select>
                    </lable>
                </div>
            </form> */}
            
                <div className="items">
                    <div className="added-items">
                        <div className="added-category">
                            <span>{props.item.category}  </span>
                        </div>
                        <div className="added-name">
                            <span>{props.item.name}  </span>
                        </div>
                    </div>
                    {/* <label>
                    buy more
                 
            <input
                        type='checkbox'
                        checked={props.item.needsMore}
                        onChange={handleCheckboxClick}
                    />
                </label> */}
                    <div className="remove-button">
                        <button type='button' onClick={handleRemoveButtonClick}>
                            X
        </button>
                    </div>
                </div>
            
        </>
    )
}