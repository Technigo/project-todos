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
  
  dispatch(
    todos.actions.addTodo({itemInfo:{
    description: inputValue,
    done: false
    }
  })
  )
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