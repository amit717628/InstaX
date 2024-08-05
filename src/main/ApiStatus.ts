import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../../config';




interface ApiStatus {
    status:boolean;
    message?:string;
}



export async function ApiStatus():Promise<ApiStatus> {
    

    const options: AxiosRequestConfig = {
        method: 'GET',
        url: `https://instagram-scraper-api2.p.rapidapi.com/v1/status`,
        headers: {
          'x-rapidapi-key': `${config.apiKey}`,
          'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
      };

      try {
        const response: AxiosResponse = await axios.request(options);
        let res = true;
        
        if(response.data.detail !== 'All is awesome'){
            res = false
        };



return {status: res, message: response.data.detail}

      } catch (error) {
        console.error('Error fetching status:', error);
      }
    


}