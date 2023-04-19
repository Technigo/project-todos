import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import {
  MDBNavbarItem, MDBNavbarLink
} from 'mdb-react-ui-kit';

export const FilterTasks = () => {
  const allTasks = useSelector((store) => store.tasks.tasks);
  const ongoingTasks = allTasks.filter((item) => item.completed === false);
  const completedTasks = allTasks.filter((item) => item.completed === true);
  const dispatch = useDispatch();

  const filterOngoingTasks = () => {
    console.log(ongoingTasks)
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
        <MDBNavbarLink style={{ color: 'rgb(71 69 69)', fontSize: '0.7em' }} href="#" filtering onClick={filterAllTasks}>All tasks</MDBNavbarLink>
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