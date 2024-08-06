import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { terminal } from 'terminal-kit';
import config from '../../config';
import { messageLog, MessageType } from '../utlils/MessageLog';
import { draw } from 'terminal-img';
import { Spin } from '../utlils/Spinner';

export async function UserMenu(username: string): Promise<void> {
  terminal(`\n\n\n`);

  terminal.table(
    [
      ['Option', 'Name', 'Info'],
      ['1', 'View Followers List', 'Fetch Followers List'],
      ['2', 'View Followers Details', 'Fetch Followers Information'],
      ['3', 'View Following', 'Fetch Following'],
      ['4', 'View Posts', 'Fetch Posts']
      // More options can be added here
    ],
    {
      hasBorder: true,
      contentHasMarkup: true,
      borderChars: 'lightRounded',
      borderAttr: { color: 'red' },
      textAttr: { bgColor: 'default' },
      firstCellTextAttr: { bgColor: 'red' },
      firstRowTextAttr: { bgColor: 'red' },
      firstColumnTextAttr: { bgColor: 'white' },
      width: 60,
      fit: true,
    }
  );

  terminal(`\n\n`);
  terminal.yellow.bgBlack('Select the Option: ');

  terminal.inputField(
    {
      history: [],
      cancelable: true,
    },
   async (error, input) => {
      if (error) {
        console.error('Error reading input:', error);
        terminal.processExit(1);
      }
 


if(input === "1"){

    const options: AxiosRequestConfig = {
        method: 'GET',
  url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/followers',
  params: {
    username_or_id_or_url: username
  },
  headers: {
    'x-rapidapi-key': config.apiKey,
    'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
  }
      };

//




terminal.clear()

const loading = Spin("Loading.. .")
await new Promise(resolve => setTimeout(resolve, 4000)); 
loading.setText("Fetching Followers... ")
await new Promise(resolve => setTimeout(resolve, 5000)); 
loading.setText("Verifying Results... ")
await new Promise(resolve => setTimeout(resolve, 5000)); 
loading.setText("Almost Done... ")
await new Promise(resolve => setTimeout(resolve, 5000)); 
loading.stop()





const response: AxiosResponse = await (await axios.request(options)).data


if (response.data && response.data.items && Array.isArray(response.data.items)) {

    response.data.items.forEach( async follower => {
        
              const data = [
                ['Full Name', follower.full_name ?? "N/A"],
                ['Username', follower.username ?? "N/A"],
                ['Id', follower.id ?? "N/A"],
                ['Account Type', follower.is_private ? "Private Account" : "Public Account"]
              ];

try {
              const body = await axios.get(follower.profile_pic_url, { responseType: 'arraybuffer' });
              terminal(`\n\n`)
await draw(body.data,{height: 30,width:30});
} catch(err){
console.log("Err")
}




              terminal.table(data, {
                hasBorder: true,
                contentHasMarkup: true ,
                    borderChars: 'lightRounded' ,
                    borderAttr: { color: 'red' } ,
                    textAttr: { bgColor: 'default' } ,
                    firstCellTextAttr: { bgColor: 'white' } ,
                    firstRowTextAttr: { bgColor: 'black' } ,
                    firstColumnTextAttr: { bgColor: 'black' } ,
                    width: 50 ,
                    fit: true  
                    
            
             })

      

    });
    
} else {
   messageLog(MessageType.ERROR,"SOMETHING WENT WRONG !!!")
   process.exit()
}

terminal.white.bgBlack("InstaX By Amit Kumar Singh")

}





    }
  );
}
