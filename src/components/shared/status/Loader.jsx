import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'

const Loader = () => {
    return (
        <MDBContainer className='mt-5'>
            <MDBRow>
                <MDBCol size='12' className='text-center'>
                    <div className="spinner-border" role="status" >
                        <span className="sr-only">Loading...</span>
                    </div >
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Loader
