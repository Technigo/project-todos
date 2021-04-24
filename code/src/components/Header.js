import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import FlipMove from "react-flip-move"

import todos from '../reducers/todos'

const Header = () => {
  const [visible, setVisible] = useState(true)
  const items = useSelector((store) => store.todos.items) 
  const completedTodos = items.filter((todo) => todo.isComplete)
  const dispatch = useDispatch()

  const handleStartButton = () => {
    if (visible) {
      setVisible()
    } else {
       setVisible(false)
    } 
  }

  return (
    <header className='header'>
    <div>
      <h1 className='header-title'>To-do's</h1>
      <FlipMove duration={250} easing='ease-in'>
        {completedTodos.length > 0 &&
        <p>{completedTodos.length}/{items.length} to-do's</p>
        } 
      </FlipMove>
    </div>
    <div className='header-btn'>
    { visible ? 
      <Button
        classes={{ label: 'remove-btn' }}
        size='small'
        variant='contained' 
        color='secondary'
        onClick={()=> dispatch(todos.actions.makeAllDone(), handleStartButton())} 
      >
        All done
      </Button> : 
      <>
      <Button
        classes={{ label: 'remove-btn' }}
        size='small'
        variant='contained' 
        color='secondary'
        onClick={()=> dispatch(todos.actions.removeComplete())}
      >
        Remove
      </Button> 
      { !visible ? 
      <Button
        classes={{ label: 'remove-btn' }}
        size='small'
        variant='contained'
        color='secondary'
        onClick={()=> dispatch(todos.actions.resetAll(), handleStartButton())}
      >
        Reset
      </Button> :
      <Button
        classes={{ label: 'remove-btn' }}
        size='small'
        variant='contained'
        color='secondary'
        onClick={()=> dispatch(todos.actions.makeAllDone())} 
    >
      All done
    </Button>
    }

      </>
      }
    </div>
  </header>
)
}

export default Header