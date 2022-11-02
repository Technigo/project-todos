import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const Container = styled.div`
display: flex; 
flex-direction: column;
margin-bottom: 15px;
padding: 2em;  
background-color: #feb062`

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

const Header = styled.h1`
color: #575151;
`

const Summary = () => {
  const counter = useSelector((store) => store.todos.items);
  const CompletedTodo = counter.filter((item) => item.completed).length;

  return (
    <Container>
      <HeadingContainer>
        <Header>PROGRESS</Header>
      </HeadingContainer>
      <Span>
        <Completed>{CompletedTodo} Completed </Completed>
        <Total>{counter.length} Total todos </Total>
      </Span>
    </Container>
  )
}

export default Summary