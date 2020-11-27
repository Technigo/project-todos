import React from 'react';
import { useDispatch } from 'react-redux'

import { todos } from 'reducers/todos'
import { CustomCheckbox } from './CustomCheckbox'
import { TodoItem } from '../styledComponents/list'
import { TodoContainer } from '../styledComponents/containers'
import { DeleteButton } from '../styledComponents/buttons'

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  const onRemoveClicked = () => {
   dispatch(todos.actions.removeTodoItem({
     itemId: item.id
   }))
  }

  const handleOnChange = () => {
    dispatch(todos.actions.setDone({ 
      itemId: item.id,
      done: !item.done
    }))
  }
  
  return (
    <TodoContainer>
      <CustomCheckbox 
        onChangeHandler={handleOnChange} 
        isChecked={item.done ? 'checked' : ''}
      />
      <TodoItem>{item.description}</TodoItem>
      <DeleteButton onClick={onRemoveClicked}>X</DeleteButton>
    </TodoContainer>
  )
}

