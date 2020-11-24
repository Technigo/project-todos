import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../lib/Button';
import { todos } from '../reducers/todos';


const ActionButtons = () => {
  const [isAllComplete, setIsAllComplete] = useState(false)
  const dispatch = useDispatch();

  const handleOnComplete = () => {
    dispatch(todos.actions.setAllComplete())
    setIsAllComplete(true)
  }

  const handleUnsetComplete = () => {
    dispatch(todos.actions.setAllUnComplete())
    setIsAllComplete(false)
  }

  const handleOnRemove = () => {
    dispatch(todos.actions.removeAllTodos())
  }

  return (
    <>
      <Button 
      type="button"
      onClick={() => handleOnRemove()}
      >
        <p>Delete all todos</p>
      </Button>

      <Button 
      type="button"
      onClick={!isAllComplete ? () => handleOnComplete() : () => handleUnsetComplete()}
      >
        <p>{!isAllComplete ? "Mark all complete" : "Unset complete"}</p>
      </Button>
    </>
  )
}
export default ActionButtons;

  
 
      
 