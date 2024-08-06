"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Spinner_1 = require("../utlils/Spinner");
const ApiStatus_1 = require("../main/ApiStatus");
const MessageLog_1 = require("../utlils/MessageLog");
const Menu_1 = require("./Menu");
const Input_1 = require("../main/Input");
class Main {
    // Starting the script
    static async start() {
        // Component
        const message = `
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
        const srting = (0, Spinner_1.Spin)("Loading...");
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Checking Api Status
        srting.setText("Checking API Status...  ");
        await new Promise(resolve => setTimeout(resolve, 5000));
        const apistatus = await (0, ApiStatus_1.ApiStatus)();
        if (!apistatus.status) {
            srting.stop();
            (0, MessageLog_1.messageLog)(MessageLog_1.MessageType.ERROR, "API is offline! Try Again Later...");
        }
        else {
            await new Promise(resolve => setTimeout(resolve, 5000));
            srting.setText("Starting InstaX ... ");
            await new Promise(resolve => setTimeout(resolve, 5000));
            srting.stop();
        }
        // Checking End
        // Showing Menu
        (0, Menu_1.Menu)();
        //
        // Input
        (0, Input_1.input)();
        return { status: true, message: 'None' };
    }
}
exports.Main = Main;
// BY AMIT717628
