import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem
} from 'mdb-react-ui-kit';
import { Dropdown } from 'components/Tasks/ProjectDropdown';
import { FilterTasks } from './Tasks/FilterTasks';

export const NavBar = () => {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarNav className="d-flex justify-content-center flex-row gap-2">
          <MDBNavbarItem>
            <Dropdown />
          </MDBNavbarItem>
          <FilterTasks />
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}