import React from 'react';
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { VISIBILITY_FILTER } from '../constants';
import { setFilter } from '../redux/actions';


export const VisibilityFilter = () => {
  const dispatch = useDispatch();

  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          <Tab onClick={() => dispatch(setFilter(VISIBILITY_FILTER.INCOMPLETED))}>
            Incompleted
          </Tab>
          <Tab onClick={() => dispatch(setFilter(VISIBILITY_FILTER.COMPLETED))}>
            Completed
          </Tab>
          <Tab onClick={() => dispatch(setFilter(VISIBILITY_FILTER.ALL))}>
            All
          </Tab>
        </TabList>
      </Tabs>
    </Container>
  )
}