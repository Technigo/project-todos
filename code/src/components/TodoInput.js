import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { Button } from '../lib/Button'
import { Input } from '../lib/Input'
import { Form } from '../lib/Container'


export const TodoInput = () => {
const dispatch = useDispatch()  
const [inputValue, setInputValue] = useState('')

const handleOnSubmit = (event) => {
  event.preventDefault()
  
// Dispatch the action to save the new todo item
  dispatch(
    todos.actions.addTodo({itemInfo:{
    description: inputValue,
    done: false
    }
  })
  )


//so the text are will be cleared after hitting submit. 
setInputValue('')
}


  return (
    <Form className='todo-input' onSubmit={handleOnSubmit} >
      <Input
      type='text'
      multiline
      onChange={event => setInputValue(event.target.value)}
      value={inputValue}
      className='todo-input-text'
      required
      placeholder='Add todo'>
      </Input>
      <Button
      type='submit'
      className='todo-input-button'
      value="Add Todo"> +
      </Button>
    </Form>
  )
}