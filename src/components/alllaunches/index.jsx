import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Filters from './filters/Filters';
import { getAllUpcomingLaunches, getAllPreviousLaunches } from '../../api/launchAPI'
import { getFormattedLaunchDetails } from '../../utils/launchUtil'
import Loader from '../shared/status/Loader';
import defaultImage from '../../assests/images/stars.jpg';
import SmallLaunchCard from '../shared/smallaunchCard/SmallLaunchCard';

const AllLaunches = () => {

    const { type } = useParams();

    const method = type === 'upcoming' ? getAllUpcomingLaunches : getAllPreviousLaunches;
    const methodCache = type === 'upcoming' ? 'getAllUpcomingLaunches' : 'getAllPreviousLaunches';
    let renderData = null
    const { status, data } = useQuery(
        methodCache,
        () => method()
    );

    if (status === "loading") {
        renderData = <Loader />;
    }
    if (status === "error") {
        renderData = "An Error occured.. please try later";
    }
    if (status === 'success') {

        const { launchInfo } = getFormattedLaunchDetails(data)
        renderData = launchInfo.map(
            ({
                id,
                slug,
                name,
                image,
                fromattedNet,
                shortStatusColor,
                shortStatus,
                agency
            }) => {
                const imgUrl = image === null ? defaultImage : image;
                return (
                    <SmallLaunchCard imgUrl={imgUrl} key={id} slug={slug} name={name} shortStatus={shortStatus} shortStatusColor={shortStatusColor} fromattedNet={fromattedNet} agency={agency} />
                );
            }
        )
    }

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
                <MDBRow className='mt-3'>
                    {renderData}
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default AllLaunches
