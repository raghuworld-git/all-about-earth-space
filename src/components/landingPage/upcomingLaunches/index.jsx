import React from "react";
import {
  MDBListGroupItem,
  MDBRow,
} from "mdbreact";


import defaultImage from "../../../assests/images/stars.jpg";
import SmallLaunchCard from "../../shared/smallaunchCard/SmallLaunchCard";

const UpcomingLaunches = ({ upcomingLaunchs }) => {


  const renderLaunches =
    upcomingLaunchs.length > 0 ? (
      upcomingLaunchs.map(
        ({
          id,
          slug,
          name,
          image,
          fromattedNet,
          shortStatusColor,
          shortStatus,
          agency
        }) => {

          const imgUrl = image === null ? defaultImage : image;
          return (
            <SmallLaunchCard imgUrl={imgUrl} key={id} slug={slug} name={name} shortStatus={shortStatus} shortStatusColor={shortStatusColor} fromattedNet={fromattedNet} agency={agency} overlayDark />
          );
        }
      )
    ) : (
      <MDBListGroupItem
        hover
        className={`headerDarkColor`}
      >
        <div className="text-center">No upcoming launches. Stay tuned.</div>
      </MDBListGroupItem>
    );

  return (
    <>
      <MDBRow>{renderLaunches}</MDBRow>

      {/* <MDBListGroup className={styles.upcomingGroup}>

            {renderLaunches}

            <MDBListGroupItem className={`headerDarkColor ${styles.upcomingItem} text-center`} hover>
                <Link to='/launches/upcoming'>
                    <p className="mb-1">For more upcoming launches &nbsp; <MDBIcon icon="arrow-right" /></p>
                </Link>
            </MDBListGroupItem>
        </MDBListGroup> */}
    </>
  );
};

export default UpcomingLaunches;
