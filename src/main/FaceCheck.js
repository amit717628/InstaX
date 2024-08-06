"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceCheck = FaceCheck;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const config_1 = tslib_1.__importDefault(require("../../config"));
async function FaceCheck(url) {
    const data = new form_data_1.default();
    data.append('url', url); // Use the function parameter `url`
    const options = {
        method: 'POST',
        url: 'https://faceanalyzer-ai.p.rapidapi.com/faceanalysis',
        headers: {
            'x-rapidapi-key': config_1.default.FaceApiKey,
            'x-rapidapi-host': 'faceanalyzer-ai.p.rapidapi.com',
            ...data.getHeaders(),
        },
        data: data
    };
    try {
        const response = await axios_1.default.request(options);
        return response.data; // Return the response data
    }
    catch (error) {
        console.error(error);
        return null; // Return null in case of error
    }
}
