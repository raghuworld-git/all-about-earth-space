import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact'
import Loader from '../status/Loader';
import { getLaunchBySlug } from '../../api/launchAPI';
import { getFormattedTop5UpcomingList } from '../../utils/launchUtil';
import DefaultImage from "../../assests/images/default.jpg";
import LaunchImageCard from '../landingPage/nextLaunch/LaunchImageCard';
import LaunchBasicInfoCard from '../landingPage/nextLaunch/LaunchBasicInfoCard';
import TitleComponent from '../title/TitleComponent';

const Launch = () => {
  const { slug } = useParams();

  const { status, data } = useQuery(["getLaunchBySlug", slug], () => getLaunchBySlug(slug));
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "error") {
    return "An Error occured.. please try later";
  }
  const { nextlaunch } = getFormattedTop5UpcomingList(data);

  const {
    name,
    image,
    agency,
    location,
    fromattedNet,
    originalNet,
    statusFull,
    statusFullColor
  } = nextlaunch[0];

  const finalImage = image ? image : DefaultImage;
  return (
    <>
      <TitleComponent title={name} />
      <MDBContainer className="mt-3">
        <MDBRow>
          <MDBCol>
            <MDBTypography
              tag="h5"
              variant="h5-responsive"
            >
              {name}
            </MDBTypography>

          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xs="12" sm="12" md="8" xl="8">
            <LaunchImageCard name={name} finalImage={finalImage} />
          </MDBCol>
          <MDBCol xs="12" sm="12" md="4" xl="4">
            <LaunchBasicInfoCard name={name} originalNet={originalNet} fromattedNet={fromattedNet} statusFull={statusFull} statusFullColor={statusFullColor} location={location} agency={agency} slug={slug} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Launch
