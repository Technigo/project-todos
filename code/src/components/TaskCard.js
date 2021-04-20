import React from 'react';
import DayJS from 'react-dayjs';
import styled from 'styled-components';

const Container = styled.div`
width: 250px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 2px solid blue;
margin: 10px;
`
const Title = styled.p`
width: 200px;
text-align: center;
`

const TaskCard = (props) => {
  const {id, title,  isComplete, createdAt, onChangeAction, onClickAction} = props;

  return (
    <Container>
    <input 
      type="checkbox"
      id={id}
      checked={isComplete}
      onChange={onChangeAction}
    />
    <Title>{title}</Title>
    <button onClick={onClickAction}>🗑</button>
    <DayJS element="span" format="YYYY-MM-DD H:mm">{createdAt}</DayJS>
    </Container>
  )
}
export default TaskCard;
 