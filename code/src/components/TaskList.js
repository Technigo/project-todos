/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import { Button } from 'components/GlobalStyles'
import { FaTrash } from 'react-icons/fa';
import moment from 'moment';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onDeleteItemClick = (todoIndex) => {
    dispatch(tasks.actions.deleteItem(todoIndex));
  };

  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  };

  return (
    <StyledList>
      {taskList.map((singleTask, index) => {
        return (
          <ListWrapper>
            <div>
              <input
                className="checkbox"
                name="tasks"
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onCompleteToggle(singleTask.id)} />
              <label htmlFor={singleTask.id}>{singleTask.task}</label>
            </div>
            <TasksText>{singleTask.text}</TasksText>
            <DateAndDeleteBtn>
              <Date>{moment(tasks.date).format('ddd, MMM Do YYYY @ hh:mm a')}</Date>
              <DeleteBtn type="button" onClick={() => onDeleteItemClick(index)}> <FaTrash /></DeleteBtn>
            </DateAndDeleteBtn>
          </ListWrapper>
        )
      })}
    </StyledList>
  )
}

export default TaskList

export const StyledList = styled.section`
`

const ListWrapper = styled.article`
display: flex;
flex-direction: row;
/* flex-wrap: wrap; */
justify-content: space-between;
overflow: scroll;
border-radius: 20px;
border: 2px solid #f0732a;
margin: 20px;
padding: 0.5vh 2vw;
background-color: #ffccb0;
`

const TasksText = styled.p`
font-size: 1rem;
margin-left: 2px;
color: #936f63;
`

const DeleteBtn = styled(Button)`
border: none;
border-radius: 20px;
height: 30px;
width: 30px;
color: #f0732a;
background-color: transparent;
@media (min-width: 667px) and (max-width: 1024px) {

}
@media (min-width: 1025px) {
}
`

const Date = styled.div`
font-size: 10px;
align-items: flex-end;
margin-left: auto;
color : #936f63;
`

const DateAndDeleteBtn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 90px;
@media (min-width: 667px) and (max-width: 1024px) {
flex-direction: row;
align-items: center;
}
@media (min-width: 1025px) {
}
`