import React from 'react';
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import { getTodosByVisibilityFilter } from "../redux/selector";

import { VISIBILITY_FILTER } from '../constants';
import { setFilter } from '../redux/actions';


export const VisibilityFilter = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state);

  const todosRemaining = getTodosByVisibilityFilter(todos, VISIBILITY_FILTER.INCOMPLETED);
  const todosCompleted = getTodosByVisibilityFilter(todos, VISIBILITY_FILTER.COMPLETED);
  const allTodos = getTodosByVisibilityFilter(todos, VISIBILITY_FILTER.ALL);

  return (
    <Container centerContent>
      <Tabs variant='enclosed'>
        <TabList>
          <Tab onClick={() => dispatch(setFilter(VISIBILITY_FILTER.INCOMPLETED))}>
            Incompleted ({todosRemaining.length})  
          </Tab>
          <Tab onClick={() => dispatch(setFilter(VISIBILITY_FILTER.COMPLETED))}>
            Completed ({todosCompleted.length})  
          </Tab>
          <Tab onClick={() => dispatch(setFilter(VISIBILITY_FILTER.ALL))}>
            All ({allTodos.length})   
          </Tab>
        </TabList>
      </Tabs>
    </Container>
  )
}