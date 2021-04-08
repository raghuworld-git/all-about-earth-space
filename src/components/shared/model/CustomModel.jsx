import React, { useState } from 'react'
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact'

const CustomModel = ({ title, body }) => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const toggle = () => {
        setIsModelOpen(!isModelOpen)
    }
    return (
        <MDBContainer>
            <MDBBtn color="primary" onClick={() => toggle()}>MDBModal</MDBBtn>
            <MDBModal isOpen={isModelOpen} toggle={() => toggle()} centered>
                <MDBModalHeader toggle={() => toggle()}>{title}</MDBModalHeader>
                <MDBModalBody>
                    {body}
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
    )
}

export default CustomModel
