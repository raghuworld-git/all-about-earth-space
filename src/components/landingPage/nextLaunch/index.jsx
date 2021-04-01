import React from "react";
import { MDBBadge, MDBBox, MDBIcon, MDBMask, MDBTypography, MDBView } from "mdbreact";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";

import LaunchCounter from '../../launchCounter';

const Index = ({ launchInfo }) => {
  const history = useHistory();


  const { name, agency, location, fromattedNet, originalNet, slug, statusFull, statusFullColor } = launchInfo[0];

  return (
    <MDBView
      rounded
      className={styles.pointer}
      onClick={() => history.push(`/launch/${slug}`)}
    >
      <img
        src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/soyuz_2.1a_image_20201013143850.jpg"
        className={styles.imgfluid}
        alt=""
      />
      <MDBMask
        className="d-flex flex-column align-items-center justify-content-center"
        overlay="black-slight"
      >
        <MDBTypography tag="h5" variant="h5-responsive">
          <MDBBadge color={statusFullColor}>{statusFull}</MDBBadge>
        </MDBTypography>

        <MDBTypography tag="h3" variant="h3-responsive">
          {name}
        </MDBTypography>
        <MDBTypography tag="h1" variant="h1-responsive">
          <LaunchCounter launchDate={originalNet} />
        </MDBTypography>
        <MDBBox tag="p" className="h6">
          <MDBIcon icon="calendar-day" /> &nbsp;
          {fromattedNet}
        </MDBBox>
        <MDBBox tag="p" className="h6">
          <MDBIcon icon="map-marker-alt" /> &nbsp; {location}
        </MDBBox>
        <MDBBox tag="p" className="h6">
          Agency : {agency}
        </MDBBox>

      </MDBMask>
    </MDBView>
  );
};

export default Index;
