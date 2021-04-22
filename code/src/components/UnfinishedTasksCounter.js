import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UnfinishedTasksCounter = () => {
const items = useSelector((store) => store.tasks.items);
console.log(items)


const uncompleteTasks = items.filter(item => item.isComplete===false).length;
  return (
    <div>
      <p>{uncompleteTasks} unfinished tasks</p>
    </div> 
  )
}
export default UnfinishedTasksCounter;