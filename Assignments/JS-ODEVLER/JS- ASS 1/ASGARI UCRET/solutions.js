const salary = Number(prompt("Please enter your salary:"))
const minimumWage= 5500
const increasedSalary = salary>= minimumWage? salary *1.1 : salary *1.5

console.log("Salary:", salary, "Increased Salary",Math.trunc(increasedSalary));