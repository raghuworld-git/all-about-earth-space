import {
  MDBCollapse,
  MDBDropdown,

  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const [collapse, setCollapse] = useState(false);
  const onClick = () => {
    setCollapse(!collapse);
  };


  return (
    <>
      <header>
        <MDBNavbar className='greyColor' dark expand="md">
          <MDBNavbarBrand href="/">
            <strong>AASE</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={onClick} />
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Launches</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <Link className="dropdown-item" to="/launches/upcoming">Upcoming</Link>
                    <Link className="dropdown-item" to="/launches/previous">Previous</Link>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/astronauts/">Astronauts</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#">
                  <MDBIcon fab icon="facebook-f" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">
                  <MDBIcon fab icon="instagram" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    </>
  );
};

export default HeaderNav;
