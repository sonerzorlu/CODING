const n = Number(prompt("let us know the count of number will be entered:"))
let avarage=0

for(let i=1;i<=n;i++){
const number = Number(prompt(`Please enter the ${i}. number`)) 
avarage += number

} console.log(`Avarage: ${avarage/n}`)