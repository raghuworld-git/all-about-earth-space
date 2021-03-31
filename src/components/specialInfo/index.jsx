import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import CurrentBrowserTime from "./CurrentBrowserTime";

const SpecialInfo = () => {

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="headerDarkColor">
          <MDBCol>
            <section className="float-right my-2">
              <MDBIcon far icon="clock" /> <CurrentBrowserTime />
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default SpecialInfo;
