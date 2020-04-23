import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

/*const Summarysection = styled.div`
  margin: 8px 16px;
  width: 200px;
  height: 100px;
  background-color: #d0f2dc;
`
*/


export const TaskSummary = () => {
  const list = useSelector(store => store.tasks.list);

  const numDone = list.items.filter(item => item.complete).length;

  return (
    <section className="taskSummary">
      <h2>
        {numDone}/{list.items.length} tasks done
      </h2>
    </section>
  )
}
