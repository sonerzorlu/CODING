const income = Number(prompt("Please enter your income"))
const outcome = Number(prompt("Please enter your outcome"))
const credibility = 
income - outcome >= 5500 ? "Loan available" : "Loan not available"

console.log(credibility);