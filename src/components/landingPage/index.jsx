import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdbreact";
import { useQuery } from "react-query";

import NextLaunch from "./nextLaunch";
import UpcomingLaunches from "./upcomingLaunches";

import { getTopFiveUpcmomingLaunches } from '../../api/launchAPI';
import { getFormattedTop5UpcomingList } from '../../utils/launchUtil';
import Loader from "../status/Loader";


const LandingPage = () => {

  const { status, data } = useQuery('getTopFiveUpcmomingLaunches', getTopFiveUpcmomingLaunches);

  if (status === 'loading') {
    return <Loader />
  }
  if (status === 'error') {
    return 'An Error occured.. please try later'
  }

  const { nextlaunch, upcomingLaunch } = getFormattedTop5UpcomingList(data); //{ nextlaunch, upcomingLaunch }

  //console.log(fordate)

  return (
    <>
      <MDBContainer fluid className="mt-2">
        <MDBRow className='mb-2'>
          <MDBCol className='mb-3' xs="12" sm="12" md="7" xl="7">
            <MDBTypography tag="h4" variant="h4-responsive" className='text-center'>
              Next Launch is :
            </MDBTypography>
            <NextLaunch launchInfo={nextlaunch} />
          </MDBCol>
          <MDBCol xs="12" sm="12" md="5" xl="5">
            <MDBTypography tag="h4" variant="h4-responsive" className='text-center'>
              Upcoming Launches
            </MDBTypography>
            <UpcomingLaunches upcomingLaunchs={upcomingLaunch} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default LandingPage;
