import { terminal } from "terminal-kit";

export enum MessageType {
    ERROR = "red",
    SUCCESS = "green",
    INFO = "yellow"
}

export function messageLog(type:MessageType,text:string): void {

    if(type === "red"){
        terminal.red.bgBlack.bold(`ERROR : ${text}`)
    } else if (type === "green"){
        terminal.green.bgBlack.bold(`SUCCESS : ${text}`)
    } else {
        terminal.yellow.bgBlack.bold(`INFO : ${text}`)
    }
}