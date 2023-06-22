import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
 
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '917cc99e34msh9ded5bd7cccbd54p1c33a9jsnb6fd482fc801 ',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`,
  options);
  console.log(data);
  return data;
};