import React from 'react'

import { useSelector } from 'react-redux'

import styled from 'styled-components'


export const TaskSummery = () => {

  // Get list information for this task-list:
  const list = useSelector(store => store.tasks.list)

  // this variable contains the nr of items that are done:
  const numDone = list.items.filter(item => item.done).length




  return (
      <SummeryText>
        COMPLETED 
          <NumberDone>{numDone}</NumberDone>  
          <SummeryTextThin>OUT OF {list.items.length} THINGS TO DO</SummeryTextThin>
        {/* COMPLETED <NumberDone>{numDone}</NumberDone>/{list.items.length}   */}
      </SummeryText>
  )
/*       <section className="todo-summery">
        <h2>
          {numDone}/{list.items.length} are done 💚 
        </h2>
      </section>
  ) */
}




const SummeryText = styled.text`
  font-size: 14px;
  /* font-weight: 200; */
  font-weight: 600;
  color: #9e9ea7;
  margin: 0 0 0 16px;
`;
const SummeryTextThin = styled.text`
  font-size: 14px;
  /* font-weight: 200; */
  font-weight: 200;
  color: #9e9ea7;
  margin: 0 0 0 16px;
`;
const NumberDone = styled.div`
    background-color: #9e9ea7;
    color: white;
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    margin: 5px;
    padding: 3px 2px 2px 2px;

`;