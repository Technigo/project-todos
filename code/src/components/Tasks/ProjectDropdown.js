import React from 'react';
import { useSelector } from 'react-redux';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';

export const Dropdown = () => {
  const options = useSelector((store) => store.tasks.projects);
  return (
    <MDBDropdown>
      <MDBDropdownToggle style={{ color: 'rgb(71 69 69)', fontSize: '0.8em' }} tag="a" className="nav-link" role="button">
                  Projects
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        {options.map((option) => {
          return (
            <MDBDropdownItem link>{option.label}</MDBDropdownItem>
          )
        })}
      </MDBDropdownMenu>
    </MDBDropdown>
  )
}