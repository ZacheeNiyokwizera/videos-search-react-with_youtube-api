import axios from 'axios';
const KEY = 'AIzaSyAXcLMbEIwfjThUQ_EZaF5n2YpeNhyFjiU'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})