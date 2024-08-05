import { terminal } from "terminal-kit";
import { FetchUser } from "../options/FetchUser";

export function input(): void {



terminal("Select the option:  ")

terminal.inputField({
    history: [], 
    cancelable: true 
}).promise.then((option) => {



if(option === "1"){
    terminal.clear()
    FetchUser()
}









})

}