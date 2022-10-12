import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'a6157937fcmsh27302894111a0c2p1503adjsn49557816bd02',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

/**
 *a6157937fcmsh27302894111a0c2p1503adjsn49557816bd02 
 * 
 * 'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'

 */
  export const fetchFromAPI= async(url)=>{
   const { data } =  await axios.get(`${BASE_URL}/${url}`, options);

   return data;
  }