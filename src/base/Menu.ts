import { terminal } from "terminal-kit";

export function Menu(){


terminal.table(

    [
[ 'Option' , 'Name' , 'Info' ] ,
["1", "User Information", "Fetch User Information"],
["2", "Post Information", "Fetch Post Information"],
["3","Like", "Fetch Likes"],
["4","Highlight Information", "Fetch Highlight"]

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






}