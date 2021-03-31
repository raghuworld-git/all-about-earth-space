import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import NextLaunch from "./nextLaunch";

const LandingPage = () => {
  return (
    <>
      <MDBContainer fluid className="mt-2">
        <MDBRow className='mb-2'>
          <MDBCol className='mb-3' xs="12" sm="12" md="7" xl="7">
            <NextLaunch />
          </MDBCol>
          <MDBCol xs="12" sm="12" md="5" xl="5">
            <NextLaunch />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default LandingPage;
