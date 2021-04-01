import React from "react";
import { MDBBadge, MDBBox, MDBIcon, MDBMask, MDBTypography, MDBView } from "mdbreact";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";
import DefaultImage from '../../../assests/images/default.jpg'

import LaunchCounter from '../../launchCounter';

const Index = ({ launchInfo }) => {
  const history = useHistory();


  const { name, image, agency, location, fromattedNet, originalNet, slug, statusFull, statusFullColor } = launchInfo[0];

  const finalImage = image ? image : DefaultImage;
  return (
    <MDBView
      rounded
      className={styles.pointer}
      onClick={() => history.push(`/launch/${slug}`)}
    >
      <img
        src={finalImage}
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
        <MDBBox tag="p" className="h6" mt='2'>
          <MDBIcon icon="map-marker-alt" /> &nbsp; {location}
        </MDBBox>
        <MDBBox tag="p" className="h6" mt='2'>
          Agency : {agency}
        </MDBBox>

      </MDBMask>
    </MDBView>
  );
};

export default Index;
