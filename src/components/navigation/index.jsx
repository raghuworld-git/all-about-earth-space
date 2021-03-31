import {
  MDBCollapse,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import React, { useState } from "react";

const HeaderNav = () => {
  const [collapse, setCollapse] = useState(false);
  const onClick = () => {
    setCollapse(!collapse);
  };


  return (
    <>
      <header>
        <MDBNavbar className='headerDarkColor' dark expand="md">
          <MDBNavbarBrand href="/">
            <strong>Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={onClick} />
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">Features</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">Pricing</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">Opinions</MDBNavLink>
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
