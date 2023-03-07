// let num=+prompt("Enter a number to generate table") 
// let range=+prompt("Enter till where the table is to be printed")
// for(let i=1;i<=range;i++){
//     document.write((i*num)+"<br>")
// }


//Example
//8*1=8
//8*2=16

let num=+prompt("Enter a number to generate table") 
let range=+prompt("Enter till where the table is to be printed")

let i=1
while(i<=range){
    document.write((i*num)+"<br>")
    i++
}

