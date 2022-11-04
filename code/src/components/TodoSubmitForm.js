/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todo from 'reducers/todo'
import uniqid from 'uniqid'
import { Add, Close } from '@mui/icons-material'
import { Calendar, Form, Input, PrioTag, TagWrap, Low, Medium, High } from 'styles/Input'
import { Section } from 'styles/SectionWrapper'
import { ExpandButton, PositionBtn, SubmitButton } from 'styles/BtnStyle'
import { TaskDescription } from 'styles/TextStyles'

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
      <PositionBtn>
        <ExpandButton
          onClick={toggleClass}>
          {visible ? <Close /> : <Add />}
        </ExpandButton>
      </PositionBtn>
      <Form onSubmit={handleSubmit} className={visible ? 'input-active' : 'input-hidden'}>
        <TaskDescription>Add new task</TaskDescription>
        <Input
          type="text"
          value={newTask}
          placeholder="Add new task..."
          onChange={(e) => setNewTask(e.target.value)} />
        <TaskDescription>Set a deadline and importance</TaskDescription>
        <Calendar
          className={visible ? 'calendar-active' : 'calendar-hidden'}
          id="calendar"
          type="time"
          value={isDate}
          dateFormat="MM/dd/yyyy h:mm aa"
          onChange={(e) => setDate(e.target.value)}
          required />
        <TagWrap>
          <PrioTag>
            <Low
              type="checkbox"
              value="!"
              onChange={(e) => setPrioTag(e.target.value)} />
          </PrioTag>
          <PrioTag>
            <Medium
              type="checkbox"
              value="!!"
              onChange={(e) => setPrioTag(e.target.value)} />
          </PrioTag>
          <PrioTag>
            <High
              type="checkbox"
              value="!!!"
              onChange={(e) => setPrioTag(e.target.value)} />
          </PrioTag>
        </TagWrap>
        <SubmitButton type="submit" disabled={newTask.length < 3}> Add new task </SubmitButton>
      </Form>
    </Section>
  )
}
export default TodoSubmitForm;