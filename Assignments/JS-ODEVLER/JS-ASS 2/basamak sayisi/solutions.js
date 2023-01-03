let number =  Number(prompt("Please enter a number"))
let counter=0
let number1 = +prompt("Please enter the same number again")

while (number!=0) {
    number= Math.trunc(number/10)
    counter++
    
}console.log(`${number1} :  ${counter} - hanelidir`);