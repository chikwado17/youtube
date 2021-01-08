import axios from 'axios';

const KEY = 'AIzaSyBZTWnaO_qle9Aot0frOwMsvKwU85BzRKA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key:KEY
    }
});   