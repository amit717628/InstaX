"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchLikes = FetchLikes;
const tslib_1 = require("tslib");
const terminal_kit_1 = require("terminal-kit");
const axios_1 = tslib_1.__importDefault(require("axios"));
const config_1 = tslib_1.__importDefault(require("../../config"));
const Spinner_1 = require("../utlils/Spinner");
const terminal_img_1 = require("terminal-img");
async function FetchLikes() {
    terminal_kit_1.terminal.red.bgBlack("Enter the post/reel id: ");
    try {
        const id = await terminal_kit_1.terminal.inputField({
            history: [],
            cancelable: true
        }).promise;
        if (!id) {
            terminal_kit_1.terminal.red("No ID entered. Exiting...\n");
            return;
        }
        // Api
        const options = {
            method: 'GET',
            url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/likes',
            params: {
                code_or_id_or_url: id
            },
            headers: {
                'x-rapidapi-key': config_1.default.apiKey,
                'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
            }
        };
        try {
            const response = await axios_1.default.request(options);
            const data = response.data;
            terminal_kit_1.terminal.clear();
            const loading = (0, Spinner_1.Spin)("Loading...");
            await new Promise(resolve => setTimeout(resolve, 4000));
            loading.setText("Fetching Likes...");
            await new Promise(resolve => setTimeout(resolve, 5000));
            loading.setText("Verifying Results...");
            await new Promise(resolve => setTimeout(resolve, 5000));
            loading.setText("Almost Done...");
            await new Promise(resolve => setTimeout(resolve, 5000));
            loading.stop();
            if (Array.isArray(data.data.items)) {
                terminal_kit_1.terminal.white.bgBlack("Total Like :", data.data.total);
                (0, terminal_kit_1.terminal)(`\n`);
                data.data.items.forEach(async (x) => {
                    const profileData = [
                        ['Full Name', x.full_name.toString() ?? "N/A"],
                        ['Username', x.username.toString() ?? "N/A"],
                        ['ID', x.id.toString() ?? "N/A"],
                        ['Is New?', x.is_new ? "Yes" : "No"],
                    ];
                    try {
                        const body = await axios_1.default.get(x.profile_pic_url, { responseType: 'arraybuffer' });
                        (0, terminal_kit_1.terminal)(`\n\n`);
                        await (0, terminal_img_1.draw)(body.data, { height: 20, width: 20 });
                    }
                    catch (err) {
                        console.log("Err");
                    }
                    terminal_kit_1.terminal.table(profileData, {
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
            }
            else {
                terminal_kit_1.terminal.red("Unexpected data format.\n");
            }
        }
        catch (apiError) {
            terminal_kit_1.terminal.red(`Error fetching likes: ${apiError.message}\n`);
        }
    }
    catch (inputError) {
        terminal_kit_1.terminal.red(`Error capturing input: ${inputError.message}\n`);
    }
}
