import React from "react";
import { MDBBadge, MDBBox, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBIcon, MDBMask, MDBRow, MDBTypography, MDBView } from "mdbreact";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";
import DefaultImage from '../../../assests/images/default.jpg'

import LaunchCounter from '../../launchCounter';

const Index = ({ launchInfo }) => {
  const history = useHistory();


  const { name, image, agency, location, fromattedNet, originalNet, slug, statusFull, statusFullColor } = launchInfo[0];

  const finalImage = image ? image : DefaultImage;

  return (<>
    <MDBCard className={`${styles.cardBorderRadius} greyColor`}>
      <MDBRow className='no-gutters'>
        <MDBCol md='5' xl='5' sm='12' xs='12'>
          <MDBCardImage src={finalImage} className={styles.imgfluid} />
        </MDBCol>
        <MDBCol md='7' xl='7' sm='12' xs='12'>
          <MDBCardBody className='d-flex flex-column align-items-center justify-content-center'>
            <MDBTypography tag="h5" variant="h5-responsive">
              <MDBBadge color={statusFullColor}>{statusFull}</MDBBadge>
            </MDBTypography>
            <MDBTypography tag="h5" variant="h5-responsive" className='mt-2'>
              {name}
            </MDBTypography>
            <MDBTypography tag="h1" variant="h1-responsive" className='mt-2'>
              <LaunchCounter launchDate={originalNet} />
            </MDBTypography>
            <MDBBox tag="p" className="h5" mt='2'>
              <MDBIcon icon="calendar-day" /> &nbsp;
           {fromattedNet}
            </MDBBox>
            <MDBBox tag="p" className="h5" mt='2'>
              <MDBIcon icon="map-marker-alt" /> &nbsp; {location}
            </MDBBox>
            <MDBBox tag="p" className="h5" mt='2'>
              Agency : {agency}
            </MDBBox>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  </>);
  // return (
  //   <MDBView
  //     rounded
  //     className={styles.pointer}
  //     onClick={() => history.push(`/launch/${slug}`)}
  //   >
  //     <MDBRow>
  //       <MDBCol>
  //         <img
  //           src={finalImage}
  //           className={styles.imgfluid}
  //           alt=""
  //         />
  //         <MDBMask
  //           className="d-flex flex-column align-items-center justify-content-center"
  //           overlay="black-light"
  //         >
  //           <MDBTypography tag="h5" variant="h5-responsive">
  //             <MDBBadge color={statusFullColor}>{statusFull}</MDBBadge>
  //           </MDBTypography>

  //           <MDBTypography tag="h3" variant="h3-responsive">
  //             <span className={`d-inline-block text-truncate ${styles.truncateOnWidth}`} title={name}>
  //               {name}
  //             </span>
  //           </MDBTypography>
  //           <MDBTypography tag="h1" variant="h1-responsive">
  //             <LaunchCounter launchDate={originalNet} />
  //           </MDBTypography>
  //           <MDBBox tag="p" className="h6">
  //             <MDBIcon icon="calendar-day" /> &nbsp;
  //         {fromattedNet}
  //           </MDBBox>
  //           <MDBBox tag="p" className="h6" mt='2'>
  //             <MDBIcon icon="map-marker-alt" /> &nbsp; {location}
  //           </MDBBox>
  //           <MDBBox tag="p" className="h6" mt='2'>
  //             Agency : {agency}
  //           </MDBBox>

  //         </MDBMask>
  //       </MDBCol>
  //     </MDBRow>
  //   </MDBView>
  // );
};

export default Index;
