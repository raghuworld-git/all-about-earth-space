import React from 'react'
import { MDBBadge, MDBCard, MDBCardBody, MDBIcon, MDBTypography } from 'mdbreact'
import { Link } from 'react-router-dom'
import LaunchCounter from '../../launchCounter'
import styles from "./index.module.css";

const LaunchBasicInfoCard = ({ name, originalNet, fromattedNet, statusFullColor, statusFull, location, agency, slug, showLink = false }) => {
    return (
        <MDBCard
            className={`${styles.cardBorderRadius} ${styles.infoCard} greyColor`}
            border="grey"
        >
            <MDBCardBody
                className={`d-flex flex-column align-items-center justify-content-center ${styles.cardBody}`}
            >
                <p className="text-center">{name}</p>
                <MDBTypography tag='h4' variant="h4-responsive">
                    <LaunchCounter launchDate={originalNet} />
                </MDBTypography>

                <p>
                    <MDBIcon icon="calendar-day" /> &nbsp;
                {fromattedNet}
                </p>
                <p>
                    <MDBBadge color={statusFullColor}>{statusFull}</MDBBadge>
                </p>
                <p className="text-center">
                    <MDBIcon icon="map-marker-alt" /> &nbsp; {location}
                </p>
                <p className="text-center">Agency : {agency}</p>
                {showLink && <Link to={`/launch/${slug}`} className='btn btn-white btn-sm btn-outline-white'>View details</Link>}
            </MDBCardBody>
        </MDBCard>
    )
}

export default LaunchBasicInfoCard
