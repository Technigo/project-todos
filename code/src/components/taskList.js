/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/task'
import { Button } from 'styledcomponents/GlobalStyles';
import { formatRelative } from 'date-fns';

import styled from 'styled-components';

const TaskList = () => {
  const listTasks = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  const onToDoToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const onToDoDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index))
  }
  return (
    <>
      {listTasks.map((newTodo, ToDoIndex) => (
        <listedTasks key={newTodo.id}>
          <Wrapper>
            <h4> • {newTodo.name}</h4>
            <p>{formatRelative(new Date(), new Date())}</p>
            <SubmittedToDoDetails>

              <Checkbox>

                <input
                  type="checkbox"
                  checked={newTodo.isDone}
                  onChange={() => onToDoToggle(newTodo.id)} />
                <label
                  htmlFor="done">
                Done
                </label>
              </Checkbox>
              <Button
                type="button"
                onClick={() => onToDoDelete(ToDoIndex)}>Delete
              </Button>
            </SubmittedToDoDetails>
          </Wrapper>
        </listedTasks>
      ))}
    </>
  )
}

export default TaskList

export const Wrapper = styled.div`
/* background-color:#ffadad; */
margin: 20px 0;

h4{
  border-bottom: 1px solid #BB8082;
}

p{
  border-bottom: 1px solid #BB8082;
}
`
export const SubmittedToDoDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 10px;
`

export const Checkbox = styled.div`
margin: 0;

input{
  margin-right: 5px;
}
`