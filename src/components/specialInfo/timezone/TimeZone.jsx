import React, { useState } from 'react'
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import TimezoneSelect from 'react-timezone-select';
import styles from './timezone.module.css';

const TimeZone = ({ toggleHandler, isModelOpen }) => {
    const [selectedTimezone, setSelectedTimezone] = useState('');

    return (
        <MDBContainer>
            <MDBModal isOpen={isModelOpen} toggle={() => toggleHandler()} >
                <MDBModalHeader className='greyColor' toggle={() => toggleHandler()}>Change time zone</MDBModalHeader>
                <MDBModalBody className='greyColor'>
                    <TimezoneSelect value={selectedTimezone}
                        onChange={setSelectedTimezone} className={`${styles.customColor}`} />
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
    )
}

export default TimeZone
