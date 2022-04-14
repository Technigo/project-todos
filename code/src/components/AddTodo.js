import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import styled from "styled-components/macro"
import uniqid from 'uniqid'

import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCirclePlus } from '@fortawesome/free-regular-svg-icons'
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import todos from 'reducers/todos'

import { AddButtonBox, AddText, AddSection, AddForm, AddOptions, AddCategory, AddDeadline } from './styling/StyledAddTodo'
import { AddButton } from './styling/IconsButtons'

const AddTodo = () => {
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
    setInputDeadline(+new Date(date))
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
    setInputText('')
    setInputCategory('neutral')
    setInputDeadline(null)
    setIsDisabled(true)
  }

  return (
    <AddSection>
      <AddForm onSubmit={onAddTodo}>
          <AddOptions>
            <AddText required placeholder="Type your todo" type="text" onChange={onChangeInputText} value={inputText} />
            <AddCategory value={inputCategory} onChange={onChangeInputCategory}>
              <option value="neutral">Neutral</option>
              <option value="funny">Funny</option>
              <option value="boring">Boring</option>
              <option value="hard">Hard</option>
            </AddCategory>
            <AddDeadline>
              <DatePicker placeholderText="Deadline (optional)" selected={inputDeadline} onChange={onChangeInputDeadline} dateFormat="dd.MM.yyyy" locale={'en'} minDate={new Date()} />
            </AddDeadline>
          </AddOptions>
          <AddButtonBox>
            <AddButton type="submit" disabled={isDisabled}><FontAwesomeIcon icon={faPlus} /></AddButton>
          </AddButtonBox>
      </AddForm>
    </AddSection>
  )
}

export default AddTodo
