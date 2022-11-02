import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const Container = styled.div`
display: flex; 
flex-direction: column;
margin-bottom: 15px;
grid-column: 2 / 3; 
grid-row: 1 / 2;
/* border: dashed 3px black; */
padding: 2em;   `

const Total = styled.span`
display: inline; 
padding-left: 2em;  

`
const Completed = styled.span`
display: inline; 
padding: 2em; 
`
const Span = styled.span`
padding-top: 2em;
padding-right: 2em; 
padding-bottom: 2em; 
text-align: center; 
display: inline-block;  `

const HeadingContainer = styled.div`
display: flex; 
flex-direction: row;
justify-content: center;  
 `

const Summary = () => {
  const counter = useSelector((store) => store.todos.items);
  const CompletedTodo = counter.filter((item) => item.completed).length;

  return (
    <Container>
      <HeadingContainer>
        <h1>PROGRESS</h1>
      </HeadingContainer>
      <Span>
        <Completed>{CompletedTodo} Completed </Completed>
        <Total>{counter.length} Total todos </Total>
      </Span>
    </Container>
  )
}

export default Summary