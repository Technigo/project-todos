import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const Container = styled.div`
display: flex; 
flex-direction: column;
padding: 1em;
margin-left: 2em;  
margin-right: 2em; `

const Total = styled.span`
display: inline; 
font-family: 'Reenie Beanie';
font-weight:bold; 
font-size: 2em;  

`
const Completed = styled.span`
display: inline; 
font-family: 'Reenie Beanie';
font-weight:bold; 
font-size: 2em;
margin:2em; 

`
const Span = styled.span`
padding-top: 2em;
padding-right: 2em; 
padding-bottom: 2em; 
text-align: center; 
display: inline-block; 
@media (max-width: 678px){
  display:flex;
  flex-direction: column; 
  padding: 0; 
  
}
 `

const HeadingContainer = styled.div`
display: flex; 
flex-direction: row;
justify-content: center; 
 
 `

const Header = styled.h1`
color: #f5ebeb;
background-color: #070f4e;
padding: 10px; 
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