import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
`
const P = styled.p`
  color: #F5F0D7;
`
export const TodoSummary = () => {

  const list = useSelector(store => store.todos.list);
  const numDone = list.items.filter(item => item.done).length;

  return (
    <Section>
      <P>{numDone}/{list.items.length} tasks complete</P>
    </Section>
  )
}