import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos.js'

import { Button } from 'lib/Button'
import { ItemDescription } from 'lib/Text'
import { CheckSection } from 'lib/Container.js'

export const TodoItem = ({ itemIndex }) => {
const item = useSelector(store => store.todos.list.items[itemIndex])
 
const dispatch = useDispatch()

const onClearClicked = () => {
 dispatch(
    todos.actions.removeTodo({
    itemIndex: itemIndex
   })
  ) 
}

const handleOnChange = () => {
    dispatch(
    todos.actions.setDone({
    itemIndex: itemIndex,
    done: !item.done
    })
  )
}

return ( 
 <CheckSection className={`todo-item ${item.done ? 'done' : ''}`}>
    <input 
    type='checkbox'
    onChange={handleOnChange}
    className='todo-item-check'
    checked={item.done ? 'checked' : ''}
    ></input>
    <ItemDescription>{item.description}</ItemDescription>
    <Button onClick={onClearClicked}>
      remove
    </Button>
 </CheckSection>
)
};