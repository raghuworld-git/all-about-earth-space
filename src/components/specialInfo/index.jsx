import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import CurrentBrowserTime from "./CurrentBrowserTime";

const SpecialInfo = () => {

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="greyColor">
          <MDBCol>
            <section className="float-right my-2">
              <CurrentBrowserTime />
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default SpecialInfo;
