import axios from 'axios';

import { baseSpacedevApiURL } from '../utils/apiUtil';

const agencyAPI = axios.create({ baseURL: `${baseSpacedevApiURL}/agencies` })

export const getAgencyById = async (id) => {
    try {
        const res = await agencyAPI.get(`/${id}/`);
        return res.data
    }
    catch (error) {
        throw error;
    }
}
