//************************FUNCTIONS-2**************************

console.log("ARROW");

// hacim

const r=+prompt("r;")
const h=+prompt("h;")

const volume= (r,h)=>Math.round(Math.PI*r*r*h)
console.log(`${r},${h}= Volume: ${volume(r,h)}`) ;