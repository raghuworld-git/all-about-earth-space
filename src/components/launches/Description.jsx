import React from "react";
import { MDBCard, MDBCardBody, MDBTypography } from "mdbreact";

const Description = ({ text, title }) => {
  return (
    <MDBCard className="cardBorderRadius greyColor" border="grey">
      <MDBCardBody>
        {title ? (
          <MDBTypography
            tag="h5"
            className="text-center"
            variant="h5-responsive"
          >
            {title}
          </MDBTypography>
        ) : null}
        <p className="text-center">{text ? text : 'Data not available'}</p>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Description;
