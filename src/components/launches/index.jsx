import React from 'react';
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom';
import { MDBContainer } from 'mdbreact'
// import NextLaunch from '../landingPage/nextLaunch';
import Loader from '../status/Loader';
import {getLaunchBySlug} from '../../api/launchAPI';

const Launch = () => {
    const  {slug} = useParams();
    const { status, data } = useQuery(
        "getLaunchBySlug",
        ()=>getLaunchBySlug(slug)
      );
    
      if (status === "loading") {
        return <Loader />;
      }
      if (status === "error") {
        return "An Error occured.. please try later";
      }
console.log(data);
    return (
       <MDBContainer className="mt-2">
          {/* <NextLaunch/> */}
       </MDBContainer>
    )
}

export default Launch
