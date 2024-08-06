import { terminal } from "terminal-kit";
import { FetchUser } from "../options/FetchUser";
import { FetchLikes } from "../options/FetchLike";
import { Credits } from "../options/Credits";

export function input(): void {


    terminal(`\n\n`)
terminal("Select the option:  ")

terminal.inputField({
    history: [], 
    cancelable: true 
}).promise.then((option) => {



if(option === "1"){
    terminal.clear()
    FetchUser()
} else if(option === "2"){
    terminal.clear()
    FetchLikes()
}
else {
    Credits()
}








})

}

// BY AMIT717628