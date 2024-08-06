import { terminal } from "terminal-kit";

export function Menu(){


terminal.table(

    [
[ 'Option' , 'Name' , 'Info' ] ,
["1", "User Information", "Fetch User Information"],
["2","Like Fetch", "Fetch Likes"],
["3","Credits", "Information"],

// More



 ],
 {
    hasBorder: true,
    contentHasMarkup: true ,
		borderChars: 'lightRounded' ,
		borderAttr: { color: 'red' } ,
		textAttr: { bgColor: 'default' } ,
		firstCellTextAttr: { bgColor: 'red' } ,
		firstRowTextAttr: { bgColor: 'red' } ,
		firstColumnTextAttr: { bgColor: 'white' } ,
		width: 60 ,
		fit: true  
        

 }
)
terminal(`\n`)
terminal.yellow.bgRed("Version : v1")



}

// BY AMIT717628