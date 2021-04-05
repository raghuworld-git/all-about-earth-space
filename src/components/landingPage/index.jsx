import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdbreact";
import { useQuery } from "react-query";

import NextLaunch from "./nextLaunch";
// import UpcomingLaunches from "./upcomingLaunches";

import { getTopFiveUpcmomingLaunches } from "../../api/launchAPI";
import { getFormattedTop5UpcomingList } from "../../utils/launchUtil";
import Loader from "../status/Loader";

const LandingPage = () => {
  const { status, data } = useQuery(
    "getTopFiveUpcmomingLaunches",
    getTopFiveUpcmomingLaunches
  );

  if (status === "loading") {
    return <Loader />;
  }
  if (status === "error") {
    return "An Error occured.. please try later";
  }

  const { nextlaunch } = getFormattedTop5UpcomingList(data); //{ nextlaunch, upcomingLaunch }

  //console.log(fordate)

  return (
    <>
      <MDBContainer className="mt-2">
        <MDBRow>
          <MDBCol>
            <MDBTypography
              tag="h5"
              variant="h5-responsive"
              className="text-center"
            >
              Next Launch is
            </MDBTypography>
          </MDBCol>
        </MDBRow>

        <NextLaunch launchInfo={nextlaunch} />
      </MDBContainer>
    </>
  );
};

export default LandingPage;
