import React from 'react'
import { MDBBadge, MDBCard, MDBCardBody, MDBIcon, MDBTypography } from 'mdbreact'
import { Link } from 'react-router-dom'
import LaunchCounter from '../../launchCounter'
import styles from "./index.module.css";
import URL from '../../shared/url/URL';

const LaunchBasicInfoCard = ({ name, originalNet, fromattedNet, statusFullColor, statusFull, location, agency, slug, isManned, isDetail = false, media = [] }) => {

    return (
        <MDBCard
            className='cardBorderRadius greyColor'
            border="grey"
        >
            <MDBCardBody
                className={`d-flex flex-column align-items-center justify-content-center ${styles.cardBody}`}
            >
                {!isDetail && <p className="text-center">{name}</p>}
                <MDBTypography tag='h4' variant="h4-responsive">
                    <LaunchCounter launchDate={originalNet} />
                </MDBTypography>

                <p>
                    <MDBIcon icon="calendar-day" /> &nbsp;
                {fromattedNet}
                </p>
                {isDetail && <p><MDBBadge color='pink'>{isManned ? 'Manned Launch' : 'Un-manned Launch'}</MDBBadge></p>}
                <p>
                    <MDBBadge color={statusFullColor}>{statusFull}</MDBBadge>
                </p>
                <p className="text-center">
                    <MDBIcon icon="map-marker-alt" /> &nbsp; {location}
                </p>

                <p className="text-center">Agency : {agency}</p>


                {media.length > 0 ?
                    <span>
                        {media.map((item, index) => {
                            if (!item) return null;
                            return <><URL key={index} type={item.type} url={item.url} />&nbsp;</>
                        })}
                    </span> : null
                }

                {!isDetail && <Link to={`/launch/${slug}`} className='btn btn-white btn-sm btn-outline-white'>View details</Link>}


            </MDBCardBody>
        </MDBCard >
    )
}

export default LaunchBasicInfoCard
