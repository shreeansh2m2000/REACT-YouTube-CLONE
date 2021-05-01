import axios from 'axios'
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyBzFtSZSY08i4jEg_AyqmL_A3ManR5BGQ0',
   },
})

export default request
