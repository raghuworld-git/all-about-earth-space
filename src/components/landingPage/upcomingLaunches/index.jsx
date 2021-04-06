import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBListGroupItem,
  MDBRow,
} from "mdbreact";

import styles from "./index.module.css";
import { Link } from "react-router-dom";
import defaultImage from "../../../assests/images/stars.jpg";

const UpcomingLaunches = ({ upcomingLaunchs }) => {
  // const renderLaunches = upcomingLaunchs.length > 0 ? upcomingLaunchs.map(({ id, slug, name, fromattedNet, shortStatusColor, shortStatus }) => {
  //     return <MDBListGroupItem key={id} hover className={`headerDarkColor ${styles.upcomingItem}`}>
  //         <Link to={`/launch/${slug}`}>
  //             <div className="d-flex w-100 justify-content-between">
  //                 <h5 className="mb-1">{name}</h5>
  //                 <b><span style={{ color: `${shortStatusColor}` }}>{shortStatus}</span></b>
  //             </div>
  //             <p className="mb-1">{fromattedNet}</p>
  //         </Link>
  //     </MDBListGroupItem>
  // }) : <MDBListGroupItem hover className={`headerDarkColor ${styles.upcomingItem}`}>
  //     <div className="text-center">
  //         No upcoming launches. Stay tuned.
  //     </div>
  // </MDBListGroupItem >;

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
            <MDBCol key={id} sm="6" xs="12" md="6">
              <Link to={`/launch/${slug}`}>
                <MDBCard
                  className={`greyColor my-1`}
                  border="grey"
                  style={{
                    backgroundImage: `url('${imgUrl}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <MDBCardBody
                    className={`d-flex flex-column rgba-black-strong ${styles.upcomingCardBody}`}
                  >
                    <span className="d-inline-block text-truncate" title={name}>
                      {name}
                    </span>
                    <span style={{ color: `${shortStatusColor}` }}>
                      {shortStatus}
                    </span>
                    {fromattedNet}
                    <small className='mt-1'>
                      {agency}
                    </small>
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </MDBCol>
          );
        }
      )
    ) : (
      <MDBListGroupItem
        hover
        className={`headerDarkColor ${styles.upcomingItem}`}
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
