"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewFollowers = ViewFollowers;
const tslib_1 = require("tslib");
const terminal_kit_1 = require("terminal-kit");
const axios_1 = tslib_1.__importDefault(require("axios"));
const config_1 = tslib_1.__importDefault(require("../../config"));
async function ViewFollowers(username) {
    terminal_kit_1.terminal.white.bgBrightBlack.bold("Do you want to view followers information?:  Y/N");
    terminal_kit_1.terminal.inputField({
        history: [],
        cancelable: true
    }).promise.then(async (answer) => {
        if (answer === 'N') {
            console.log("Thanks");
            process.exit();
        }
        terminal_kit_1.terminal.clear();
        // Api 
        const options = {
            method: 'GET',
            url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/followers',
            params: {
                username_or_id_or_url: username
            },
            headers: {
                'x-rapidapi-key': config_1.default.apiKey,
                'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
            }
        };
        //
        const response = await axios_1.default.request(options);
        const userProfile = response.data.items;
        terminal_kit_1.terminal.clear();
        userProfile.items.forEach((user) => {
            const data = [
                ['Full Name', user.full_name ?? "N/A"],
                ['ID', user.id],
                ['Private', user.is_private ? "Yes" : "No"],
                ['Verified', user.is_verified ? "Yes" : "No"],
                ['Profile Pic URL', user.profile_pic_url],
                ['Username', user.username]
            ];
            (0, terminal_kit_1.terminal)("\n\n");
            terminal_kit_1.terminal.table(data, {
                hasBorder: true,
                contentHasMarkup: true,
                borderChars: 'lightRounded',
                borderAttr: { color: 'red' },
                textAttr: { bgColor: 'default' },
                firstCellTextAttr: { bgColor: 'red' },
                firstRowTextAttr: { bgColor: 'red' },
                firstColumnTextAttr: { bgColor: 'black' },
                width: 100,
                fit: true
            });
        });
        // const body = await axios.get(userProfile.data.profile_pic_url_hd, { responseType: 'arraybuffer' });
        terminal_kit_1.terminal.red.bgBlack("InstaX By Amit Kumar Singh");
        return userProfile;
    });
}
