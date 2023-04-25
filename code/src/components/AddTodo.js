import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import { PrioTag, TagWrap, Low, Medium, High, Form, Input } from 'styles/Input';
import { TaskDescription } from 'styles/TextStyles'
import { SubmitButton, SubmitButtonWrap } from '../styles/Button.styled'
import { Section } from '../styles/SectionWrapper.styled'

const AddTodo = ({ visible }) => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const [prioTag, setPrioTag] = useState('lightyellow');
  const [selectedColor, setSelectedColor] = useState('lightyellow');

  const handleSubmit = (event) => {
    event.preventDefault();

    const postNewTodo = {
      id: Date.now().toString(),
      task: newTask.charAt(0).toUpperCase() + newTask.slice(1),
      completed: false,
      tag: prioTag || 'lightyellow'
    };

    dispatch(todo.actions.addItem(postNewTodo));
    setNewTask('');
    setPrioTag('');
  }

  return (
    <Section>
      <Form onSubmit={handleSubmit} className={visible ? 'input-active' : 'input-hidden'}>
        <TaskDescription>Add new task</TaskDescription>
        <Input
          type="text"
          value={newTask}
          placeholder="Add new task..."
          onChange={(event) => setNewTask(event.target.value)}
          id="addTodoInput" />
        <TaskDescription>Set importance</TaskDescription>
        <TagWrap>
          <PrioTag>
            <Low
              type="radio"
              name="priority"
              value="lightyellow"
              defaultChecked
              onChange={(e) => {
                setPrioTag(e.target.value);
                setSelectedColor(e.target.value);
              }} />
          </PrioTag>
          <PrioTag>
            <Medium
              type="radio"
              name="priority"
              value="lightskyblue"
              onChange={(e) => {
                setPrioTag(e.target.value);
                setSelectedColor(e.target.value);
              }} />
          </PrioTag>
          <PrioTag>
            <High
              type="radio"
              name="priority"
              value="pink"
              onChange={(e) => {
                setPrioTag(e.target.value);
                setSelectedColor(e.target.value);
              }} />
          </PrioTag>
        </TagWrap>
        <SubmitButtonWrap>
          <SubmitButton
            type="submit"
            disabled={newTask.length < 3 || !selectedColor}>
  Add new task
          </SubmitButton>
        </SubmitButtonWrap>
      </Form>
    </Section>
  )
}

export default AddTodo;
