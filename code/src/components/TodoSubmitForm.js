/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import todo from 'reducers/todo'
import uniqid from 'uniqid'
import { Add, Close } from '@mui/icons-material'
import { Calendar, Form, PrioTag, TagWrap } from 'styledcomponents/Input'
import { Section } from 'styledcomponents/SectionWrapper'

const TodoSubmitForm = () => {
  const dispatch = useDispatch()

  const [isDate, setDate] = useState('')
  const [prioTag, setPrioTag] = useState('')
  const [newTask, setNewTask] = useState('')
  const [visible, setVisible] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const postNewTask = {
      id: uniqid(),
      task: newTask,
      deadline: isDate,
      completed: false,
      tag: prioTag
    };
    dispatch(todo.actions.addItem(postNewTask))
    setNewTask('');
    setPrioTag('');
    setDate('');
  }

  const toggleClass = () => {
    setVisible(!visible)
  }

  return (
    <Section>
      <div className="fab-container">
        <ExpandButton
          onClick={toggleClass}>
          {visible ? <Close /> : <Add />}
        </ExpandButton>
      </div>
      <Form onSubmit={handleSubmit} className={visible ? 'input-active' : 'input-hidden'}>
        <input
          type="text"
          value={newTask}
          placeholder="Add new task..."
          onChange={(e) => setNewTask(e.target.value)} />
        <Calendar
          className={visible ? 'calendar-active' : 'calendar-hidden'}
          id="date-picker"
          type="date"
          value={isDate}
          onChange={(e) => setDate(e.target.value)} />
        <TagWrap>
          <PrioTag>!
            <input
              type="checkbox"
              value="!"
              color="red"
              onChange={(e) => setPrioTag(e.target.value)} />
          </PrioTag>
          <PrioTag>!!
            <input
              type="checkbox"
              value="!!"
              color="#ffff"
              onChange={(e) => setPrioTag(e.target.value)} />
          </PrioTag>
          <PrioTag>!!!
            <input
              type="checkbox"
              value="!!!"
              color="#ffff"
              onChange={(e) => setPrioTag(e.target.value)} />
          </PrioTag>
        </TagWrap>
        <button type="submit" disabled={newTask.length < 4}> Add new task </button>
      </Form>
    </Section>
  )
}
export default TodoSubmitForm;

const ExpandButton = styled.button`
color: white;
background-color: orange;
border-radius: 50%;
height: 50px;
width: 50px;
border: none;
position: absolute;
left: 80%;
top: 20%;
`