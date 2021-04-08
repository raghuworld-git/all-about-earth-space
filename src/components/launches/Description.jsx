import React from "react";
import ReadLessMore from '../shared/readlessmore/ReadLessMore';
import { MDBCard, MDBCardBody, MDBTypography } from "mdbreact";

const Description = ({ text, title }) => {
  return (
    <MDBCard className="cardBorderRadius greyColor">
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
        <p className="text-center">{text ? <ReadLessMore textVisibleSize='250' text={text} /> : 'Data not available'}</p>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Description;
