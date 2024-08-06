import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { terminal } from 'terminal-kit';
import config from '../../config';
import { messageLog, MessageType } from '../utlils/MessageLog';
import { draw } from 'terminal-img';
import { Spin } from '../utlils/Spinner';
import { FaceAnalysisResponse, FaceCheck } from '../main/FaceCheck';

export async function UserMenu(username: string,faceUrl:FaceAnalysisResponse): Promise<void> {
  terminal(`\n\n\n`);

  terminal.table(
    [
      ['Option', 'Name', 'Info'],
      ['1', 'View Followers List', 'Fetch Followers List'],
      ['2', 'Scan Face', 'Scan Profile Face'],
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



if(input === "2"){
  // Loading 

  terminal.clear()

const loading = Spin("Loading.. .")
await new Promise(resolve => setTimeout(resolve, 4000)); 
loading.setText("Scanning... ")
await new Promise(resolve => setTimeout(resolve, 5000)); 
loading.setText("Verifying Results... ")
await new Promise(resolve => setTimeout(resolve, 5000)); 
loading.setText("Almost Done... ")
await new Promise(resolve => setTimeout(resolve, 5000)); 
loading.stop()
// Done

const dataset = faceUrl.body.faces[0];

const formatAgeRange = (ageRange: { Low: number; High: number } | undefined): string => {
  if (!ageRange) return "N/A";
  return `${ageRange.Low} - ${ageRange.High}`;
};

const formatEmotion = (emotions: string[] | undefined): string => {
  if (!emotions || emotions.length === 0) return "N/A";
  return emotions.join(', ');
};

const formatBoolean = (value: boolean | undefined): string => {
  return value ? "Yes" : "No";
};

const formatPoint = (point: { x: number; y: number }): string => {
  return `x: ${point.x.toFixed(2)}, y: ${point.y.toFixed(2)}`;
};

const data = [
  ['Gender', dataset.facialFeatures.Gender ?? "N/A"],
  ['Age', formatAgeRange(dataset.facialFeatures.AgeRange)],
  ['Smile', formatBoolean(dataset.facialFeatures.Smile)],
  ['Eyeglasses', formatBoolean(dataset.facialFeatures.Eyeglasses)],
  ['Sunglasses', formatBoolean(dataset.facialFeatures.Sunglasses)],
  ['Emotion', formatEmotion(dataset.facialFeatures.Emotions)],

  ['Eye Left Center', formatPoint(dataset.landmarks.eyeLeft.center)],
  ['Eye Left Left', formatPoint(dataset.landmarks.eyeLeft.left)],
  ['Eye Left Right', formatPoint(dataset.landmarks.eyeLeft.right)],
  ['Eye Left Down', formatPoint(dataset.landmarks.eyeLeft.down)],
  ['Eye Left Up', formatPoint(dataset.landmarks.eyeLeft.up)],

  ['Eye Right Center', formatPoint(dataset.landmarks.eyeRight.center)],
  ['Eye Right Left', formatPoint(dataset.landmarks.eyeRight.left)],
  ['Eye Right Right', formatPoint(dataset.landmarks.eyeRight.right)],
  ['Eye Right Down', formatPoint(dataset.landmarks.eyeRight.down)],
  ['Eye Right Up', formatPoint(dataset.landmarks.eyeRight.up)],

  ['Mouth Left', formatPoint(dataset.landmarks.mouth.left)],
  ['Mouth Right', formatPoint(dataset.landmarks.mouth.right)],
  ['Mouth Down', formatPoint(dataset.landmarks.mouth.down)],
  ['Mouth Up', formatPoint(dataset.landmarks.mouth.up)],

  ['Nose Center', formatPoint(dataset.landmarks.nose.center)],
  ['Nose Left', formatPoint(dataset.landmarks.nose.left)],
  ['Nose Right', formatPoint(dataset.landmarks.nose.right)],

  ['Brow Left Left', formatPoint(dataset.landmarks.browLeft.left)],
  ['Brow Left Right', formatPoint(dataset.landmarks.browLeft.right)],
  ['Brow Left Up', formatPoint(dataset.landmarks.browLeft.up)],

  ['Brow Right Left', formatPoint(dataset.landmarks.browRight.left)],
  ['Brow Right Right', formatPoint(dataset.landmarks.browRight.right)],
  ['Brow Right Up', formatPoint(dataset.landmarks.browRight.up)],

  ['Chin Bottom', formatPoint(dataset.landmarks.chinBottom)],
];



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




}




    }





  );
}
