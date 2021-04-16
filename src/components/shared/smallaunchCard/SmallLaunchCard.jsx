import { MDBCard, MDBCardBody, MDBCol } from 'mdbreact'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./index.module.css";

const SmallLaunchCard = ({ slug, imgUrl, name, shortStatusColor, shortStatus, fromattedNet, agency, overlayDark = false }) => {
    return (
        <MDBCol sm="4" xs="12" md="4">
            <Link to={`/launch/${slug}`}>
                <MDBCard
                    className={`greyColor my-1`}
                    style={{
                        backgroundImage: `url('${imgUrl}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <MDBCardBody
                        className={`d-flex flex-column rgba-black-${overlayDark ? 'strong' : 'light'} ${styles.upcomingCardBody}`}
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
    )
}

export default SmallLaunchCard
