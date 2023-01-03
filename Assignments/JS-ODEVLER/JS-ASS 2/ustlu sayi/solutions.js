const number = +prompt("please enter number")
const power = +prompt("please enter power")

let result=1
for(i=1;i<=power;i++){result*=number}console.log(`${number}^${power}=${result}`);