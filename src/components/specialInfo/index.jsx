import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import CurrentBrowserTime from "./CurrentBrowserTime";

const SpecialInfo = () => {

  return (
    <>
      <MDBContainer fluid>
        <MDBRow style={{backgroundColor:'#313131'}}>
          <MDBCol>
            <section className="float-right my-1">
              <CurrentBrowserTime />
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default SpecialInfo;
