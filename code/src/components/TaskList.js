/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import { Button } from 'components/GlobalStyles'
import { FaTrashAlt } from 'react-icons/fa';
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
              <Date>
             Created {moment(tasks.date).format('ddd, MMM Do YYYY @ hh:mm a')}
              </Date>
              <DeleteBtn type="button" onClick={() => onDeleteItemClick(index)}> <FaTrashAlt /></DeleteBtn>
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
padding: 0.5vh 2vw;
justify-content: space-between;
overflow: scroll;
border-radius: 1%;
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
color: #936f63;
margin-top: 10px;
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
`