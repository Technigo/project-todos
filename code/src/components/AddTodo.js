import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import todos from 'reducers/todos'

import { Section } from './styles/sharedStyles'
import {
  AddButtonBox,
  AddButton,
  AddText,
  AddForm,
  AddOptions,
  AddCategory,
  AddDeadline
} from './styles/addTodoStyles'

const AddTodo = ({ setInputSearch }) => {

  const dispatch = useDispatch()

  const [inputText, setInputText] = useState('')
  const [inputCategory, setInputCategory] = useState('neutral')
  const [inputDeadline, setInputDeadline] = useState(null)
  const [timestamp, setTimestamp] = useState(Date.now)
  const [isDisabled, setIsDisabled] = useState(true)

  const onChangeInputText = (e) => {
    setInputText(e.target.value)
    setIsDisabled(!e.target.value)
    setTimestamp(Date.now)
  }

  const onChangeInputCategory = (e) => {
    setInputCategory(e.target.value)
  }

  const onChangeInputDeadline = (date) => {
    setInputDeadline(+new Date(date) + 86400000 - 1)
  }

  const onAddTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: uniqid(),
      text: inputText,
      category: inputCategory,
      deadline: inputDeadline,
      timestamp: timestamp,
      completed: false
    }
    dispatch(todos.actions.addTodo(newTodo))
    setInputSearch('')
    setInputText('')
    setInputCategory('neutral')
    setInputDeadline(null)
    setIsDisabled(true)
  }

  return (
    <Section>
      <AddForm onSubmit={onAddTodo}>
        <AddOptions>
          <AddText
            onChange={onChangeInputText}
            placeholder="Type your todo"
            required
            type="text"
            value={inputText}
          />
          <AddCategory
            aria-label="choose a category"
            onChange={onChangeInputCategory}
            value={inputCategory}
          >
            <option value="neutral">Neutral</option>
            <option value="funny">Funny</option>
            <option value="joyful">Joyful</option>
            <option value="boring">Boring</option>
            <option value="hard">Hard</option>
          </AddCategory>
          <AddDeadline>
            <DatePicker
              dateFormat="dd.MM.yyyy"
              locale={'en'}
              minDate={new Date()}
              onChange={onChangeInputDeadline}
              placeholderText="Deadline (optional)"
              selected={inputDeadline}
            />
          </AddDeadline>
        </AddOptions>
        <AddButtonBox>
          <AddButton
            aria-label="add a task"
            disabled={isDisabled}
            type="submit"
          >
            <FontAwesomeIcon icon={faPlus} />
          </AddButton>
        </AddButtonBox>
      </AddForm>
    </Section>
  )
}

export default AddTodo
