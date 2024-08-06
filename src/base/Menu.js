"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = Menu;
const terminal_kit_1 = require("terminal-kit");
function Menu() {
    terminal_kit_1.terminal.table([
        ['Option', 'Name', 'Info'],
        ["1", "User Information", "Fetch User Information"],
        ["2", "Like Fetch", "Fetch Likes"],
        ["3", "Credits", "Information"],
        // More
    ], {
        hasBorder: true,
        contentHasMarkup: true,
        borderChars: 'lightRounded',
        borderAttr: { color: 'red' },
        textAttr: { bgColor: 'default' },
        firstCellTextAttr: { bgColor: 'red' },
        firstRowTextAttr: { bgColor: 'red' },
        firstColumnTextAttr: { bgColor: 'white' },
        width: 60,
        fit: true
    });
    (0, terminal_kit_1.terminal)(`\n`);
    terminal_kit_1.terminal.yellow.bgRed("Version : v1");
}
// BY AMIT717628
