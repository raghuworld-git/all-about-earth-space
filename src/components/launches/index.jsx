import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdbreact";
import Loader from "../status/Loader";
import { getLaunchBySlug } from "../../api/launchAPI";
import { getFormattedLaunchDetails } from "../../utils/launchUtil";
import DefaultImage from "../../assests/images/default.jpg";
import LaunchImageCard from "../landingPage/nextLaunch/LaunchImageCard";
import LaunchBasicInfoCard from "../landingPage/nextLaunch/LaunchBasicInfoCard";
import TitleComponent from "../title/TitleComponent";
import Description from "./Description";
import AstronautSmallCard from "../astronauts/AstronautSmallCard";

const Launch = () => {
  const { slug } = useParams();

  const { status, data } = useQuery(["getLaunchBySlug", slug], () =>
    getLaunchBySlug(slug)
  );
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "error") {
    return "An Error occured.. please try later";
  }
  const { launchInfo } = getFormattedLaunchDetails(data);

  const {
    name,
    image,
    agency,
    location,
    fromattedNet,
    originalNet,
    statusFull,
    statusFullColor,
    launchCrew,
    rocketConfig,
  } = launchInfo[0];

  const finalImage = image ? image : DefaultImage;
  const { description: rocketDescription } = rocketConfig;
  console.log(launchCrew)

  return (
    <>
      <TitleComponent title={name} />
      <MDBContainer className="mt-3">
        <MDBRow>
          <MDBCol>
            <MDBTypography tag="h5" variant="h5-responsive">
              {name}
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xs="12" sm="12" md="8" xl="8">
            <LaunchImageCard name={name} finalImage={finalImage} />
          </MDBCol>
          <MDBCol xs="12" sm="12" md="4" xl="4">
            <LaunchBasicInfoCard
              name={name}
              originalNet={originalNet}
              fromattedNet={fromattedNet}
              statusFull={statusFull}
              statusFullColor={statusFullColor}
              location={location}
              agency={agency}
              slug={slug}
              isManned={launchCrew ? true : false}
              isDetail
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className='mt-3'>
          <MDBCol md="8" sm="12" xs="12" xl="8">
            <Description text={rocketDescription} title='Rocket description' />
          </MDBCol>
        </MDBRow>
        {launchCrew &&
          <MDBRow className='mt-3'>
            <MDBCol size='12'>
              <MDBTypography
                tag="h5"
                variant="h5-responsive"
              >
                Crew members
            </MDBTypography>
              <MDBRow>
                {launchCrew.map(({ astronaut, role }) => {
                  const { id, name, profile_image } = astronaut;
                  return <MDBCol md='3' sm='12' xs='12' xl='3' className='mt-2' key={id}>
                    <AstronautSmallCard name={name} image={profile_image} role={role?.role} />
                  </MDBCol>
                })}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        }
      </MDBContainer>
    </>
  );
};

export default Launch;
