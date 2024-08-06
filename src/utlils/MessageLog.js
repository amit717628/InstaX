"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageType = void 0;
exports.messageLog = messageLog;
const terminal_kit_1 = require("terminal-kit");
var MessageType;
(function (MessageType) {
    MessageType["ERROR"] = "red";
    MessageType["SUCCESS"] = "green";
    MessageType["INFO"] = "yellow";
})(MessageType || (exports.MessageType = MessageType = {}));
function messageLog(type, text) {
    if (type === "red") {
        terminal_kit_1.terminal.red.bgBlack.bold(`ERROR : ${text}`);
    }
    else if (type === "green") {
        terminal_kit_1.terminal.green.bgBlack.bold(`SUCCESS : ${text}`);
    }
    else {
        terminal_kit_1.terminal.yellow.bgBlack.bold(`INFO : ${text}`);
    }
}
// BY AMIT717628
