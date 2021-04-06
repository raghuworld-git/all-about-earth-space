import React from 'react'
import { MDBCard, MDBCardImage } from 'mdbreact'
import styles from "./index.module.css";

const LaunchImageCard = ({ name, finalImage }) => {
    return (
        <MDBCard
            className='cardBorderRadius greyColor'
            border="grey"
        >
            <MDBCardImage
                waves={false}
                alt={name}
                className={`${styles.imgfluid} ${styles.cardBorderRadius}`}
                src={finalImage}
            />
        </MDBCard>
    )
}

export default LaunchImageCard
