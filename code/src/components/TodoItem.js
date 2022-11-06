import React from 'react'
import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCheck } from 'reducers/todoSlice';

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch()
  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  const TimeStampHoursMinutes = () => `${String(new Date(id).getHours()).padStart(2, '0')}:${String(new Date(id).getMinutes()).padStart(2, '0')}`
  const TimeStampDate = () => `${`${new Date(id).toLocaleDateString('en-us', { day: 'numeric' })} ${new Date(id).toLocaleDateString('en-us', { month: 'short' })}`}`

  return (
    <TodoItemList>
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }} />
      <TodoText done={done}>{name}</TodoText>
      <DataText done={done}>
        {TimeStampHoursMinutes(id)}  {TimeStampDate(id)}
      </DataText>
    </TodoItemList>
  )
}

export default TodoItem;

const TodoItemList = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: white;
  margin: 6px 4px;
  height: 40px;
  border-radius: 12px;
`;

const TodoText = styled.p`
  flex: 1;
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;

const DataText = styled.div`
 display: flex;
 justify-content: flex-end;
 color: rgba(0, 0, 0, 0.55);
 margin-right: 15px;
 text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;