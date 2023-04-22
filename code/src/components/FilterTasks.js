import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import {
  MDBNavbarItem, MDBNavbarLink
} from 'mdb-react-ui-kit';

export const FilterTasks = () => {
  const allTasks = useSelector((store) => store.tasks.tasks);
  const projectToFilterOn = useSelector((store) => store.tasks.selectedProject)
  const filterOn = useSelector((store) => store.tasks.filterOn);
  const filteredAllTasks = allTasks.filter((item) => {
    if (projectToFilterOn === 'all projects' && filterOn === 'all') {
      return allTasks
    } else {
      return item.value === projectToFilterOn
    }
  });

  const ongoingTasks = allTasks.filter((item) => {
    if (projectToFilterOn === 'all projects') {
      return item.completed === false
    } else {
      return item.completed === false && item.value === projectToFilterOn
    }
  });
  const completedTasks = allTasks.filter((item) => {
    if (projectToFilterOn === 'all projects') {
      return item.completed === true
    } else {
      return item.completed === true && item.value === projectToFilterOn
    }
  });

  const dispatch = useDispatch();

  const filterOngoingTasks = () => {
    dispatch(tasks.actions.filterOn({ filter: 'ongoing' }))
  }

  const filterCompletedTasks = () => {
    dispatch(tasks.actions.filterOn({ filter: 'completed' }))
  }

  const filterAllTasks = () => {
    dispatch(tasks.actions.filterOn({ filter: 'all' }))
  }

  const completeAllTasks = () => {
    dispatch(tasks.actions.checkItem({ id: null }))
  }

  return (
    <>
      <MDBNavbarItem>
        <MDBNavbarLink style={{ color: 'rgb(71 69 69)', fontSize: '0.7em' }} href="#" filtering onClick={filterAllTasks}>All ({filteredAllTasks.length})</MDBNavbarLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBNavbarLink style={{ color: 'rgb(71 69 69)', fontSize: '0.7em' }} href="#" filtering onClick={filterOngoingTasks}>Ongoing ({ongoingTasks.length})</MDBNavbarLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBNavbarLink style={{ color: 'rgb(71 69 69)', fontSize: '0.7em' }} href="#" filtering onClick={filterCompletedTasks}>Done ({completedTasks.length})</MDBNavbarLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBNavbarLink style={{ color: 'rgb(71 69 69)', fontSize: '0.7em' }} href="#" filtering onClick={completeAllTasks}>Complete all</MDBNavbarLink>
      </MDBNavbarItem>
    </>
  )
}