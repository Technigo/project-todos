import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem
} from 'mdb-react-ui-kit';
import { FilterTasks } from './FilterTasks';
import { NavbarDropdown } from './NavbarDropdown';

export const NavBar = () => {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarNav className="d-flex justify-content-center flex-row gap-2">
          <MDBNavbarItem>
            <NavbarDropdown />
          </MDBNavbarItem>
          <FilterTasks />
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}