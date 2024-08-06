import { Terminal, terminal } from "terminal-kit";
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from "../../config";
import { Spin } from "../utlils/Spinner";
import { LikeRes } from "../interfaces/Likes";
import { draw } from "terminal-img";

export async function FetchLikes() {
  terminal.red.bgBlack("Enter the post/reel id: ");

  try {
    const id = await terminal.inputField({
      history: [],
      cancelable: true
    }).promise;

    if (!id) {
      terminal.red("No ID entered. Exiting...\n");
      return;
    }


    // Api
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/likes',
      params: {
        code_or_id_or_url: id
      },
      headers: {
        'x-rapidapi-key': config.apiKey,
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
      }
    };

    try {
      const response: AxiosResponse = await axios.request(options);
      const data: LikeRes = response.data;
      

      terminal.clear();

      const loading = Spin("Loading...");
      await new Promise(resolve => setTimeout(resolve, 4000));
      loading.setText("Fetching Likes...");
      await new Promise(resolve => setTimeout(resolve, 5000));
      loading.setText("Verifying Results...");
      await new Promise(resolve => setTimeout(resolve, 5000));
      loading.setText("Almost Done...");
      await new Promise(resolve => setTimeout(resolve, 5000));
      loading.stop();

      if (Array.isArray(data.data.items)) {
        terminal.white.bgBlack("Total Like :",data.data.total)
        terminal(`\n`)
        data.data.items.forEach(async(x) => {
          
          const profileData = [
            ['Full Name', x.full_name.toString() ?? "N/A"],
            ['Username', x.username.toString() ?? "N/A"],
            ['ID', x.id.toString() ?? "N/A"],
            ['Is New?', x.is_new ? "Yes" : "No"],
          ];

          try {
            const body = await axios.get(x.profile_pic_url, { responseType: 'arraybuffer' });
            terminal(`\n\n`)
await draw(body.data,{height: 20,width:20});
} catch(err){
console.log("Err")
} 
          terminal.table(profileData, {
            hasBorder: true,
            contentHasMarkup: true,
            borderChars: 'lightRounded',
            borderAttr: { color: 'red' },
            textAttr: { bgColor: 'default' },
            firstCellTextAttr: { bgColor: 'white' },
            firstRowTextAttr: { bgColor: 'black' },
            firstColumnTextAttr: { bgColor: 'black' },
            width: 50,
            fit: true
          });
        });
      } else {
        terminal.red("Unexpected data format.\n");
      }
    } catch (apiError) {
      terminal.red(`Error fetching likes: ${apiError.message}\n`);
    }
  } catch (inputError) {
    terminal.red(`Error capturing input: ${inputError.message}\n`);
  }
}
