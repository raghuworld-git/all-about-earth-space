import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact'
import { useParams } from 'react-router-dom';
import Filters from './filters/Filters'

const AllLaunches = () => {

    const { type } = useParams();
    return (
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol className='text-center mt-2'>
                        <MDBTypography tag="h4" variant="h4-responsive">
                            {type === 'upcoming' ? 'Upcoming Launches' : 'Previous Launches'}
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className='text-center'>
                        <Filters />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default AllLaunches
