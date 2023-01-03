console.log("**** FUNCTIONS DECLARATIONS ****");

//! DECLERATIONS
function printHello() {
console.log(`HELLO`);
    
}
printHello() // 1 invoke, call
printHello() // 1 invoke, call

function greet(firstName, lastName) {
    console.log(`hi,${firstName}${lastName}`);
    
}
greet('soner', `022221`)
greet('tarık', `zorlu`)
greet('berrın', `zorlu`)

// const name= prompt("enter hour first name")
// const surname= prompt("enter hour surname")


// ornek*******************************
function calculate(name,yob){

const age= new Date().getFullYear()-yob
return `${name}'s age is ${age}`

}

const elif=calculate("elif", 2000)
console.log(elif)
console.log(calculate("Rose",1990));

// ornek ========-----........
function oddOrEven(num) {
    return num%2 ? `ODD`: `EVEN`
    return num%2===0 ? 'even': 'odd'
    
}
const number = +prompt("please enter a number to check odd or even")
const oddEven = oddOrEven(number)
console.log(`${number} is ${oddEven}`)