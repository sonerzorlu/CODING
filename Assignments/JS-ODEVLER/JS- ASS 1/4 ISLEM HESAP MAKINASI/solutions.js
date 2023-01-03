console.log("----------------------------------")
console.log(" ***** Basit Hesap Makinasi ****** ")
console.log("----------------------------------")
const num1 = Number(prompt("First Number:"))
let operator = prompt("Operator: +,-,*, /: ")
const num2 = Number(prompt("Second Number:"))
let result = 0
if (operator === "+") {
  result = num1 + num2
} else if (operator === "-") {
  result = num1 - num2
} else if (operator === "*") {
  result = num1 * num2
} else if (operator === "/") {
  result = num1 / num2
} else {
  console.log("Incorrect operator selection ")
  operator = null //! Yanlis operator girilirse operator'a null atiliyor.
}if (operator) {
  //! Eger operator truty bir degerse sonucu goster, Null gibi falsy ise gosterme
  if (operator) {
    //! Eger operator truty bir degerse sonucu goster, Null gibi falsy ise gosterme
    console.log(`${num1} ${operator} ${num2} = ${result}`)
  }