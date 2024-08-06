"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const terminal_kit_1 = require("terminal-kit");
const Main_1 = require("./src/base/Main");
function setupSignalHandlers() {
    process.on('SIGINT', () => {
        terminal_kit_1.terminal.red('Interrupt signal received. Exiting...\n');
        process.exit(0);
    });
    process.on('SIGTSTP', () => {
        terminal_kit_1.terminal.red('Pause signal received. Exiting...\n');
        process.exit(0);
    });
    process.on('uncaughtException', (err) => {
        terminal_kit_1.terminal.red(`Uncaught Exception: ${err.message}\n`);
        process.exit(1);
    });
    process.on('unhandledRejection', (reason) => {
        terminal_kit_1.terminal.red(`Unhandled Rejection: ${reason}\n`);
        process.exit(1);
    });
}
function startInstaX() {
    setupSignalHandlers();
    Main_1.Main.start();
}
startInstaX();
