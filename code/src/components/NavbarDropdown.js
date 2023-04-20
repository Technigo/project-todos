import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';

export const NavbarDropdown = () => {
  const options = useSelector((store) => store.tasks.projects);
  const allTasks = useSelector((store) => store.tasks.tasks);
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState('all projects');

  const filterProject = (option) => {
    console.log('selected oprtion', selectedOption)
    setSelectedOption(option.value);
    dispatch(tasks.actions.filterProject({ value: option.value }))
    console.log(allTasks.filter((item) => item.completed === false && item.value === option.value))
    console.log(option)
  }
  return (
    <MDBDropdown>
      <MDBDropdownToggle style={{ color: 'rgb(71 69 69)', fontSize: '0.8em' }} tag="a" className="nav-link" role="button">
        {selectedOption.toUpperCase()}
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        {options.map((option) => {
          return (
            <MDBDropdownItem
              onClick={() => filterProject(option)}
              key={option.value}
              link>{option.value}
            </MDBDropdownItem>
          )
        })}
      </MDBDropdownMenu>
    </MDBDropdown>
  )
}