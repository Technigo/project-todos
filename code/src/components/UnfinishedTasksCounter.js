import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Text = styled.p`
font-family: 'Noto Sans KR', sans-serif;
@media (min-width: 768px){
  font-size: 22px;
}
`
const UnfinishedTasksCounter = () => {
const items = useSelector((store) => store.tasks.items);
console.log(items)

const uncompleteTasks = items.filter(item => item.isComplete===false).length;
  return (
    <div>
      <Text>{uncompleteTasks} left to do</Text>
    </div> 
  )
}
export default UnfinishedTasksCounter;
