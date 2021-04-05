import axios from 'axios';

import { baseSpacedevApiURL } from '../utils/apiUtil';
// import { getCurrentDateTimeForFilterInUTCFormat } from '../utils/dateTimeUtil';

const upcomingLaunchAPI = axios.create({ baseURL: `${baseSpacedevApiURL}/launch/upcoming` })
const launchAPI = axios.create({ baseURL: `${baseSpacedevApiURL}/launch/` })
const previousLaunchAPI = axios.create({ baseURL: `${baseSpacedevApiURL}/launch/previous` })

export const getnextLaunch = async () => {
    try {
        // const res = await launchAPI.get(`/?limit=1&net__gte=${getCurrentDateTimeForFilterInUTCFormat()}`);
        const res = await upcomingLaunchAPI.get(`/?limit=1`);
        return res.data?.results?.[0]
    }
    catch (error) {
        throw error;
    }
}

export const getTopFiveUpcmomingLaunches = async () => {
    try {
        const resp = await upcomingLaunchAPI.get(`/?limit=4`);
        return resp.data?.results;
    }
    catch (error) {
        throw error;
    }
}

export const getLaunchBySlug = async (slug) => {
    try {
        const res = await launchAPI.get(`/?slug=${slug}&mode=detailed`);
        return res.data.results
    }
    catch (error) {
        throw error;
    }
}

export const getAllUpcomingLaunches = async (isCrewedLaunch) => {
    let isCrewedFilter = isCrewedLaunch ? '&is_crewed=true' : ''
    try {
        const res = await upcomingLaunchAPI.get(`/?limit=9${isCrewedFilter}`);
        return res.data.results
    }
    catch (error) {
        throw error;
    }
}

export const getAllPreviousLaunches = async (isCrewedLaunch) => {
    let isCrewedFilter = isCrewedLaunch ? '&is_crewed=true' : ''
    try {
        const res = await previousLaunchAPI.get(`/?limit=9${isCrewedFilter}`);
        return res.data.results
    }
    catch (error) {
        throw error;
    }
}

