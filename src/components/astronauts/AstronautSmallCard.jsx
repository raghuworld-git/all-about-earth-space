import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdbreact'
import React from 'react';
import styles from './astrounautSmallCard.module.css';
import DefaultCrew from '../../assests/images/among-us.svg';

const AstronautSmallCard = ({ name, image, role }) => {

    const imageURL = image ? image : DefaultCrew;
    return (
        <MDBCard className='greyColor'>
            <MDBCardImage className={`${styles.cardImage}`} src={imageURL} alt={name} />
            <MDBCardBody>
                <MDBCardText className='text-white d-flex flex-column'>
                    <span>{name}</span>
                    <span className='text-muted'>{role}</span>
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}

export default AstronautSmallCard
