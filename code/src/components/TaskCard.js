import React from 'react';
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
  const {id, title,  isComplete, createdAt, onChangeAction} = props;

  return (
    <Container>
    <input 
      type="checkbox"
      id={id}
      checked={isComplete}
      onChange={onChangeAction}
    />
    <Title>{title}</Title>
    <button>🗑</button>
    <p>{createdAt}</p>
    </Container>
  )
}
export default TaskCard;
 