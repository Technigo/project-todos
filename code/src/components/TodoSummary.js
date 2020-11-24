import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
`
const Styledh2 = styled.h2`
  font-size: 16px;
  text-align: right;
  width: 80%;
  margin: auto;
  font-weight: 300;
`

export const TodoSummary = () => {
  // Get list info from the store, for this list
  const list = useSelector((store) => store.todos.list);

  // Count the number of items that are done using filter
  const numDone = list.items.filter(item => item.done).length;

  return (
    <Section className='todo-summary'>
      <Styledh2>
        {numDone}/{list.items.length} done
      </Styledh2>
    </Section>
  );
};
