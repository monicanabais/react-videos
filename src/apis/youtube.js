import axios from 'axios';

const KEY = 'AIzaSyDHt_3Da4SiuYRMulZSATBhb0 - RVQ5B1Mg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});