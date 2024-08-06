import config from '../../config';
import { Spin } from '../utlils/Spinner';
import { ApiStatus } from '../main/ApiStatus';
import { messageLog, MessageType } from '../utlils/MessageLog';
import { Menu } from './Menu';
import { input } from '../main/Input';



interface apiStatus {
    status: boolean;
    message?: string;
}


export class Main {
    // Starting the script
    static async start(): Promise<apiStatus> {
        // Component
        const message: string = `
 ___           _       __  __
|_ _|_ __  ___| |_ __ _\\ \\/ /
 | || '_ \\/ __| __/ _\` |\\  / 
 | || | | \\__ \\ || (_| |/  \\ 
|___|_| |_|___/\\__\\__,_/_/\\_\\
        By Amit717628
`;

        const terminalHeight = process.stdout.rows;
        const terminalWidth = process.stdout.columns;

        const lines = message.trim().split('\n');
        const messageHeight = lines.length;
        const messageWidth = Math.max(...lines.map(line => line.length));

        const middleRow = Math.floor((terminalHeight - messageHeight) / 2);
        const middleCol = Math.floor((terminalWidth - messageWidth) / 2);

        process.stdout.write('\x1Bc');

        lines.forEach((line, index) => {
            process.stdout.cursorTo(middleCol, middleRow + index);
            console.log(line);
        });

     // Welcome END



     //  Checking 
        const srting = Spin("Loading...")
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        


// Checking Api Status
srting.setText("Checking API Status...  ")
await new Promise(resolve => setTimeout(resolve, 5000)); 

const apistatus = await ApiStatus();

if(!apistatus.status){
    srting.stop() 
messageLog(MessageType.ERROR,"API is offline! Try Again Later...")

} else {
    

        await new Promise(resolve => setTimeout(resolve, 5000)); 
        srting.setText("Starting InstaX ... ")
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        srting.stop()


}


// Checking End


// Showing Menu
        Menu()
//



// Input
input()

        

        return { status: true, message: 'None' };
    }
}



// BY AMIT717628