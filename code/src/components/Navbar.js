import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  //   MDBNavbarBrand,
  //   MDBNavbarToggler,
  //   MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
//   MDBCollapse
} from 'mdb-react-ui-kit';

export const NavBar = () => {
//   const [showBasic, setShowBasic] = useState(true);

  return (
    // <div className="navbar navbar-expand-sm">
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        {/* <MDBNavbarBrand href="#">Brand</MDBNavbarBrand> */}
        {/* <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}>
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler> */}
        {/* <MDBCollapse navbar show={showBasic}> */}
        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">

          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Projects
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>

        </MDBNavbarNav>
        {/* </MDBCollapse> */}
      </MDBContainer>
    </MDBNavbar>
  );
}