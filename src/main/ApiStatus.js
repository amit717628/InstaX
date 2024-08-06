"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiStatus = ApiStatus;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const config_1 = tslib_1.__importDefault(require("../../config"));
async function ApiStatus() {
    const options = {
        method: 'GET',
        url: `https://instagram-scraper-api2.p.rapidapi.com/v1/status`,
        headers: {
            'x-rapidapi-key': `${config_1.default.apiKey}`,
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    };
    try {
        const response = await axios_1.default.request(options);
        let res = true;
        if (response.data.detail !== 'All is awesome') {
            res = false;
        }
        ;
        return { status: res, message: response.data.detail };
    }
    catch (error) {
        console.error('Error fetching status:', error);
    }
}
