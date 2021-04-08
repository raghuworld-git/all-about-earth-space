import React, { useState } from "react";
import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import CurrentBrowserTime from "./CurrentBrowserTime";
import TimeZone from "./timezone/TimeZone";

const SpecialInfo = () => {

  const [isModelOpen, setIsModelOpen] = useState(false);
  const toggle = () => {
    setIsModelOpen(!isModelOpen)
  }
  return (
    <>
      <MDBContainer fluid>
        <MDBRow style={{ backgroundColor: '#313131' }}>
          <MDBCol>
            <section className="float-right my-1" >
              <CurrentBrowserTime /> &nbsp;<MDBIcon icon="cog" title='Change TimeZone' onClick={toggle} style={{ cursor: 'pointer' }} />
            </section>

            <TimeZone isModelOpen={isModelOpen} toggleHandler={toggle} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default SpecialInfo;
