"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = input;
const terminal_kit_1 = require("terminal-kit");
const FetchUser_1 = require("../options/FetchUser");
const FetchLike_1 = require("../options/FetchLike");
const Credits_1 = require("../options/Credits");
function input() {
    (0, terminal_kit_1.terminal)(`\n\n`);
    (0, terminal_kit_1.terminal)("Select the option:  ");
    terminal_kit_1.terminal.inputField({
        history: [],
        cancelable: true
    }).promise.then((option) => {
        if (option === "1") {
            terminal_kit_1.terminal.clear();
            (0, FetchUser_1.FetchUser)();
        }
        else if (option === "2") {
            terminal_kit_1.terminal.clear();
            (0, FetchLike_1.FetchLikes)();
        }
        else {
            (0, Credits_1.Credits)();
        }
    });
}
// BY AMIT717628
