import axios from 'axios';

axios.defaults.baseURL = 'https://api.covid19india.org';

export const getResponse = (url) => {
    return axios.get(url).then(response => response.data).catch(e => e)
}