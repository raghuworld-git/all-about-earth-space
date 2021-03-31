import React from "react";
import { MDBBadge, MDBBox, MDBMask, MDBTypography, MDBView } from "mdbreact";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";

const Index = () => {
  const history = useHistory();

  return (
    <MDBView
      rounded
      className={styles.pointer}
      onClick={() => history.push(`/launch/`)}
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
        <MDBTypography tag="h6" variant="h6-responsive">
          <MDBBadge color="info">To Be Determined (TBD)</MDBBadge>         
        </MDBTypography>

        <MDBTypography tag="h3" variant="h3-responsive">
          Soyuz 2.1a | Bars-M No. 3
        </MDBTypography>
        <MDBTypography tag="h1" variant="h1-responsive">
          T- 00 d : 00 h : 00 m : 00 s
        </MDBTypography>
        <MDBBox tag="p" className="h6">
          {" "}
          Launch time : Spacex
        </MDBBox>
        <MDBBox tag="p" className="h6">
          {" "}
          Agency : Spacex
        </MDBBox>
      </MDBMask>
    </MDBView>
  );
};

export default Index;
