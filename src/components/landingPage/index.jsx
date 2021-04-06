import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdbreact";
import { useQuery } from "react-query";

import NextLaunch from "./nextLaunch";
import UpcomingLaunches from "./upcomingLaunches";

import { getTopFiveUpcmomingLaunches } from "../../api/launchAPI";
import { getFormattedTop5UpcomingList } from "../../utils/launchUtil";
import Loader from "../status/Loader";
import TitleComponent from '../title/TitleComponent';

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

  const { nextlaunch, upcomingLaunch } = getFormattedTop5UpcomingList(data); //{ nextlaunch, upcomingLaunch }

  //console.log(fordate)

  return (
    <>
      <TitleComponent title='Home' />
      <MDBContainer className="mt-3">
        <MDBRow>
          <MDBCol>
            <MDBTypography
              tag="h5"
              variant="h5-responsive"
            >
              Next Launch is
            </MDBTypography>

          </MDBCol>
        </MDBRow>

        <NextLaunch launchInfo={nextlaunch} />

        <MDBRow className='mt-3'>
          <MDBCol xs="12" sm="12" md="12" xl="12">
            <MDBTypography
              tag="h5"
              variant="h5-responsive"
            >
              Upcoming Launches
            </MDBTypography>

            <UpcomingLaunches upcomingLaunchs={upcomingLaunch} />
          </MDBCol>
          {/* <MDBCol xs="12" sm="12" md="4" xl="4"></MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default LandingPage;
