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
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState('all projects');

  const filterProject = (option) => {
    setSelectedOption(option.value);
    dispatch(tasks.actions.filterProject({ value: option.value }))
  }
  return (
    <MDBDropdown>
      <MDBDropdownToggle style={{ color: 'rgb(71 69 69)', fontSize: '0.5em' }} tag="a" className="nav-link" role="button">
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