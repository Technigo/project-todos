import React from 'react'
import { useSelector } from 'react-redux'
import { Container, HeadingContainer, Header, Span, Completed, Total } from 'components/Summary/Summary.style';

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