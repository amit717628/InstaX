import { terminal } from "terminal-kit";

export function Credits(){

    terminal.clear()

    const message: string = `
    ___           _       __  __
   |_ _|_ __  ___| |_ __ _\\ \\/ /
    | || '_ \\/ __| __/ _\` |\\  / 
    | || | | \\__ \\ || (_| |/  \\ 
   |___|_| |_|___/\\__\\__,_/_/\\_\\
           
   `;
   
           const terminalHeight = process.stdout.rows;
           const terminalWidth = process.stdout.columns;
   
           const lines = message.trim().split('\n');
           const messageHeight = lines.length;
           const messageWidth = Math.max(...lines.map(line => line.length));
   
           const middleRow = Math.floor((terminalHeight - messageHeight) / 2);
           const middleCol = Math.floor((terminalWidth - messageWidth) / 2);
   
           process.stdout.write('\x1Bc');
   
           lines.forEach((line, index) => {
               process.stdout.cursorTo(middleCol, middleRow + index);
               console.log(line);
           });

    const data = [
        ["Name","Github"],
        ["Amit Kumar Singh","@amit717628"],
        ["Mayank Rawat","@mayank133711"]
    ]
    terminal.yellow.bgRed.bold("Credits")
    terminal(`\n`)
    terminal.table(data, {
        hasBorder: true,
        contentHasMarkup: true ,
            borderChars: 'lightRounded' ,
            borderAttr: { color: 'red' } ,
            textAttr: { bgColor: 'default' } ,
            firstCellTextAttr: { bgColor: 'white' } ,
            firstRowTextAttr: { bgColor: 'black' } ,
            firstColumnTextAttr: { bgColor: 'black' } ,
            width: 50 ,
            fit: true  
            
    
     })

     terminal.yellow.bgRed("Copyright 2024-2025 || Developed By Amit Kumar Singh")
}

// BY AMIT717628