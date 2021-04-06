import React from "react";
import {
  MDBCol,
  MDBRow,
} from "mdbreact";

import DefaultImage from "../../../assests/images/default.jpg";

import LaunchImageCard from "./LaunchImageCard";
import LaunchBasicInfoCard from "./LaunchBasicInfoCard";

const Index = ({ launchInfo }) => {
  // const history = useHistory();

  const {
    name,
    image,
    agency,
    location,
    fromattedNet,
    originalNet,
    statusFull,
    statusFullColor,
    slug
  } = launchInfo[0];

  const finalImage = image ? image : DefaultImage;

  return (
    <>
      <MDBRow>
        <MDBCol xs="12" sm="12" md="8" xl="8">
          <LaunchImageCard name={name} finalImage={finalImage} />
        </MDBCol>
        <MDBCol xs="12" sm="12" md="4" xl="4">
          <LaunchBasicInfoCard name={name} originalNet={originalNet} fromattedNet={fromattedNet} statusFull={statusFull} statusFullColor={statusFullColor} location={location} agency={agency} slug={slug} showLink />
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Index;
