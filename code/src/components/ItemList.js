import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'components/Item'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const ItemList = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.todos.items)
    const [category, setCategory] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addItem({ category }))
        setCategory('')
    }
    return (
        <>
        <div className="select-category">
         <form onSubmit={handleSubmit}>
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
            </form>
            </div>
            <div className="items-list">
              
                    {items.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                
            </div>
        </>
    )
}