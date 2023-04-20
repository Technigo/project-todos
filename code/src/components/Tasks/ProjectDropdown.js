import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';
import { tasks } from 'reducers/tasks';

export const ProjectDropdown = ({ taskId, optionValue }) => {
  const options = useSelector((store) => store.tasks.projects);
  // const tasks = useSelector((store) => store.tasks.tasks);
  const [selectedValue, setSelectedValue] = useState('assign a project')
  const dispatch = useDispatch()

  const changeProject = (e) => {
    console.log(optionValue, selectedValue, taskId)
    setSelectedValue(e.target.textContent)
    dispatch(tasks.actions.changeProject({ id: taskId, value: e.target.textContent }))
    dispatch()
  }
  return (
    <MDBDropdown>
      <MDBDropdownToggle style={{ color: 'rgb(71 69 69)', fontSize: '0.5em' }} tag="a" className="nav-link" role="button">
        {optionValue === 'all projects' ? 'assign a project' : optionValue}
      </MDBDropdownToggle>
      <MDBDropdownMenu
        value={selectedValue}
        onClick={(e) => changeProject(e)}>
        {options.map((option) => {
          return (
            <MDBDropdownItem
              key={option.value}
              value={option.value}
              link>{option.value}
            </MDBDropdownItem>
          )
        })}
      </MDBDropdownMenu>
    </MDBDropdown>
  )
}