/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro';
import NewTask from './NewTask';

const TaskList = () => {
  const allTasks = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  const onCheckedTaskToggle = (id) => {
    dispatch(tasks.actions.toggleChecked(id))
  }

  return (
    <InnerWrapper>
      <AlltaskContainer>
        <Title>TO DO</Title>
        {allTasks.map((task) => {
          return (
            <SingleTaskBox>
              <label>
                <Checkbox type="checkbox" checked={task.isChecked} onChange={() => onCheckedTaskToggle(task.id)} />
                {task.name}
              </label>
              <Button type="button">❌</Button>
            </SingleTaskBox>
          )
        })}
      </AlltaskContainer>
      <NewTask />
    </InnerWrapper>
  )
}
export default TaskList;

const InnerWrapper = styled.section`
  background-color: #BAF8D9;
  margin: 0 auto;
  width: 80%;
  height: 90%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.h1`
font-size: 1.9rem;
text-align: center;
color: #367857;
margin: 10% 0%;
line-height: 30px;
letter-spacing: 11px;
`

const AlltaskContainer = styled.div`
  margin: 0% 10%;
`

const SingleTaskBox = styled.article`
padding: 10px 0px;
display: flex;
justify-content: space-between;
`

const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;

`
const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`