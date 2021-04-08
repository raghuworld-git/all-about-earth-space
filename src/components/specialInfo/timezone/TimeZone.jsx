import React from 'react'
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact'

const TimeZone = ({ toggleHandler, isModelOpen }) => {

    return (
        <MDBContainer>
            <MDBModal isOpen={isModelOpen} toggle={() => toggleHandler()} >
                <MDBModalHeader className='greyColor' toggle={() => toggleHandler()}>Change time zone</MDBModalHeader>
                <MDBModalBody className='greyColor'>
                    <select className="browser-default custom-select">
                        <option>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
    )
}

export default TimeZone
